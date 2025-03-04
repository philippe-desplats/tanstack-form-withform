import React from 'react'
import { Card, CardContent, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ChevronDown } from 'lucide-react'
import { useFormContext } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = {
	open?: boolean
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function DebugCard({ open = false }: Props) {
	const form = useFormContext()
	const [expanded, setExpanded] = React.useState(open)

	return (
		<Card sx={{ mt: 2, border: '1px dashed', borderColor: 'grey.400' }}>
			<CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
				<form.Subscribe>
					{(state) => (
						<>
							<Box display="flex" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle2" color="text.secondary">
									Form Debug
								</Typography>
								<Box>
									<Typography
										variant="caption"
										color={state.canSubmit ? 'success.main' : 'error.main'}
									>
										Can Submit: {state.canSubmit ? 'Yes' : 'No'}
									</Typography>
									{' | '}
									<Typography
										variant="caption"
										color={state.isSubmitting ? 'info.main' : 'text.secondary'}
									>
										Submitting: {state.isSubmitting ? 'Yes' : 'No'}
									</Typography>
									{' | '}
									<Typography
										variant="caption"
										color={state.isValidating ? 'warning.main' : 'text.secondary'}
									>
										Validating: {state.isValidating ? 'Yes' : 'No'}
									</Typography>
								</Box>
							</Box>

							<Accordion
								expanded={expanded}
								onChange={() => setExpanded(!expanded)}
								sx={{ mt: 1, boxShadow: 'none', '&:before': { display: 'none' } }}
							>
								<AccordionSummary
									expandIcon={<ChevronDown size={16} />}
									sx={{ minHeight: 'auto', p: 2 }}
								>
									<Typography variant="caption">View Form State</Typography>
								</AccordionSummary>
								<AccordionDetails sx={{ p: 1, pt: 0 }}>
									<Box
										component="pre"
										sx={{
											fontSize: '0.75rem',
											p: 1,
											backgroundColor: 'grey.100',
											borderRadius: 1,
											overflow: 'auto',
											maxHeight: '300px',
										}}
									>
										{JSON.stringify(state, null, 2)}
									</Box>
								</AccordionDetails>
							</Accordion>
						</>
					)}
				</form.Subscribe>
			</CardContent>
		</Card>
	)
}
