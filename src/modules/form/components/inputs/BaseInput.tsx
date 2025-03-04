import {
	FormControl,
	FormControlProps,
	FormHelperText,
	OutlinedInputProps,
	Stack,
	StackProps,
	Typography,
	TypographyProps,
} from '@mui/material'
import React from 'react'
import { ZodError } from 'zod'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = {
	name: string
	children: React.ReactNode
	isTouched?: boolean
	errors?: Array<ZodError>
	labelContainerProps?: StackProps
	labelIcon?: React.ReactNode
	label?: string
	labelProps?: TypographyProps
	description?: string
	descriptionProps?: TypographyProps
	formControlProps?: FormControlProps
	isOptional?: boolean
	optionalText?: string
	InputProps?: OutlinedInputProps
	disabled?: boolean
	helperText?: string
}

/**
 * Use this type to define the props of a field component.
 * @example
 * ```tsx
 * type Props = BaseInputProps & {
 * 	textFieldProps?: Omit<TextFieldProps, 'value' | 'onChange| 'onBlur' | 'id'>
 * }
 *
 * export function TextInput({ textFieldProps, ...props }: Props) {
 * 	const field = useFieldContext<string>()
 *
 * 	return (
 * 		<BaseInput name={field.name} {...props}>
 * 			<TextField
 * 				fullWidth
 * 				{...textFieldProps}
 * 				id={`${field.name}-input`}
 * 				data-testid={`${field.name}-input`}
 * 				name={field.name}
 * 				value={field.state.value}
 * 				onChange={(e) => field.handleChange(e.target.value)}
 * 				onBlur={field.handleBlur}
 * 			/>
 * 		</BaseInput>
 * 	)
 * }
 * ```
 */
export type BaseInputProps = Omit<Props, 'name' | 'children' | 'isTouched' | 'errors'>

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export function BaseInput({
	name,
	children,
	errors,
	isTouched,
	label,
	labelProps,
	labelIcon,
	labelContainerProps,
	description,
	descriptionProps,
	isOptional,
	optionalText = '(optional)',
	formControlProps,
	disabled,
	helperText,
}: Props) {
	return (
		<FormControl
			error={errors?.length ? !!isTouched : undefined}
			fullWidth
			disabled={disabled}
			{...formControlProps}
		>
			{/* Label */}
			{label ? (
				<Stack direction="row" alignItems={'center'} gap={1} mb={1} {...labelContainerProps}>
					<Typography
						component="label"
						htmlFor={`${name}-input`}
						data-testid={`${name}-input-label`}
						variant="body1"
						{...labelProps}
					>
						{label}{' '}
						{isOptional ? (
							<Typography component="span" color="primary.main" variant="body1">
								{optionalText}
							</Typography>
						) : null}
					</Typography>
					{labelIcon}
				</Stack>
			) : null}

			{/* Description */}
			{description ? (
				<Typography
					variant="caption"
					color="text.secondary"
					data-testid={`${name}-input-description`}
					{...descriptionProps}
				>
					{description}
				</Typography>
			) : null}

			{/* Field */}
			{children}

			{/* Errors */}
			{errors?.length
				? errors.map((error) => (
						<FormHelperText error={true} sx={{ marginTop: 0 }}>
							{error.message}
						</FormHelperText>
					))
				: null}

			{/* Helper text */}
			{helperText ? <FormHelperText error={false}>{helperText}</FormHelperText> : null}
		</FormControl>
	)
}
