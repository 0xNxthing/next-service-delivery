'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { Container, Categories, CartButton } from '@/components/shared';
import { Category } from '@prisma/client';

interface Props {
	categories: Category[];
	className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 200;
			setIsScrolled(scrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={cn('sticky top-0 bg-white py-2 z-10 px-5', isScrolled && 'shadow-sm', className)}>
			<Container className="flex items-end justify-between">
				<Categories items={categories} />
				<CartButton />
			</Container>
		</div>
	);
};
