import { updateCartTotalAmount } from '@/lib/update-cart-total-amount';
import prisma from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

// Убираем пользовательский интерфейс Params и полагаемся на вывод типов Next.js
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const id = Number(params.id);
		const data = (await req.json()) as { quantity: number };
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' }, { status: 401 });
		}

		const cartProduct = await prisma.cartProduct.findFirst({
			where: {
				id,
			},
		});

		if (!cartProduct) {
			return NextResponse.json({ error: 'Cart product not found' }, { status: 404 });
		}

		await prisma.cartProduct.update({
			where: {
				id,
			},
			data: {
				quantity: data.quantity,
			},
		});

		const updatedUserCart = await updateCartTotalAmount(token);
		return NextResponse.json(updatedUserCart);
	} catch (error) {
		console.log('[CART_PATCH]', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const id = Number(params.id);
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' }, { status: 401 });
		}

		const cartProduct = await prisma.cartProduct.findFirst({
			where: {
				id,
			},
		});

		if (!cartProduct) {
			return NextResponse.json({ error: 'Cart product not found' }, { status: 404 });
		}

		await prisma.cartProduct.delete({
			where: {
				id,
			},
		});

		const updatedUserCart = await updateCartTotalAmount(token);
		return NextResponse.json(updatedUserCart);
	} catch (error) {
		console.log('[CART_DELETE]', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
