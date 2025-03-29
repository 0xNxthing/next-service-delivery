import { authOptions } from '@/lib/auth-options';
import prisma from '@/prisma/prisma-client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || !session.user?.id) {
			throw new Error('Ошибка: пользователь не авторизован');
		}

		const userId = Number(session.user.id);

		const orders = await prisma.order.findMany({
			where: {
				userId: userId,
			},
			orderBy: {
				createdAt: 'desc',
			},
			include: {
				user: true,
			},
		});
		console.log('[API_ORDERS]', JSON.stringify(orders, null, 2));
		return NextResponse.json(orders);
	} catch (error) {
		console.log(error);
		throw error;
	}
}
