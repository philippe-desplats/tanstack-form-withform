'use client'

import { FormControlLabel, FormControlLabelProps, Radio, RadioGroup, RadioGroupProps } from '@mui/material'
import React from 'react'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs/BaseInput'
import { useFieldContext } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = BaseInputProps & {
	options: Array<Omit<FormControlLabelProps, 'control'>>
	radioGroupProps?: RadioGroupProps
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function RadioInput({ options, radioGroupProps, ...props }: Props) {
	const field = useFieldContext<string>()

	return (
		<BaseInput name={field.name} isTouched={field.state.meta.isTouched} errors={field.state.meta.errors} {...props}>
			<RadioGroup
				name={field.name}
				id={`${field.name}-radio-group`}
				data-testid={`${field.name}-radio-group`}
				value={field.state.value}
				onChange={(e) => field.handleChange(e.target.value)}
				onBlur={field.handleBlur}
				aria-labelledby={`${field.name}-input`}
				row={true}
				{...radioGroupProps}
			>
				{options?.map((option, index) => (
					<FormControlLabel
						key={index}
						control={<Radio size="small" />}
						id={`${field.name}-radio-group-${option.value}`}
						data-testid={`${field.name}-radio-group-${option.value}`}
						{...option}
					/>
				))}
			</RadioGroup>
		</BaseInput>
	)
}
