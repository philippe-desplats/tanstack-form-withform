'use client'

import { Autocomplete, AutocompleteProps, TextField } from '@mui/material'
import React from 'react'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs'
import { useFieldContext } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = BaseInputProps & {
	autocompleteProps: Omit<AutocompleteProps<any, any, any, any>, 'renderInput'>
	placeholder?: string
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function AutocompleteInput({ autocompleteProps, disabled, placeholder, ...props }: Props) {
	const field = useFieldContext<string>()

	return (
		<BaseInput name={field.name} isTouched={field.state.meta.isTouched} errors={field.state.meta.errors} {...props}>
			<Autocomplete
				disabled={disabled}
				{...autocompleteProps}
				id={`${field.name}-autocomplete-input`}
				data-testid={`${field.name}-autocomplete-input`}
				value={field?.state?.value || ''}
				onChange={(_, value: string) => field.handleChange(value)}
				onBlur={field.handleBlur}
				renderInput={(params) => (
					<TextField
						placeholder={placeholder}
						{...params}
						fullWidth
						ref={params.InputProps.ref}
						name={field.name}
						id={`${field.name}-input`}
						data-testid={`${field.name}-input`}
						error={field.state.meta.errors?.length ? !!field.state.meta.isTouched : undefined}
					/>
				)}
			/>
		</BaseInput>
	)
}
