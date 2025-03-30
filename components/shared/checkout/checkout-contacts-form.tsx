import React from 'react';
import { FormInput } from '../form/form-input';

export const CheckoutContactsForm: React.FC = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
			<FormInput name="firstName" className="text-base" placeholder="Имя" />
			<FormInput name="lastName" className="text-base" placeholder="Фамилия" />
			<FormInput name="email" className="text-base" placeholder="E-Mail" />
			<FormInput name="phone" className="text-base" placeholder="Телефон" />
		</div>
	);
};
