'use client';

import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Skeleton } from '../ui/skeleton';

type Item = FilterCheckboxProps;

interface Props {
	title: string;
	items: Item[];
	loading?: boolean;
	onClickCheckbox?: (id: string) => void;
	defaultValues?: string[];
	selectedIds?: Set<string>;
	name?: string;
	className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	loading,
	onClickCheckbox,
	selectedIds,
	name,
	className,
}) => {
	if (loading) {
		return (
			<div className={className}>
				<p className="font-bold mb-5">{title}</p>

				<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="w-28 h-6" />
				</div>
			</div>
		);
	}

	return (
		<div className={className}>
			<p className="font-bold mb-5">{title}</p>
			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{items.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selectedIds?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						name={name}
					/>
				))}
			</div>
		</div>
	);
};
