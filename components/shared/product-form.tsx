'use client';

import React from 'react';
import toast from 'react-hot-toast';
import { ChooseProductForm } from './choose-product-form';
import { Product } from '@prisma/client';
import { useCartStore } from '@/store/cart';

interface Props {
	product: Product;
	onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit: _onSubmit }) => {
	const addCartProduct = useCartStore((state) => state.addCartProduct);
	const loading = useCartStore((state) => state.loading);

	const onSubmit = async () => {
		try {
			await addCartProduct({
				productId: product.id,
			});
			toast.success('Добавлено: ' + product.name);
			_onSubmit?.();
		} catch (err) {
			toast.error('Не удалось добавить товар в корзину');
			console.error(err);
		}
	};

	return (
		<ChooseProductForm
			imageUrl={product.imageUrl}
			name={product.name}
			onSubmit={onSubmit}
			price={product.price}
			description={product.description}
			structure={product.structure}
			loading={loading}
		/>
	);
};
