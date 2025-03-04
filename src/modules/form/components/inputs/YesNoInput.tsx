'use client'

import React from 'react'
import { Box, Button, ButtonProps } from '@mui/material'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs/BaseInput'
import { useFieldContext } from '@/modules/form/form-context'
import RadioInput from '@/modules/form/components/inputs/RadioInput'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type YesNoInputProps = BaseInputProps & {
	locale?: { yes: string; no: string }
	values?: { yes: string; no: string }
	type?: 'radio' | 'button'
	buttonProps?: ButtonProps
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function YesNoInput({
	locale = { yes: 'yes', no: 'no' },
	values = { yes: 'yes', no: 'no' },
	type = 'radio',
	buttonProps,
	...props
}: YesNoInputProps) {
	const field = useFieldContext<string>()

	if (type === 'radio') {
		return (
			<RadioInput
				options={[
					{ value: values.yes, label: locale.yes },
					{ value: values.no, label: locale.no },
				]}
				{...props}
			/>
		)
	}

	return (
		<BaseInput name={field.name} isTouched={field.state.meta.isTouched} errors={field.state.meta.errors} {...props}>
			<Box display="flex" gap={1} mt={1}>
				<Button
					onClick={() => field.handleChange(values.yes)}
					variant={field.state.value === values.yes ? 'contained' : 'outlined'}
					data-testid={`${field.name}-yes-button`}
					{...buttonProps}
				>
					{locale.yes}
				</Button>
				<Button
					onClick={() => field.handleChange(values.no)}
					variant={field.state.value === values.no ? 'contained' : 'outlined'}
					data-testid={`${field.name}-no-button`}
					{...buttonProps}
				>
					{locale.no}
				</Button>
			</Box>
		</BaseInput>
	)
}
