import { useSession } from 'next-auth/react';
import React from 'react';
import { Button } from '../ui/button';
import { CircleUser, User } from 'lucide-react';
import Link from 'next/link';

interface Props {
	loading?: boolean;
	onClickSignIn?: () => void;
	className?: string;
}

export const ProfileButton: React.FC<Props> = ({ className, onClickSignIn }) => {
	const { data: session } = useSession();

	return (
		<div className={className}>
			{!session ? (
				<Button onClick={onClickSignIn} variant="outline" className="flex items-center gap-2">
					<User size={16} />
					<p className="hidden md:block">Войти</p>
				</Button>
			) : (
				<Link href="/profile">
					<Button variant="outline" className="flex items-center gap-2">
						<CircleUser size={18} />
						<p className="hidden sm:block">Профиль</p>
					</Button>
				</Link>
			)}
		</div>
	);
};
