'use client';

import { getOrders } from '@/services/orders';
import { Order } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { Title } from './title';

export const OrdersList: React.FC = () => {
	const [orders, setOrders] = useState<Order[]>([]);

	useEffect(() => {
		async function fetchOrders() {
			try {
				const data = await getOrders();
				setOrders(data);
			} catch (err) {
				console.error(err);
				throw err;
			}
		}

		fetchOrders();
	}, []);

	if (orders.length === 0) {
		return (
			<div className="container mx-auto py-10">
				<h1 className="text-2xl font-bold mb-6">Ваши заказы</h1>
				<p>К сожалению у вас пока нет заказов</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto py-10">
			<Title text="Ваши заказы" size="md" className="font-bold mb-5" />
			<div className="grid gap-6">
				{orders.map((order) => (
					<div
						key={order.id}
						className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-1">
						<Title text={`Заказ #${order.id}`} size="sm" className="font-bold mb-2" />
						<p>
							<strong>Дата:</strong> {new Date(order.createdAt).toLocaleDateString('ru-RU')}
						</p>

						<p>
							<strong>Статус:</strong>{' '}
							{order.status === 'PENDING'
								? 'Ожидает оплаты'
								: order.status === 'SUCCEEDED'
									? 'Оплачен'
									: 'Отменен'}
						</p>
						<p>
							<strong>Адрес:</strong> {order.address}
						</p>
						<p>
							<strong>Телефон:</strong> {order.phone}
						</p>
						<div>
							<strong>Товары:</strong>
							<ul className="list-disc pl-5">
								{JSON.parse(order.products as string).map(
									(item: { product: { name: string; price: number }; quantity: number }) => (
										<li key={item.product.name}>
											{item.product.name} - {item.quantity} шт. -{' '}
											{item.quantity * item.product.price} ₽
										</li>
									),
								)}
							</ul>
						</div>
						<p>
							<strong>Сумма:</strong> {order.totalAmount} ₽
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
