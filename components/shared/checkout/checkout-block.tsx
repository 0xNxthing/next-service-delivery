import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from '../title';

interface Props {
	title?: string;
	endAdornment?: React.ReactNode;
	className?: string;
	contentClassName?: string;
}

export const CheckoutBlock: React.FC<React.PropsWithChildren<Props>> = ({
	title,
	endAdornment,
	className,
	contentClassName,
	children,
}) => {
	return (
		<div className={cn('bg-white rounded-3xl shadow-sm', className)}>
			{title && (
				<div className="flex items-center justify-between p-5 px-7 border-b border-gray-100">
					<Title text={title} size="sm" className="font-bold" />
					{endAdornment}
				</div>
			)}

			{title === '1. Корзина' ? (
				<div className={cn('px-0 py-4', contentClassName)}>{children}</div>
			) : (
				<div className={cn('px-5 py-4', contentClassName)}>{children}</div>
			)}
		</div>
	);
};
