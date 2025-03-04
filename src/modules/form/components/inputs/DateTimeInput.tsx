'use client'

import React from 'react'
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers'
import { DateTime } from 'luxon'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs/BaseInput'
import { useFieldContext } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = BaseInputProps & {
	dateTimeProps?: DateTimePickerProps<DateTime>
	onHookChange?: (date: DateTime | null) => void
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function DateTimeInput({ dateTimeProps, onHookChange, ...props }: Props) {
	const field = useFieldContext<DateTime | null>()

	return (
		<BaseInput name={field.name} isTouched={field.state.meta.isTouched} errors={field.state.meta.errors} {...props}>
			<DateTimePicker
				{...dateTimeProps}
				value={field.state.value}
				onChange={(date) => {
					if (onHookChange) {
						onHookChange(date)
					}

					return field.handleChange(date)
				}}
				slotProps={{
					textField: {
						error: !!field.state.meta.errors?.length && field.state.meta.isTouched,
						inputProps: {
							name: field.name,
							id: `${field.name}-input`,
							'data-testid': `${field.name}-input`,
							onBlur: field.handleBlur,
						},
					},
				}}
				slots={
					{
						// layout: StyledPickersLayout,
						// openPickerIcon: CalendarIcon,
					}
				}
			/>
		</BaseInput>
	)
}
