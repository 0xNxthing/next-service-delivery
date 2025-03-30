import Link from 'next/link';
import React from 'react';
import { Title } from '@/components/shared';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cart';
import toast from 'react-hot-toast';

interface Props {
	id: number;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
	onSubmit?: VoidFunction;
	className?: string;
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	description,
	imageUrl,
	onSubmit: _onSubmit,
	className,
}) => {
	const addCartProduct = useCartStore((state) => state.addCartProduct);

	const onSubmit = async () => {
		try {
			await addCartProduct({
				productId: id,
			});
			toast.success('Добавлено: ' + name);
			_onSubmit?.();
		} catch (err) {
			toast.error('Не удалось добавить товар в корзину');
			console.error(err);
		}
	};

	return (
		<div
			className={cn(
				'h-[490px] min-w-[350px] max-w-[350px] 2xl:min-w-[330px] 2xl:max-w-[330px] flex flex-col mb-8',
				className,
			)}>
			<Link href={`/product/${id}`} className="flex flex-col h-full">
				<div className="flex justify-center bg-secondary rounded-lg h-[260px]">
					<img src={imageUrl} alt="Logo" className="h-[200px] object-cover mt-7 drop-shadow-lg" />
				</div>

				<Title text={name} size="sm" className="mb-1 mt-4 font-bold" />

				<p className="text-sm text-gray-400">{description}</p>

				<div className="flex justify-between items-center mt-auto">
					<span className="text-[20px]">
						<b>{price} ₽</b>
					</span>
					<Button
						onClick={(event) => {
							event.preventDefault();
							event.stopPropagation();
							onSubmit?.();
						}}
						variant="secondary"
						className="text-base font-bold">
						<Plus className="mr-1" size={20} />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	);
};
