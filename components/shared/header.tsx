'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Container, SearchInput } from '@/components/shared';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { ProfileButton } from './profile-button';
import { AuthModal } from './modals/auth-modal';

interface Props {
	hasSearch?: boolean;
	className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch = true, className }) => {
	const [openAuthModal, setOpenAuthModal] = React.useState(false);
	const searchParams = useSearchParams();

	React.useEffect(() => {
		if (searchParams.has('paid')) {
			toast.success('Заказ успешно оплачен!');
		}
	}, []);

	return (
		<header className={cn('border-b', className)}>
			<Container className="flex items-center justify-between py-8 px-5 xl:px-0">
				<Link href="/">
					<div className="flex items-center gap-4">
						<Image src={'/logo.png'} alt="logo" width={35} height={35} className=""></Image>
						<div>
							<h1 className="text-2xl uppercase font-black">Berry Cake</h1>
							<p className="text-base text-gray-400 leading-3">вкусней уже некуда</p>
						</div>
					</div>
				</Link>

				{hasSearch && (
					<div className="mx-10 flex-1 hidden md:block">
						<SearchInput />
					</div>
				)}

				<AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

				<ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
			</Container>
		</header>
	);
};
