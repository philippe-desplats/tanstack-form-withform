'use client'

import { Checkbox, FormHelperText } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { FormControl, FormGroup, FormLabel } from '@mui/material'
import React from 'react'
import { useFieldContext } from '@/modules/form/form-context'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs/BaseInput'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type CheckboxGroupOption<T extends string | number> = {
	value: T
	label: string
}

type Props<T extends string | number> = BaseInputProps & {
	options: Array<CheckboxGroupOption<T>>
	label?: string
	helperText?: string
	row?: boolean
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function CheckboxGroupInput<T extends string | number>({
	options,
	label,
	helperText,
	row = false,
	...props
}: Props<T>) {
	const field = useFieldContext<Array<T>>()
	const values: Array<T> = field.state.value || []
	const hasError = field.state.meta.errors?.length > 0

	return (
		<BaseInput name={field.name} {...props}>
			<FormControl error={hasError} component="fieldset">
				{label ? <FormLabel component="legend">{label}</FormLabel> : null}
				<FormGroup row={row}>
					{options.map((option: CheckboxGroupOption<T>, index) => (
						<FormControlLabel
							key={index}
							control={
								<Checkbox
									checked={values.includes(option.value)}
									onChange={(event) => {
										field.handleChange(
											event.target.checked
												? [...values, option.value]
												: values.filter((value) => value !== option.value),
										)
									}}
									name={`${field.name}.${option.value}`}
									disableFocusRipple
									disableRipple
									disableTouchRipple
								/>
							}
							label={option.label}
						/>
					))}
				</FormGroup>
				{helperText || hasError ? (
					<FormHelperText>{hasError ? field.state.meta.errors[0] : helperText}</FormHelperText>
				) : null}
			</FormControl>
		</BaseInput>
	)
}
