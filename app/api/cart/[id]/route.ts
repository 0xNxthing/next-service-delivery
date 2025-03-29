import { updateCartTotalAmount } from '@/lib/update-cart-total-amount';
import prisma from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const id = Number(params.id);
		const data = (await req.json()) as { quantity: number };
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' });
		}

		const cartProduct = await prisma.cartProduct.findFirst({
			where: {
				id,
			},
		});

		if (!cartProduct) {
			return NextResponse.json({ error: 'Cart product not found' });
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
		console.log(error);
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const id = Number(params.id);
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' });
		}

		const cartProduct = await prisma.cartProduct.findFirst({
			where: {
				id,
			},
		});

		if (!cartProduct) {
			return NextResponse.json({ error: 'Cart product not found' });
		}

		await prisma.cartProduct.delete({
			where: {
				id,
			},
		});

		const updatedUserCart = await updateCartTotalAmount(token);
		return NextResponse.json(updatedUserCart);
	} catch (error) {
		console.log(error);
	}
}
