'use client'

import React from 'react'
import { EyeIcon } from 'lucide-react'
import { EyeOffIcon } from 'lucide-react'
import { IconButton } from '@mui/material'
import { TextInputProps } from '@/modules/form/components/inputs'
import TextInput from '@/modules/form/components/inputs/TextInput'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = TextInputProps

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function PasswordInput(props: Props) {
	const [showPassword, setShowPassword] = React.useState(false)

	return (
		<TextInput
			{...props}
			textFieldProps={{
				slotProps: {
					input: {
						endAdornment: (
							<IconButton onClick={() => setShowPassword((state) => !state)}>
								{showPassword ? <EyeOffIcon /> : <EyeIcon />}
							</IconButton>
						),
					},
					...props?.textFieldProps?.slotProps,
				},
				type: showPassword ? 'text' : 'password',
				...props?.textFieldProps,
			}}
		/>
	)
}
