'use client'

import { InputBaseComponentProps, OutlinedInput, OutlinedInputProps } from '@mui/material'
import React from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import { BaseInput, BaseInputProps } from '@/modules/form/components/inputs/BaseInput'
import { useFieldContext } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type NumberInputBaseProps = {
	name: string
	id: string
	value: any
	onChange: (value: any) => void
	onBlur: () => void
	outlinedInputProps?: OutlinedInputProps
	numericFormatProps?: InputBaseComponentProps
}

export type NumberInputProps = BaseInputProps & {
	outlinedInputProps?: OutlinedInputProps
	numericFormatProps?: InputBaseComponentProps
}

/*
|--------------------------------------------------------------------------
| Sub component
|--------------------------------------------------------------------------
*/
const NumericSubComponent = React.forwardRef<NumericFormatProps, NumericFormatProps>(function NumericFormatCustom(
	props: NumericFormatProps,
	ref,
) {
	const { onChange, ...other } = props

	return (
		<NumericFormat
			{...other}
			getInputRef={ref}
			onValueChange={(values) => {
				onChange?.({
					// @ts-ignore
					target: {
						name: props.name as string,
						value: values.value,
					},
				})
			}}
			valueIsNumericString
		/>
	)
})

/*
|--------------------------------------------------------------------------
| NumberInputBase Component
|--------------------------------------------------------------------------
*/
export function NumberInputBase({
	name,
	id,
	value,
	onChange,
	onBlur,
	outlinedInputProps,
	numericFormatProps,
}: NumberInputBaseProps) {
	return (
		<OutlinedInput
			fullWidth
			name={name}
			id={id}
			data-testid={id}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			onBlur={onBlur}
			inputComponent={NumericSubComponent as any}
			{...outlinedInputProps}
			inputProps={{
				...numericFormatProps,
				...outlinedInputProps?.inputProps,
			}}
		/>
	)
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function NumberInput({ outlinedInputProps, numericFormatProps, ...props }: NumberInputProps) {
	const field = useFieldContext()

	return (
		<BaseInput name={field.name} isTouched={field.state.meta.isTouched} errors={field.state.meta.errors} {...props}>
			<NumberInputBase
				name={field.name}
				id={`${field.name}-input`}
				value={field.state.value}
				onChange={field.handleChange}
				onBlur={field.handleBlur}
				outlinedInputProps={outlinedInputProps}
				numericFormatProps={numericFormatProps}
			/>
		</BaseInput>
	)
}
