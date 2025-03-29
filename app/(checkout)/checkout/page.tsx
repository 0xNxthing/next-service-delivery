'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Container, Title } from '@/components/shared';
import { CheckoutBlock } from '@/components/shared/checkout/checkout-block';
import { CheckoutItem } from '@/components/shared/checkout/checkout-item';
import { CheckoutSidebar } from '@/components/shared/checkout/checkout-sidebar';
import { useCart } from '@/hooks/use-cart';
import { CheckoutContactsForm } from '@/components/shared/checkout/checkout-contacts-form';
import { CheckoutAddressForm } from '@/components/shared/checkout/checkout-address-form';
import { FormProvider, useForm } from 'react-hook-form';
import {
	checkoutFormSchema,
	CheckoutFormValues,
} from '@/components/shared/checkout/checkout-form-schema';
import { createOrder } from '@/app/actions';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import React from 'react';
import { Api } from '@/services/api-client';

export default function CheckoutPage() {
	const { totalAmount, items, updateProductQuantity, removeProductCart, loading } = useCart();
	const { data: session } = useSession();

	const form = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phone: '',
			address: '',
			comment: '',
		},
	});

	React.useEffect(() => {
		async function fetchUserInfo() {
			const data = await Api.auth.getMe();
			const [firstName, lastName] = data.fullName.split(' ');

			form.setValue('firstName', firstName);
			form.setValue('lastName', lastName);
			form.setValue('email', data.email);
		}

		if (session) {
			fetchUserInfo();
		}
	}, [session]);

	const onSubmit = async (data: CheckoutFormValues) => {
		try {
			const url = await createOrder(data);
			toast.success('Переход на страницу оплаты...');

			if (url) {
				location.href = url;
			}
		} catch (error) {
			console.log(error);
			toast.error('Не удалось создать заказ');
		}
	};

	const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
		updateProductQuantity(id, newQuantity);
	};

	return (
		<Container className="mt-10">
			<Title className="font-extrabold mb-8 text-[36px]" text="Оформление заказа" />

			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="flex gap-10">
						<div className="flex flex-col gap-10 flex-1 mb-16">
							<CheckoutBlock title="1. Корзина">
								<div className="flex flex-col gap-4 min-h-[80px]">
									{items.map((item) => (
										<CheckoutItem
											key={item.id}
											id={item.id}
											imageUrl={item.imageUrl}
											name={item.name}
											price={item.price}
											quantity={item.quantity}
											onClickCountButton={(type) =>
												onClickCountButton(item.id, item.quantity, type)
											}
											onClickRemoveButton={() => removeProductCart(item.id)}
										/>
									))}
								</div>
							</CheckoutBlock>

							<CheckoutBlock title="2. Персональные данные">
								<CheckoutContactsForm />
							</CheckoutBlock>

							<CheckoutBlock title="3. Адрес доставки">
								<CheckoutAddressForm />
							</CheckoutBlock>
						</div>

						<div className="w-[450px]">
							<CheckoutSidebar totalAmount={totalAmount} loading={loading} />
						</div>
					</div>
				</form>
			</FormProvider>
		</Container>
	);
}
