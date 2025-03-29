import React from 'react';
import { FormTextarea } from '../form/form-textarea';
import { FormInput } from '../form/form-input';

export const CheckoutAddressForm: React.FC = () => {
	return (
		<div className="flex flex-col gap-5">
			<FormInput name="address" className="text-base" placeholder="Адрес" />
			<FormTextarea
				name="comment"
				className="text-base"
				rows={5}
				placeholder="Комментарий к заказу"
			/>
		</div>
	);
};
