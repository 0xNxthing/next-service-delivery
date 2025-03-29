import { CartDTO } from '@/services/cart.dto';

export type CartStateProduct = {
	id: number;
	quantity: number;
	name: string;
	imageUrl: string;
	price: number;
};

interface ReturnProps {
	items: CartStateProduct[];
	totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
	const items = data.items.map((item) => ({
		id: item.id,
		quantity: item.quantity,
		name: item.product.name,
		imageUrl: item.product.imageUrl,
		price: item.product.price * item.quantity,
	})) as CartStateProduct[];

	return {
		items,
		totalAmount: data.totalAmount,
	};
};
