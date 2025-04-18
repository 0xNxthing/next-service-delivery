import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { Title } from '@/components/shared/title';
import { TopBar } from '@/components/shared/top-bar';
import { findProducts, GetSearchParams } from '@/lib/find-products';
import { Suspense } from 'react';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
	const categories = await findProducts(searchParams);

	return (
		<>
			<Container className="my-10 px-5 xl:px-0">
				<Title text="Каталог" size="lg" className="font-extrabold mb-5" />
			</Container>

			<TopBar categories={categories.filter((category) => category.products.length > 0)} />

			<Container className="py-10 flex gap-[70px] px-8 lg:px-5 xl:px-0">
				<div className="flex-1">
					<div className="flex flex-col gap-16">
						{categories.map(
							(category) =>
								category.products.length > 0 && (
									<ProductsGroupList
										key={category.id}
										title={category.name}
										categoryId={category.id}
										items={category.products}
									/>
								),
						)}
					</div>
				</div>

				<div className="w-[180px]">
					<Suspense>
						<Filters className="sticky top-0 hidden sm:block" />
					</Suspense>
				</div>
			</Container>
		</>
	);
}
