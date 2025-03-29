import { cn } from '@/lib/utils';
import React from 'react';
import { CountButton } from '../count-button';
import { X } from 'lucide-react';

interface Props {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
	quantity: number;
	onClickCountButton?: (type: 'plus' | 'minus') => void;
	onClickRemoveButton?: () => void;
	className?: string;
}

export const CheckoutItem: React.FC<Props> = ({
	imageUrl,
	name,
	price,
	quantity,
	onClickCountButton,
	onClickRemoveButton,
	className,
}) => {
	return (
		<div className={cn('flex items-center justify-between mr-4', className)}>
			<img className="h-[80px] py-auto" src={imageUrl} alt="Undefined" />
			<h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
			<div className="flex items-center justify-between gap-8">
				<h2 className={cn('font-bold', className)}>{price} ₽</h2>
				<CountButton onClick={onClickCountButton} value={quantity} />
				<button type="button" onClick={onClickRemoveButton}>
					<X className="text-gray-400 cursor-pointer hover:text-gray-600" />
				</button>
			</div>
		</div>
	);
};
