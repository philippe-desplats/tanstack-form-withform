'use client'

import { z } from 'zod'
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

/*
|--------------------------------------------------------------------------
| Form
|--------------------------------------------------------------------------
*/
const AddressForm = withForm({
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
