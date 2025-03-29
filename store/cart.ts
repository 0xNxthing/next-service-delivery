import { CartStateProduct, getCartDetails } from '@/lib/get-cart-details';
import { Api } from '@/services/api-client';
import { CreateCartProductValues } from '@/services/cart.dto';
import { create } from 'zustand';

export interface CartState {
	loading: boolean;
	error: boolean;
	totalAmount: number;
	items: CartStateProduct[];
	fetchCartProducts: () => Promise<void>;
	updateProductQuantity: (id: number, quantity: number) => Promise<void>;
	addCartProduct: (values: CreateCartProductValues) => Promise<void>;
	removeProductCart: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
	items: [],
	error: false,
	loading: false,
	totalAmount: 0,

	fetchCartProducts: async () => {
		try {
			set({ loading: true, error: false });
			const data = await Api.cart.getCart();
			set(getCartDetails(data));
		} catch (error) {
			console.log(error);
			set({ error: true });
		} finally {
			set({ loading: false });
		}
	},

	removeProductCart: async (id: number) => {
		try {
			set({ loading: true, error: false });
			const data = await Api.cart.removeProductCart(id);
			set(getCartDetails(data));
		} catch (error) {
			console.log(error);
			set({ error: true });
		} finally {
			set({ loading: false });
		}
	},

	updateProductQuantity: async (id: number, quantity: number) => {
		try {
			set({ loading: true, error: false });
			const data = await Api.cart.updateProductQuantity(id, quantity);
			set(getCartDetails(data));
		} catch (error) {
			console.log(error);
			set({ error: true });
		} finally {
			set({ loading: false });
		}
	},

	addCartProduct: async (values: CreateCartProductValues) => {
		try {
			set({ loading: true, error: false });
			const data = await Api.cart.addCartProduct(values);
			set(getCartDetails(data));
		} catch (error) {
			console.log(error);
			set({ error: true });
		} finally {
			set({ loading: false });
		}
	},
}));
