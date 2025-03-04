'use client'

import { z } from 'zod'
import { formOptions } from '@tanstack/react-form'
import { withForm } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Schema
|--------------------------------------------------------------------------
*/
export const addressSchema = z.object({
	street: z.string().min(1, 'Street is required'),
	city: z.string().min(1, 'City is required'),
	zipCode: z.string().min(1, 'Zip code is required'),
})

export type AddressFormData = z.input<typeof addressSchema>

/*
|--------------------------------------------------------------------------
| Form
|--------------------------------------------------------------------------
*/
export const addressFormOpt = formOptions({
	defaultValues: {
		street: '',
		city: '',
		zipCode: '',
	} as AddressFormData,
	validators: {
		onChange: addressSchema,
	},
})

const AddressForm = withForm({
	...addressFormOpt,
	props: {
		title: 'Address Information',
	},
	render: function Render({ form, title }) {
		return (
			<div>
				<h2>{title}</h2>
				<form.AppField name="street" children={(field) => <field.TextInput label="Street" />} />
				<form.AppField name="city" children={(field) => <field.TextInput label="City" />} />
				<form.AppField name="zipCode" children={(field) => <field.TextInput label="Zip Code" />} />
			</div>
		)
	},
})

export default AddressForm
