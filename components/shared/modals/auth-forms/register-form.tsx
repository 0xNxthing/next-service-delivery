'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { registerUser } from '@/app/actions';
import { TFormRegisterValues, formRegisterSchema } from './schemas';
import { Button } from '@/components/ui/button';
import { FormInput } from '../../form/form-input';
import { Title } from '../../title';

interface Props {
	onClose?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {
	const form = useForm<TFormRegisterValues>({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			email: '',
			fullName: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (data: TFormRegisterValues) => {
		try {
			await registerUser({
				email: data.email,
				fullName: data.fullName,
				password: data.password,
			});

			toast.error('Регистрация прошла успешно.', {
				icon: '✅',
			});

			onClose?.();
		} catch (error) {
			return toast.error('Неверный E-Mail или пароль', {
				icon: '❌',
			});
		}
	};

	return (
		<FormProvider {...form}>
			<form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
				<Title text="Регистрация" size="md" className="font-bold mb-4" />
				<FormInput name="email" label="E-Mail" required />
				<FormInput name="fullName" label="Полное имя" required />
				<FormInput name="password" label="Пароль" type="password" required />
				<FormInput name="confirmPassword" label="Подтвердите пароль" type="password" required />

				<Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
					Зарегистрироваться
				</Button>
			</form>
		</FormProvider>
	);
};
