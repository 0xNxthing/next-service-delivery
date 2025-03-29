import { findOrCreateCart } from '@/lib/find-or-create-cart';
import { updateCartTotalAmount } from '@/lib/update-cart-total-amount';
import prisma from '@/prisma/prisma-client';
import { CreateCartProductValues } from '@/services/cart.dto';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ totalAmount: 0, items: [] });
		}

		const userCart = await prisma.cart.findFirst({
			where: {
				token,
			},
			include: {
				items: {
					orderBy: {
						createdAt: 'desc',
					},
					include: {
						product: true,
					},
				},
			},
		});

		return NextResponse.json(userCart);
	} catch (error) {
		console.log(error);
	}
}

export async function POST(req: NextRequest) {
	try {
		let token = req.cookies.get('cartToken')?.value;

		if (!token) {
			token = crypto.randomUUID();
		}

		const userCart = await findOrCreateCart(token);

		const data = (await req.json()) as CreateCartProductValues;

		const findProductCart = await prisma.cartProduct.findFirst({
			where: {
				cartId: userCart.id,
				productId: data.productId,
			},
		});

		if (findProductCart) {
			await prisma.cartProduct.update({
				where: {
					id: findProductCart.id,
				},
				data: {
					quantity: findProductCart.quantity + 1,
				},
			});
		} else {
			await prisma.cartProduct.create({
				data: {
					cartId: userCart.id,
					productId: data.productId,
					quantity: 1,
				},
			});
		}

		const updateUserCart = await updateCartTotalAmount(token);

		const resp = NextResponse.json(updateUserCart);
		resp.cookies.set('cartToken', token);
		return resp;
	} catch (error) {
		console.log(error);
	}
}
