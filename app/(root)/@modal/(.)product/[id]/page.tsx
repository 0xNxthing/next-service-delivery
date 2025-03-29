import { ChooseProductModal } from '@/components/shared/modals/choose-product-modal';
import prisma from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { PageProps } from 'next';

// Типизация с использованием PageProps
export default async function ProductModalPage({ params }: PageProps<{ id: string }>) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(params.id),
		},
		include: {
			ingredients: true,
		},
	});

	if (!product) {
		return notFound();
	}

	return <ChooseProductModal product={product} />;
}
