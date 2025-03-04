'use client'

import React from 'react'
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs/BaseInput'
import { useFieldContext } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = BaseInputProps & {
	checkboxProps?: CheckboxProps
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function CheckboxInput({ label, checkboxProps, ...props }: Props) {
	const field = useFieldContext<boolean>()

	return (
		<BaseInput name={field.name} isTouched={field.state.meta.isTouched} errors={field.state.meta.errors} {...props}>
			<FormControlLabel
				control={
					<Checkbox
						disableFocusRipple
						disableRipple
						disableTouchRipple
						{...checkboxProps}
						name={field.name}
						id={`${field.name}-checkbox`}
						data-testid={`${field.name}-checkbox`}
						checked={Boolean(field.state.value)}
						onChange={(event) => {
							field.handleChange(event.target.checked)
						}}
						onBlur={field.handleBlur}
					/>
				}
				label={label}
			/>
		</BaseInput>
	)
}
