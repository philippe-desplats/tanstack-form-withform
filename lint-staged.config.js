module.exports = {
	// Run type-check on changes to TypeScript files
	// '**/*index.ts?(x)': () => 'yarn type-check',
	// Run ESLint on changes to JavaScript/TypeScript files
	'**/*.(ts|js)?(x)': (filenames) => `pnpm lint . ${filenames.join(' ')}`,
}
