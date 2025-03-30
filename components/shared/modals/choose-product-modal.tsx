'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@prisma/client';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ProductForm } from '../product-form';

interface Props {
	product: Product;
	className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter();

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogTitle>
				<DialogContent
					className={cn(
						'p-0 w-[400px] sm:w-[1000px] lg:w-[1000px] lg:max-w-[1000px] max-h-[700px] sm:min-h-[500px] bg-white overflow-hidden',
						className,
					)}>
					<ProductForm product={product} onSubmit={() => router.back()} />
				</DialogContent>
			</DialogTitle>
		</Dialog>
	);
};
