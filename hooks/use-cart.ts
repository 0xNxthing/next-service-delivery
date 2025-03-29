import React from 'react';
import { CartStateProduct } from '@/lib/get-cart-details';
import { useCartStore } from '@/store/cart';
import { CreateCartProductValues } from '@/services/cart.dto';

type ReturnProps = {
	totalAmount: number;
	items: CartStateProduct[];
	loading: boolean;
	updateProductQuantity: (id: number, quantity: number) => void;
	removeProductCart: (id: number) => void;
	addCartProduct: (values: CreateCartProductValues) => void;
};

export const useCart = (): ReturnProps => {
	const cartState = useCartStore((state) => state);

	React.useEffect(() => {
		cartState.fetchCartProducts();
	}, []);

	return cartState;
};
