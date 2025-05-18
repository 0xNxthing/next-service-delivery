import { Container } from '@/components/shared/container';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { Title } from '@/components/shared/title';
import { TopBar } from '@/components/shared/top-bar';
import { findProducts, GetSearchParams } from '@/lib/find-products';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
	const categories = await findProducts(searchParams);

	return (
		<>
			<Container className="my-10 px-5 xl:px-0">
				<Title text="Каталог" size="lg" className="font-extrabold mb-5" />
			</Container>

			<TopBar categories={categories} />

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
			</Container>
		</>
	);
}
