'use client';

import React from 'react';
import { Title, CheckboxFiltersGroup } from '@/components/shared';
import { Input } from '../ui/input';
import { useIngredients, useFilters, useQueryFilters } from '@/hooks';

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading } = useIngredients();
	const filters = useFilters();

	useQueryFilters(filters);

	const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

	return (
		<div className={className}>
			<Title text="Фильтры" size="sm" className="font-bold" />

			<div className="mt-6 border-t border-t-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-6">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={2000}
						value={String(filters.prices.priceFrom)}
						onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
					/>
					<Input
						type="number"
						min={0}
						max={2000}
						placeholder="2000"
						value={String(filters.prices.priceTo)}
						onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
					/>
				</div>
				<div>
					<CheckboxFiltersGroup
						title="Категории"
						name="ingredients"
						className="mt-5"
						items={items}
						loading={loading}
						onClickCheckbox={filters.setSelectedIngredients}
						selectedIds={filters.selectedIngredients}
					/>
				</div>
			</div>
		</div>
	);
};
