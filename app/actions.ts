'use server';

import { CheckoutFormValues } from '@/components/shared/checkout/checkout-form-schema';
import { authOptions } from '@/lib/auth-options';
import { createPayment } from '@/lib/create-payment';
import { getUserSession } from '@/lib/get-user-session';
import prisma from '@/prisma/prisma-client';
import { OrderStatus, Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';

export async function createOrder(data: CheckoutFormValues) {
	try {
		const cookieStore = await cookies();
		const cartToken = cookieStore.get('cartToken')?.value;

		if (!cartToken) {
			throw new Error('Ошибка: cartToken not found');
		}

		const userCart = await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						product: true,
					},
				},
			},
			where: {
				token: cartToken,
			},
		});

		if (!userCart) {
			throw new Error('Ошибка: userCart not found');
		}

		if (userCart?.totalAmount === 0) {
			throw new Error('Ошибка: ваша корзина пуста');
		}

		const session = await getServerSession(authOptions);
		const userId = session?.user?.id ? Number(session.user.id) : null;

		const order = await prisma.order.create({
			data: {
				token: cartToken,
				fullName: data.firstName + ' ' + data.lastName,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart.totalAmount + 250,
				status: OrderStatus.PENDING,
				products: JSON.stringify(userCart.items),
				userId: userId,
			},
		});

		await prisma.cart.update({
			where: {
				id: userCart.id,
			},
			data: {
				totalAmount: 0,
			},
		});

		await prisma.cartProduct.deleteMany({
			where: {
				cartId: userCart.id,
			},
		});

		const paymentData = await createPayment({
			amount: order.totalAmount + 250,
			orderId: order.id,
			description: 'Оплата заказа №' + order.id,
		});

		if (!paymentData) {
			throw new Error('Ошибка: оплата не прошла');
		}

		await prisma.order.update({
			where: {
				id: order.id,
			},
			data: {
				paymentId: paymentData.id,
			},
		});

		console.log(paymentData.confirmation.confirmation_url);

		return paymentData.confirmation.confirmation_url;
	} catch (error) {
		console.log(error);
	}
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
	try {
		const currentUser = await getUserSession();

		if (!currentUser) {
			throw new Error('Пользователь не найден');
		}

		const findUser = await prisma.user.findFirst({
			where: {
				id: Number(currentUser.id),
			},
		});

		await prisma.user.update({
			where: {
				id: Number(currentUser.id),
			},
			data: {
				fullName: body.fullName,
				email: body.email,
				password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
			},
		});
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export async function registerUser(body: Prisma.UserCreateInput) {
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: body.email,
			},
		});

		if (user) {
			throw new Error('Пользователь с таким email уже существует');
		}

		const createdUser = await prisma.user.create({
			data: {
				fullName: body.fullName,
				email: body.email,
				password: hashSync(body.password, 10),
			},
		});
	} catch (error) {
		console.log(error);
		throw error;
	}
}
