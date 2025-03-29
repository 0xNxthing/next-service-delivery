import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface Props {
	imageUrl: string;
	name: string;
	price: number;
	description: string;
	structure: string;
	loading?: boolean;
	onSubmit?: VoidFunction;
	className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
	name,
	imageUrl,
	price,
	description,
	structure,
	onSubmit,
	className,
	loading,
}) => {
	return (
		<div className={cn('flex flex-1 bg-secondary', className)}>
			<img
				src={imageUrl}
				alt={name}
				className="h-[340px] my-auto relative left-2 top-2 transition-all z-10 duration-300 object-cover py-auto drop-shadow-lg"
			/>

			<div className="flex flex-col justify-between w=[490px] h-[550px] p-7 bg-[#ffffff]">
				<div>
					<Title text={name} size="md" className="font-extrabold mb-3" />

					<p className="text-gray-500 mb-4">{description}</p>

					<p className="text-gray-500">{structure}</p>
				</div>

				<Button
					loading={loading}
					onClick={() => onSubmit?.()}
					className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
					Добавить в корзину за {price} ₽
				</Button>
			</div>
		</div>
	);
};
