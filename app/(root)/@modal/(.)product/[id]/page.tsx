import { ChooseProductModal } from '@/components/shared/modals/choose-product-modal';
import prisma from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductModalPage(
	props: Awaited<Promise<{ params: { id: string } }>>,
) {
	const { params } = props; // Теперь params уже не Promise

	if (!params?.id) return notFound();

	const product = await prisma.product.findFirst({
		where: { id: Number(params.id) },
		include: { ingredients: true },
	});

	if (!product) return notFound();

	return <ChooseProductModal product={product} />;
}
