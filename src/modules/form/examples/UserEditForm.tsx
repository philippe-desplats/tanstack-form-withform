'use client'

import { z } from 'zod'
import { formOptions } from '@tanstack/react-form'
import UserInfoForm, { userInfoSchema } from './UserInfoForm'
import AddressForm, { addressSchema } from './AddressForm'
import { useAppForm } from '@/modules/form/form-context'
import { Form } from '@/modules/form/components'

const userProfileSchema = userInfoSchema.merge(addressSchema)
type UserProfileFormData = z.input<typeof userProfileSchema>

const userProfileFormOpt = formOptions({
	defaultValues: {
		firstName: '',
		lastName: '',
		email: '',
		street: '',
		city: '',
		zipCode: '',
	} as UserProfileFormData,
	validators: {
		onChange: userProfileSchema,
	},
})

const UserProfileForm = () => {
	const form = useAppForm({
		...userProfileFormOpt,
		onSubmit: ({ value }) => {
			console.log(value)
		},
	})

	return (
		<Form onSubmit={form.handleSubmit}>
			<form.AppForm>
				<h1>User profile</h1>

				<UserInfoForm form={form} title="User information" />

				<AddressForm form={form} title="Address information" />

				<form.AppForm>
					<form.DebugCard />
					<form.SubmitButton>Submit</form.SubmitButton>
				</form.AppForm>
			</form.AppForm>
		</Form>
	)
}

export default UserProfileForm
