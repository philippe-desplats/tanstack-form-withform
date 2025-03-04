import { Viewport } from 'next'
import { Toaster } from 'sonner'
import ThemeProvider from '@/theme'
import { APP_VERSION, HOST } from '@/config/common.config'
import { primaryFont } from '@/theme/typography'

/*
|--------------------------------------------------------------------------
| Root layout metadata
|--------------------------------------------------------------------------
*/
export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
		{ media: '(prefers-color-scheme: dark)', color: '#161C24' },
	],
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
}

export function generateMetadata() {
	return {
		...(HOST ? { metadataBase: new URL(HOST) } : {}),
		title: {
			absolute: 'TanStack Form - WithForm',
			template: '%s | TanStack Form - WithForm',
		},
		applicationName: 'TanStack Form - WithForm',
		generator: 'Dirupt-NextJS',
		description: 'TanStack Form with WithForm implementation',
		keywords: ['TanStack Form', 'WithForm', 'React', 'Next.js'],
		manifest: '/manifest.json',
		creator: 'DIRUPT',
		robots: {
			index: true,
			follow: true,
		},
		alternates: {
			canonical: HOST,
			languages: {
				'fr-FR': '/',
			},
		},
		icons: [
			{ rel: 'shortcut icon', url: '/favicon/favicon.ico', type: 'image/x-icon' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
			{ rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
		],
		authors: [
			{
				name: 'Dirupt',
				url: 'https://www.dirupt.com',
			},
		],
		openGraph: {
			type: 'website',
			url: HOST,
			title: 'TanStack Form - WithForm',
			description: 'TanStack Form with WithForm implementation',
			siteName: 'TanStack Form - WithForm',
			images: [
				{
					url: `${HOST}/preview.jpg`,
					width: 600,
					height: 600,
					alt: 'TanStack Form - WithForm',
				},
			],
		},
		other: {
			'app-version': APP_VERSION ?? '0.1.0',
			'dirupt:app-name': 'tanstack-form-withform',
		},
	}
}

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
| Root layout
|--------------------------------------------------------------------------
*/
export default function RootLayout({ children }: Props) {
	return (
		<html lang="fr" className={primaryFont.className}>
			<body>
				<ThemeProvider>
					<Toaster
						position="bottom-right"
						visibleToasts={1}
						style={{
							zIndex: 9998,
						}}
						richColors
					/>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
