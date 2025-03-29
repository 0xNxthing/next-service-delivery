import { useSearchParams } from 'next/navigation';
import { useSet } from 'react-use';
import React from 'react';

interface PriceProps {
	priceFrom?: number;
	priceTo?: number;
}

interface QueryFilters extends PriceProps {
	ingredients: string;
}

export interface Filters {
	selectedIngredients: Set<string>;
	prices: PriceProps;
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceProps, value: number) => void;
	setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

	const [selectedIngredients, { toggle: toogleIngredients }] = useSet(
		new Set<string>(searchParams.get('ingredients')?.split(',')),
	);

	const [prices, setPrices] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom') || 0),
		priceTo: Number(searchParams.get('priceTo') || 2000),
	});

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrices({
			...prices,
			[name]: value,
		});
	};

	return {
		selectedIngredients,
		prices,
		setPrices: updatePrice,
		setSelectedIngredients: toogleIngredients,
	};
};
