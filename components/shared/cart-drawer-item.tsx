import { cn } from '@/lib/utils';
import React from 'react';
import { CountButton } from './count-button';
import { Trash2Icon } from 'lucide-react';

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

export const CartDrawerItem: React.FC<Props> = ({
	imageUrl,
	name,
	price,
	quantity,
	onClickCountButton,
	onClickRemoveButton,
	className,
}) => {
	return (
		<div className={cn('flex bg-white mb-4 p-5 gap-5', className)}>
			<img className="h-[80px] py-auto" src={imageUrl} alt="Undefined" />

			<div className="flex-1">
				<div className="flex flex-1 items-center justify-between">
					<h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
				</div>
				<hr className="my-4" />
				<div className="flex items-center justify-between">
					<CountButton onClick={onClickCountButton} value={quantity} />
					<div className="flex items-center gap-3">
						<h2 className={cn('font-bold', className)}>{price} ₽</h2>
						<Trash2Icon
							onClick={onClickRemoveButton}
							className="text-gray-400 cursor-pointer hover:text-gray-600"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
