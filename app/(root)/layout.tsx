import { Header } from '@/components/shared/header';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Berry Cake - Delivery',
	description: 'Berry Cake - Online service for confectionery orders',
};

export default function HomeLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<main className="min-h-screen">
			<Suspense>
				<Header />
			</Suspense>
			{modal}
			{children}
		</main>
	);
}
