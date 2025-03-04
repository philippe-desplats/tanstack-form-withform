'use client'

import { Grid2, Grid2Props } from '@mui/material'
import React from 'react'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs/BaseInput'
import { useFieldContext } from '@/modules/form/form-context'
import { NumberInputBase, NumberInputBaseProps } from '@/modules/form/components/inputs/NumberInput'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type DurationValues = {
	hours: number
	minutes: number
	seconds: number
}

type Props = BaseInputProps & {
	hoursProps?: NumberInputBaseProps
	minutesProps?: NumberInputBaseProps
	secondsProps?: NumberInputBaseProps
	views?: Array<'hours' | 'minutes' | 'seconds'>
	containerProps?: Grid2Props
	gridItemProps?: Grid2Props
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function DurationInput({
	views = ['hours', 'minutes', 'seconds'],
	hoursProps,
	minutesProps,
	secondsProps,
	containerProps,
	gridItemProps,
	...props
}: Props) {
	const field = useFieldContext<DurationValues>()

	return (
		<BaseInput name={field.name} isTouched={field.state.meta.isTouched} errors={field.state.meta.errors} {...props}>
			<Grid2 container spacing={2} {...containerProps}>
				{views.includes('hours') ? (
					<Grid2 size={12 / views.length} {...gridItemProps}>
						<NumberInputBase
							name={`${field.name}.hours`}
							id={`${field.name}.hours-input`}
							value={field.state.value?.hours || ''}
							onChange={(value) => field.handleChange({ ...field.state.value, hours: value })}
							onBlur={field.handleBlur}
							outlinedInputProps={hoursProps?.outlinedInputProps}
							numericFormatProps={hoursProps?.numericFormatProps}
						/>
					</Grid2>
				) : null}
				{views.includes('minutes') ? (
					<Grid2 size={12 / views.length} {...gridItemProps}>
						<NumberInputBase
							name={`${field.name}.minutes`}
							id={`${field.name}.minutes-input`}
							value={field.state.value?.minutes || ''}
							onChange={(value) => field.handleChange({ ...field.state.value, minutes: value })}
							onBlur={field.handleBlur}
							outlinedInputProps={minutesProps?.outlinedInputProps}
							numericFormatProps={{
								allowNegative: false,
								decimalScale: 0,
								isAllowed: (values: { formattedValue: string; floatValue: number | undefined }) => {
									const { formattedValue, floatValue } = values
									return formattedValue === '' || Number(floatValue ?? 0) <= 59
								},
								...minutesProps?.numericFormatProps,
							}}
						/>
					</Grid2>
				) : null}
				{views.includes('seconds') ? (
					<Grid2 size={12 / views.length} {...gridItemProps}>
						<NumberInputBase
							name={`${field.name}.seconds`}
							id={`${field.name}.seconds-input`}
							value={field.state.value?.seconds || ''}
							onChange={(value) => field.handleChange({ ...field.state.value, seconds: value })}
							onBlur={field.handleBlur}
							outlinedInputProps={secondsProps?.outlinedInputProps}
							numericFormatProps={{
								allowNegative: false,
								decimalScale: 0,
								isAllowed: (values: { formattedValue: string; floatValue: number | undefined }) => {
									const { formattedValue, floatValue } = values
									return formattedValue === '' || Number(floatValue ?? 0) <= 59
								},
								...secondsProps?.numericFormatProps,
							}}
						/>
					</Grid2>
				) : null}
			</Grid2>
		</BaseInput>
	)
}
