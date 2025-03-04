import { Box, BoxProps } from '@mui/material'
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = {
	children: React.ReactNode
	boxProps?: BoxProps
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export function FormActions({ children, boxProps }: Props) {
	return (
		<Box display={'flex'} justifyContent={'flex-start'} gap={2} {...boxProps}>
			{children}
		</Box>
	)
}
