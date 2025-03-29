import React from 'react';
import { CheckoutBlock } from './checkout-block';
import { ArrowRight, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
	loading?: boolean;
	totalAmount: number;
}

export const CheckoutSidebar: React.FC<Props> = ({ totalAmount, loading = true }) => {
	let DELIVERY_PRICE = 0;
	if (totalAmount) {
		DELIVERY_PRICE = 250;
	}
	const totalPrice = totalAmount + DELIVERY_PRICE;

	return (
		<CheckoutBlock className="p-6 sticky top-4">
			<div className="flex flex-col gap-1 mb-8">
				<span className="text-xl">Итого:</span>
				{loading ? (
					<Skeleton className="w-[110px] h-11" />
				) : (
					<span className="h-11 text-[32px] font-extrabold">{totalPrice} ₽</span>
				)}
			</div>

			<div className="flex my-4">
				<span className="flex flex-1 text-lg text-neutral-500">
					<Package className="mr-2 text-gray-300" />
					Стоимость товаров:
					<div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
				</span>
				<span className="font-bold text-lg">
					{loading ? <Skeleton className="w-[60px] h-6" /> : totalAmount + '₽'}
				</span>
			</div>

			<div className="flex my-4">
				<span className="flex flex-1 text-lg text-neutral-500">
					<Truck className="mr-2 text-gray-300" />
					Стоимость доставки:
					<div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
				</span>
				<span className="font-bold text-lg">{DELIVERY_PRICE} ₽</span>
			</div>

			<Button className="w-full h-14 rounded-2xl mt-6 text-base font-bold" type="submit">
				Перейти к оплате
				<ArrowRight className="w-5 ml-2" />
			</Button>
		</CheckoutBlock>
	);
};
