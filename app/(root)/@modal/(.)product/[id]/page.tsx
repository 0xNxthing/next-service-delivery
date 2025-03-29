import { ChooseProductModal } from '@/components/shared/modals/choose-product-modal';
import prisma from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

interface PageProps {
	params: { id: string };
}

export default async function ProductModalPage({ params }: PageProps) {
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
