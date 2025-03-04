import { alpha } from '@mui/material/styles'

/*
|--------------------------------------------------------------------------
| Extend Palette
|--------------------------------------------------------------------------
*/
declare module '@mui/material/styles/createPalette' {
	interface TypeBackground {
		neutral: string
		neutralLight: string
		invert: string
	}
	interface TypeAction {
		invertSelected: string
	}
}

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'

/*
|--------------------------------------------------------------------------
| Palette
|--------------------------------------------------------------------------
*/
export const grey = {
	0: '#FFFFFF',
	100: '#F9FAFB',
	200: '#F4F6F8',
	300: '#DFE3E8',
	400: '#C4CDD5',
	500: '#919EAB',
	600: '#637381',
	700: '#454F5B',
	800: '#212B36',
	900: '#161C24',
}

export const primary = {
	light: '#2223FF',
	main: '#000091',
	dark: '#00004d',
	contrastText: '#FFFFFF',
}

export const secondary = {
	light: '#FD4347',
	main: '#E1090E',
	dark: '#8b1114',
	contrastText: '#FFFFFF',
	// contrastText: '#115868',
}

export const info = {
	light: '#0073DD',
	main: '#0062CB',
	dark: '#0343AC',
	contrastText: '#FFFFFF',
}

export const success = {
	light: '#81C784',
	main: '#43A047',
	dark: '#2E7D32',
	contrastText: '#000000',
}

export const warning = {
	light: '#FF9800',
	main: '#EF6C00',
	dark: '#E65100',
	contrastText: grey[800],
}

export const error = {
	light: '#EF5350',
	main: '#D32F2F',
	dark: '#C62828',
	contrastText: '#FFFFFF',
}

export const common = {
	black: '#000000',
	white: '#FFFFFF',
}

export const action = {
	hover: alpha(grey[500], 0.08),
	selected: alpha(grey[500], 0.16),
	disabled: alpha(grey[500], 0.8),
	disabledBackground: alpha(grey[500], 0.24),
	focus: alpha(grey[500], 0.24),
	hoverOpacity: 0.08,
	disabledOpacity: 0.48,
}

const base = {
	primary,
	secondary,
	info,
	success,
	warning,
	error,
	grey,
	common,
	divider: '#E0E0E0',
	action,
}

/*
|--------------------------------------------------------------------------
| Palette
|--------------------------------------------------------------------------
*/
export function palette(mode: 'light' | 'dark') {
	const light = {
		...base,
		mode: 'light',
		text: {
			primary: grey[800],
			secondary: grey[600],
			disabled: grey[500],
		},
		background: {
			paper: '#FFFFFF',
			default: '#FFFFFF',
			neutral: grey[200],
			neutralLight: '#FBFBFC',
			invert: '#1E293B',
		},
		action: {
			...base.action,
			active: grey[600],
			invertSelected: '#344665',
		},
	}

	const dark = {
		...base,
		mode: 'dark',
		text: {
			primary: '#FFFFFF',
			secondary: grey[500],
			disabled: grey[600],
		},
		background: {
			paper: grey[800],
			default: grey[900],
			neutral: alpha(grey[500], 0.12),
			neutralLight: alpha(grey[200], 0.12),
			invert: '#000000',
		},
		action: {
			...base.action,
			active: grey[500],
			invertSelected: '#4D4D4D',
		},
	}

	return mode === 'light' ? light : dark
}
