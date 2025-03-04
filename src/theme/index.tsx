'use client'

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { frFR } from '@mui/material/locale'
import { GlobalStyles } from '@mui/material'
import { Toaster } from 'sonner'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { palette } from './palette'
import { shadows } from './shadows'
import { typography } from './typography'
import { customShadows } from './custom-shadows'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function ThemeProvider({ children }: Props) {
	// Prepare theme options
	// ---------------------------------------------------------------------------
	const memoizedValue = React.useMemo(
		() => ({
			palette: {
				...palette('light'),
			},
			customShadows: {
				...customShadows('light'),
			},
			shadows: shadows('light'),
			shape: { borderRadius: 8 },
			typography,
		}),
		[],
	)

	const theme = React.useMemo(() => {
		const newTheme = createTheme(memoizedValue as ThemeOptions)
		return newTheme
	}, [memoizedValue])

	const themeWithLocale = React.useMemo(() => createTheme(theme, frFR), [theme])

	// Render
	// ---------------------------------------------------------------------------
	return (
		<AppRouterCacheProvider options={{ key: 'css' }}>
			<MuiThemeProvider theme={themeWithLocale}>
				<LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="fr">
					<CssBaseline />
					<GlobalStyles
						styles={{
							'& .lucide': {
								color: 'var(--Icon-color)',
								margin: 'var(--Icon-margin)',
								fontSize: 'var(--Icon-fontSize, 20px)',
								width: '1em',
								height: '1em',
							},
						}}
					/>
					<Toaster position="bottom-right" />
					{children}
				</LocalizationProvider>
			</MuiThemeProvider>
		</AppRouterCacheProvider>
	)
}
