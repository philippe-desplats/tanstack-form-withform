import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { useFormContext } from '@/modules/form/form-context'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = ButtonProps

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function SubmitButton({ children, ...props }: Props) {
	const form = useFormContext()

	return (
		<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
			{([canSubmit, isSubmitting]) => (
				<Button
					type="submit"
					size="large"
					variant="contained"
					color="primary"
					disabled={!canSubmit || isSubmitting}
					loading={isSubmitting}
					loadingPosition={props.endIcon ? 'end' : 'start'}
					{...props}
				>
					{children}
				</Button>
			)}
		</form.Subscribe>
	)
}
