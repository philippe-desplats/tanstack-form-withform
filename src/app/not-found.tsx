'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ErrorLayout } from '@/modules/error/components'

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/
export default function NotFoundPage() {
	const router = useRouter()

	return (
		<ErrorLayout
			title="Error 404"
			description="The page you are looking for does not exist."
			buttonText="Back to Home"
			buttonAction={() => router.push('/')}
		/>
	)
}
