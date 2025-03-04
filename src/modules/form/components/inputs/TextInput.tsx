import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import { useFieldContext } from '@/modules/form/form-context'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type TextInputProps = BaseInputProps & {
	textFieldProps?: Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur' | 'id'>
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function TextInput({ textFieldProps, ...props }: TextInputProps) {
	const field = useFieldContext<string>()

	return (
		<BaseInput name={field.name} isTouched={field.state.meta.isTouched} errors={field.state.meta.errors} {...props}>
			<TextField
				variant="outlined"
				fullWidth
				{...textFieldProps}
				name={field.name}
				id={`${field.name}-input`}
				data-testid={`${field.name}-input`}
				value={field.state.value}
				onChange={(e) => {
					field.handleChange(e.target.value)
				}}
				onBlur={field.handleBlur}
			/>
		</BaseInput>
	)
}
