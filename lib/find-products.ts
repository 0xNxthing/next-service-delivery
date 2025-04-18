import prisma from '@/prisma/prisma-client';

export interface GetSearchParams {
	query?: string;
	sortBy?: string;
	ingredients?: string;
	priceFrom?: string;
	priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 2000;

export const findProducts = async (params: GetSearchParams) => {
	const ingredientsIdArr = params.ingredients?.split(',').map(Number);

	const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
	const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;

	const categories = await prisma.category.findMany({
		include: {
			products: {
				orderBy: {
					id: 'desc',
				},
				where: {
					ingredients: {
						some: {
							ingredientId: {
								in: ingredientsIdArr,
							},
						},
					},
					price: {
						gte: minPrice,
						lte: maxPrice,
					},
				},
				include: {
					ingredients: true,
				},
			},
		},
	});

	return categories;
};
