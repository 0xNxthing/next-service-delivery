import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { signIn } from 'next-auth/react';
import React from 'react';
import { LoginForm } from './auth-forms/login-form';
import { RegisterForm } from './auth-forms/register-form';

interface Props {
	open: boolean;
	onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
	const [type, setType] = React.useState<'login' | 'register'>('login');
	const onSwitchType = () => {
		setType(type === 'login' ? 'register' : 'login');
	};

	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent className="w-[370px] sm:w-[450px] bg-white p-10">
				<DialogTitle>
					{type === 'login' ? (
						<LoginForm onClose={handleClose} />
					) : (
						<RegisterForm onClose={handleClose} />
					)}
					<hr className="w-full my-5" />
					<div className="flex gap-2">
						<Button
							variant="secondary"
							onClick={() => signIn('github', { callbackUrl: '/', redirect: true })}
							type="button"
							className="gap-2 h-12 p-2 flex-1">
							<img
								className="w-6 h-6"
								src="https://github.githubassets.com/favicons/favicon.svg"
								alt="GitHub"
							/>
							GitHub
						</Button>
						<Button
							variant="secondary"
							onClick={() => signIn('google', { callbackUrl: '/', redirect: true })}
							type="button"
							className="gap-2 h-12 p-2 flex-1">
							<img
								className="w-6 h-6"
								src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
								alt="Google"
							/>
							Google
						</Button>
					</div>

					<Button
						variant="outline"
						onClick={onSwitchType}
						type="button"
						className="h-12 w-full mt-5">
						{type === 'login' ? 'Регистрация' : 'Войти'}
					</Button>
				</DialogTitle>
			</DialogContent>
		</Dialog>
	);
};
