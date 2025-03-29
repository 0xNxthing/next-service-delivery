import { Cart, CartProduct, Product } from '@prisma/client';

export type CartProductDTO = CartProduct & {
	product: Product;
};

export interface CartDTO extends Cart {
	items: CartProductDTO[];
}

export interface CreateCartProductValues {
	productId: number;
}
