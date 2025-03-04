'use client'

import React from 'react'
import { MenuItem, MenuItemProps, Select, SelectProps, Theme } from '@mui/material'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs/BaseInput'
import { useFieldContext } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type SelectInputProps = BaseInputProps & {
	selectProps?: SelectProps
	options: Array<MenuItemProps & { label: string; icon?: React.ReactNode }>
	placeholder?: string
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function SelectInput({ selectProps, options, disabled, placeholder, ...props }: SelectInputProps) {
	const field = useFieldContext<string>()

	return (
		<BaseInput
			name={field.name}
			isTouched={field.state.meta.isTouched}
			errors={field.state.meta.errors}
			{...props}
			disabled={disabled}
		>
			<Select
				name={field.name}
				id={`${field.name}-select`}
				data-testid={`${field.name}-select`}
				value={field.state.value || ''}
				onChange={(event) => field.handleChange(event.target.value as string)}
				onBlur={field.handleBlur}
				inputProps={{
					placeholder,
					sx: {
						textOverflow: 'ellipsis',
						display: 'flex',
						flexDirection: 'row',
						gap: (theme: Theme) => theme.spacing(1),
						alignItems: 'center',
					},
				}}
				{...selectProps}
			>
				{placeholder ? (
					<MenuItem disabled value="" data-testid={`${field.name}-placeholder`}>
						{placeholder}
					</MenuItem>
				) : null}

				{options.map(({ value, label, icon, ...option }, index) => (
					<MenuItem
						key={index}
						value={value}
						{...option}
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 1,
							...option.sx,
						}}
						data-testid={`${field.name}-option-${value}`}
					>
						{icon ? icon : null}
						{label}
					</MenuItem>
				))}
			</Select>
		</BaseInput>
	)
}
