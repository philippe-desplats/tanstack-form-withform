import { Box, BoxProps, Typography } from '@mui/material'
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type FormAPIErrorProps = Omit<BoxProps, 'children'> & {
	error: string | null
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export function FormAPIError({ error, sx, ...props }: FormAPIErrorProps) {
	if (!error) return null

	return (
		<Box
			{...props}
			data-testid="form-error"
			sx={{
				borderTop: '1px solid',
				borderBottom: '1px solid',
				borderColor: 'divider',
				width: '100%',
				padding: 2,
				...sx,
			}}
		>
			<Typography variant="subtitle2" color="error">
				{error}
			</Typography>
		</Box>
	)
}
