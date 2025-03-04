'use client'

import { z } from 'zod'
import { formOptions } from '@tanstack/react-form'
import { withForm } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Schema
|--------------------------------------------------------------------------
*/
export const userInfoSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.string().email('Please enter a valid email'),
})

export type UserInfoFormData = z.input<typeof userInfoSchema>

/*
|--------------------------------------------------------------------------
| Form
|--------------------------------------------------------------------------
*/
export const userInfoFormOpt = formOptions({
	defaultValues: {
		firstName: '',
		lastName: '',
		email: '',
	} as UserInfoFormData,
	validators: {
		onChange: userInfoSchema,
	},
})

const UserInfoForm = withForm({
	...userInfoFormOpt,
	props: {
		title: 'User Information',
	},
	render: function Render({ form, title }) {
		return (
			<div>
				<h2>{title}</h2>
				<form.AppField name="firstName" children={(field) => <field.TextInput label="First Name" />} />
				<form.AppField name="lastName" children={(field) => <field.TextInput label="Last Name" />} />
				<form.AppField name="email" children={(field) => <field.TextInput label="Email" />} />
			</div>
		)
	},
})

export default UserInfoForm
