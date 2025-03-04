'use client'

import { Box, Button, Card, CardProps, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ErrorCard = styled(Card)<CardProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(3),
	width: '100%',
	alignItems: 'center',
	padding: theme.spacing(2, 2),
}))

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type ErrorLayoutProps = {
	title: string
	description: string
	buttonText: string
	buttonAction: () => void
	children?: React.ReactNode
	maxWidth?: number | string
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export function ErrorLayout({
	title,
	description,
	buttonText,
	buttonAction,
	children,
	maxWidth = 500,
}: ErrorLayoutProps) {
	return (
		<Box
			minHeight="100svh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			sx={{
				background: 'url("/assets/backgrounds/auth.webp")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<ErrorCard sx={{ maxWidth }}>
				<Box textAlign={'center'} width="100%">
					<Typography variant="h4" fontWeight={600}>
						{title}
					</Typography>
					<Typography variant="body1">{description}</Typography>
				</Box>
				{children}
				<Button fullWidth type="submit" size="large" variant="contained" color="primary" onClick={buttonAction}>
					{buttonText}
				</Button>
			</ErrorCard>
		</Box>
	)
}
