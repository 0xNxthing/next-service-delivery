import prisma from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
	const products = await prisma.product.findMany();
	return NextResponse.json(products);
}
