import { Container, Header } from '@/components/shared';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Berry Cake - Delivery',
	description: 'Berry Cake - Online service for confectionery orders',
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="min-h-screen bg-[#fffaf5]">
			<Container>
				<Suspense>
					<Header hasSearch={false} className="border-b-gray-200" />
				</Suspense>
				{children}
			</Container>
		</main>
	);
}
