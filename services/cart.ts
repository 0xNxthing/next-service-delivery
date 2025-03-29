import { axiosInstance } from './instance';
import { CartDTO, CreateCartProductValues } from './cart.dto';

export const getCart = async (): Promise<CartDTO> => {
	return (await axiosInstance.get<CartDTO>('/cart')).data;
};

export const updateProductQuantity = async (
	cartProductId: number,
	quantity: number,
): Promise<CartDTO> => {
	return (await axiosInstance.patch<CartDTO>('/cart/' + cartProductId, { quantity })).data;
};

export const removeProductCart = async (cartProductId: number): Promise<CartDTO> => {
	return (await axiosInstance.delete<CartDTO>('/cart/' + cartProductId)).data;
};

export const addCartProduct = async (values: CreateCartProductValues): Promise<CartDTO> => {
	return (await axiosInstance.post<CartDTO>('/cart', values)).data;
};
