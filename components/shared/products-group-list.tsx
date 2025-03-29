'use client';

import React, { RefObject } from 'react';
import { useIntersection } from 'react-use';
import { Title, ProductCard } from '@/components/shared';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
	title: string;
	items: any[];
	listClassName?: string;
	categoryId: number;
	className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	listClassName,
	categoryId,
	className,
}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	const intersectionRef = React.useRef<HTMLDivElement>(null);
	const intersection = useIntersection(intersectionRef as RefObject<HTMLElement>, {
		threshold: 0.8,
	});

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
			console.log(categoryId);
		}
	}, [categoryId, intersection?.isIntersecting, title]);

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items.map((item) => (
					<ProductCard
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						description={item.description}
						imageUrl={item.imageUrl}
					/>
				))}
			</div>
		</div>
	);
};
