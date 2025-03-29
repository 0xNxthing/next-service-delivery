import { Order } from '@prisma/client';
import { axiosInstance } from './instance';

export const getOrders = async (): Promise<Order[]> => {
	try {
		const response = await axiosInstance.get<Order[]>('/orders');
		const data = response.data;
		return data;
	} catch (error) {
		console.error('[GET_ORDERS_CLIENT_ERROR]', error);
		return [];
	}
};
