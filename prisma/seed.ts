import { categories, products } from './constants';
import prisma from './prisma-client';

async function up() {
	await prisma.category.createMany({
		data: categories,
	});

	for (const product of products) {
		await prisma.product.create({
			data: {
				name: product.name,
				price: product.price,
				imageUrl: product.imageUrl,
				description: product.description,
				weight: product.weight,
				structure: product.structure,
				categoryId: product.categoryId,
			},
		});
	}
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
}

async function main() {
	try {
		await down();
		await up();
	} catch (e) {
		console.error(e);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
