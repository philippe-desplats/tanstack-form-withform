import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	// Target configurations
	// ----------------------------------------------------------------------------
	output: 'standalone',
	reactStrictMode: true,
	// swcMinify: true,
	productionBrowserSourceMaps: true,
	trailingSlash: true,
	bundlePagesRouterDependencies: true,

	// Webpack configurations
	// ----------------------------------------------------------------------------
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		return config
	},

	// Images configurations
	// ----------------------------------------------------------------------------
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: process.env.REMOTE_PATTERN_PROTOCOL as 'http' | 'https',
				hostname: process.env.REMOTE_PATTERN_HOSTNAME as string,
			},
		],
	},

	// Experimental configurations
	// ----------------------------------------------------------------------------
	experimental: {
		scrollRestoration: true,
		// esmExternals: 'loose',
		staleTimes: {
			dynamic: 30,
			static: 180,
		},
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js',
				},
			},
		},
	},

	// Compiler configurations
	// ----------------------------------------------------------------------------
	compiler: {
		emotion: true,
	},
}

export default nextConfig
