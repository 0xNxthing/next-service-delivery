'use client';

import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	required?: boolean;
	className?: string;
}

export const FormInput: React.FC<Props> = ({ className, name, label, required, ...props }) => {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
	} = useFormContext();

	const value = watch(name);
	const errorInput = errors[name]?.message as string;

	const onClickClear = () => setValue(name, '', { shouldValidate: true });

	return (
		<div className={className}>
			{label && (
				<p className="text-[15px] mb-1 flex gap-1">
					{label} {required && '*'}
				</p>
			)}
			<div className="relative">
				<Input className="h-12 text-md" {...register(name)} {...props} />

				{value && (
					<button
						onClick={onClickClear}
						className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer">
						<X className="h-5 w-5" />
					</button>
				)}
			</div>

			{errorInput && <p className="text-red-500 text-sm mt-2">{errorInput}</p>}
		</div>
	);
};
