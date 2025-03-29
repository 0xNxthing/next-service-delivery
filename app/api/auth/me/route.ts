import { getUserSession } from '@/lib/get-user-session';
import prisma from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
	try {
		const user = await getUserSession();

		if (!user) {
			return NextResponse.json({ error: 'Пользователь не авторизован' });
		}

		const data = await prisma.user.findUnique({
			where: {
				id: Number(user.id),
			},
			select: {
				fullName: true,
				email: true,
				password: false,
			},
		});

		return NextResponse.json(data);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: 'Ошибка сервера' });
	}
}
