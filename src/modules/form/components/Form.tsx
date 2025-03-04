'use client'

import { Box, BoxProps } from '@mui/material'
import React, { FormEvent } from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = BoxProps<'form'> & {
	children: React.ReactNode
	onSubmit: () => Promise<void>
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export function Form({ children, onSubmit, sx, ...props }: Props) {
	// Methods
	//--------------------------------------------------------------------------
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()
		await onSubmit?.()
	}

	// Render
	// ---------------------------------------------------------------------------
	return (
		<Box
			component="form"
			onSubmit={(e: FormEvent<HTMLFormElement>) => void handleSubmit(e)}
			sx={{
				flexGrow: 1,
				display: 'flex',
				flexDirection: 'column',
				padding: 2,
				gap: 2,
				overflowY: 'auto',
				position: 'relative',
				width: '100%',
				...sx,
			}}
			{...props}
		>
			{children}
		</Box>
	)
}
