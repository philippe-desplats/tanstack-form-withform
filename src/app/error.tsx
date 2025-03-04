'use client'

import React from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ChevronDown } from 'lucide-react'
import { ErrorLayout } from '@/modules/error/components'

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	React.useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<ErrorLayout
			title={`Error ${error.name}`}
			description={error.message}
			buttonText="Try Again"
			buttonAction={reset}
			maxWidth={800}
		>
			<Box width="100%">
				<Accordion>
					<AccordionSummary expandIcon={<ChevronDown />} aria-controls="panel1a-content" id="panel1a-header">
						<Typography>Stack Trace</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box sx={{ maxHeight: '200px', overflow: 'auto' }}>
							<Typography component="pre" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
								{error.stack}
							</Typography>
						</Box>
					</AccordionDetails>
				</Accordion>
			</Box>
		</ErrorLayout>
	)
}
