import { hashSync } from 'bcrypt';
import { categories, products, ingredients } from './constants';
import prisma from './prisma-client';

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User Test',
				email: 'uuser@test.ru',
				password: hashSync('12112002', 10),
				role: 'USER',
			},
			{
				fullName: 'Admin Test',
				email: 'uadmin@test.ru',
				password: hashSync('12112002', 10),
				role: 'ADMIN',
			},
		],
	});

	await prisma.category.createMany({
		data: categories,
	});

	await prisma.ingredient.createMany({
		data: ingredients,
	});

	for (const product of products) {
		const createdProduct = await prisma.product.create({
			data: {
				name: product.name,
				price: product.price,
				imageUrl: product.imageUrl,
				description: product.description,
				structure: product.structure,
				categoryId: product.categoryId,
			},
		});

		if (product.ingredients?.connect) {
			await prisma.productIngredient.createMany({
				data: product.ingredients.connect.map((ingredient) => ({
					productId: createdProduct.id,
					ingredientId: ingredient.id,
				})),
			});
		}
	}

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: '11111',
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '222222',
			},
		],
	});

	await prisma.cartProduct.create({
		data: {
			productId: 1,
			cartId: 1,
			quantity: 2,
		},
	});
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "ProductIngredient" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
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
