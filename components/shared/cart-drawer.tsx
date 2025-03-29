'use client';

import React from 'react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CartDrawerItem } from './cart-drawer-item';
import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';
import { Title } from './title';
import { cn } from '@/lib/utils';

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { totalAmount, items, updateProductQuantity, removeProductCart } = useCart();

	const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
		updateProductQuantity(id, newQuantity);
	};

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>

			<SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
				<div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
					<SheetHeader>
						<SheetTitle>
							{totalAmount > 0 ? (
								<>
									Товаров в корзине: <span className="font-bold">{items.length}</span>
								</>
							) : (
								''
							)}
						</SheetTitle>
					</SheetHeader>

					{!totalAmount && (
						<div className="flex flex-col items-center justify-center w-72 mx-auto">
							<Image src="/assets/empty-box.png" alt="Empty cart" width={140} height={140} />
							<Title size="sm" text="Корзина пустая" className="text-center font-bold my-3" />
							<p className="text-center text-neutral-500 mb-10">
								Добавьте хотя бы один товар, чтобы совершить заказ
							</p>
							<Button asChild className="w-56 h-12 text-base" size="lg">
								<SheetClose>
									<ArrowLeft className="w-5 mr-2" />
									Вернуться назад
								</SheetClose>
							</Button>
						</div>
					)}

					{totalAmount > 0 && (
						<>
							<div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
								{items.map((item) => (
									<CartDrawerItem
										key={item.id}
										id={item.id}
										imageUrl={item.imageUrl}
										name={item.name}
										price={item.price}
										quantity={item.quantity}
										onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
										onClickRemoveButton={() => removeProductCart(item.id)}
									/>
								))}
							</div>

							<SheetFooter className="-mx-6 bg-[#F4F1EE] p-8 pt-4">
								<div className="w-full">
									<div className="flex mb-6">
										<span className="flex flex-1 text-lg text-neutral-500">
											Итого
											<div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
										</span>
										<span className="font-bold text-lg">
											{items.reduce((acc, item) => acc + item.price, 0)} ₽
										</span>
									</div>

									<Link href="/checkout">
										<Button type="submit" className="w-full h-12 text-base">
											Оформить заказ
											<ArrowRight className="w-5 ml-2" />
										</Button>
									</Link>
								</div>
							</SheetFooter>
						</>
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
};
