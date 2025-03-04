import { Inter, Public_Sans } from 'next/font/google'

/*
|--------------------------------------------------------------------------
| Extends typography
|--------------------------------------------------------------------------
*/
declare module '@mui/material/styles' {
	interface TypographyVariants {
		fontSecondaryFamily: React.CSSProperties['fontFamily']
		fontWeightSemiBold: React.CSSProperties['fontWeight']
	}
}

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/
export function remToPx(value: string) {
	return Math.round(parseFloat(value) * 16)
}

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/
export function pxToRem(value: number) {
	return `${value / 16}rem`
}

/*
|--------------------------------------------------------------------------
| Responsive font sizes
|--------------------------------------------------------------------------
*/
export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
	return {
		'@media (min-width:600px)': {
			fontSize: pxToRem(sm),
		},
		'@media (min-width:900px)': {
			fontSize: pxToRem(md),
		},
		'@media (min-width:1200px)': {
			fontSize: pxToRem(lg),
		},
	}
}

/*
|--------------------------------------------------------------------------
| Fonts
|--------------------------------------------------------------------------
*/
export const primaryFont = Public_Sans({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const secondaryFont = Inter({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

/*
|--------------------------------------------------------------------------
| Typography
|--------------------------------------------------------------------------
*/
export const typography = {
	fontFamily: primaryFont.style.fontFamily,
	fontSecondaryFamily: secondaryFont.style.fontFamily,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
	fontWeightSemiBold: 600,
	fontWeightBold: 700,
	h1: {
		fontWeight: 800,
		lineHeight: 1.2,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 24, md: 28, lg: 32 }),
	},
	h2: {
		fontWeight: 800,
		lineHeight: 1.3,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ sm: 20, md: 24, lg: 28 }),
	},
	h3: {
		fontWeight: 700,
		lineHeight: 1.4,
		fontSize: pxToRem(16),
		...responsiveFontSizes({ sm: 18, md: 20, lg: 22 }),
	},
	h4: {
		fontWeight: 700,
		lineHeight: 1.4,
		fontSize: pxToRem(14),
		...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
	},
	h5: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		...responsiveFontSizes({ sm: 14, md: 16, lg: 18 }),
	},
	h6: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(10),
		...responsiveFontSizes({ sm: 12, md: 14, lg: 16 }),
	},
	subtitle1: {
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(16),
	},
	subtitle2: {
		fontWeight: 600,
		lineHeight: 22 / 14,
		fontSize: pxToRem(14),
	},
	body1: {
		lineHeight: 1.5,
		fontSize: pxToRem(16),
	},
	body2: {
		lineHeight: 22 / 14,
		fontSize: pxToRem(14),
	},
	caption: {
		lineHeight: 1.5,
		fontSize: pxToRem(12),
	},
	overline: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		textTransform: 'uppercase',
	},
	button: {
		fontWeight: 700,
		lineHeight: 24 / 14,
		fontSize: pxToRem(14),
		textTransform: 'unset',
	},
} as const
