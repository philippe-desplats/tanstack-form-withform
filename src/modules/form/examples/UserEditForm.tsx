'use client'

import UserInfoForm, { UserInfoFormData, userInfoSchema } from './UserInfoForm'
import AddressForm, { AddressFormData, addressSchema } from './AddressForm'
import { useAppForm } from '@/modules/form/form-context'
import { Form } from '@/modules/form/components'

const UserProfileForm = () => {
	const form = useAppForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			street: '',
			city: '',
			zipCode: '',
		} as UserInfoFormData & AddressFormData,
		validators: {
			onChange: userInfoSchema.merge(addressSchema),
		},
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
