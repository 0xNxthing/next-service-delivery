import prisma from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
	const users = await prisma.user.findMany();
	return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
	const data = await req.json();

	const user = await prisma.user.create({
		data: {
			fullName: data.fullName,
			email: data.email,
			password: data.password,
			role: data.role,
			orders: data.orders,
		},
	});

	return NextResponse.json(user, { status: 201 });
}
