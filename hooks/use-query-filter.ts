import React from 'react';
import { Filters } from './use-filters';
import qs from 'qs';
import { useRouter } from 'next/navigation';

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter();
	const isMounted = React.useRef(false);

	React.useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}

		const params = {
			...filters.prices,
			ingredients: Array.from(filters.selectedIngredients),
		};

		const query = qs.stringify(params, {
			arrayFormat: 'comma',
		});

		router.push(`?${query}`, {
			scroll: false,
		});
	}, [filters.prices, filters.selectedIngredients, router]);
};
