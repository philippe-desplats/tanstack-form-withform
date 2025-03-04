'use client'

import React from 'react'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

/*
|--------------------------------------------------------------------------
| Lazy imports
|--------------------------------------------------------------------------
*/

// Actions
// ---------------------------------------------------------------------------
const DebugCard = React.lazy(() => import('@/modules/form/components/actions/DebugCard'))
const SubmitButton = React.lazy(() => import('@/modules/form/components/actions/SubmitButton'))

// Inputs
// ---------------------------------------------------------------------------
const TextInput = React.lazy(() => import('@/modules/form/components/inputs/TextInput'))
const PasswordInput = React.lazy(() => import('@/modules/form/components/inputs/PasswordInput'))
const AutocompleteInput = React.lazy(() => import('@/modules/form/components/inputs/AutocompleteInput'))
const CheckboxInput = React.lazy(() => import('@/modules/form/components/inputs/CheckboxInput'))
const CheckboxGroupInput = React.lazy(() => import('@/modules/form/components/inputs/CheckboxGroupInput'))
const DateTimeInput = React.lazy(() => import('@/modules/form/components/inputs/DateTimeInput'))
const NumberInput = React.lazy(() => import('@/modules/form/components/inputs/NumberInput'))
const DurationInput = React.lazy(() => import('@/modules/form/components/inputs/DurationInput'))
const RadioInput = React.lazy(() => import('@/modules/form/components/inputs/RadioInput'))
const SelectInput = React.lazy(() => import('@/modules/form/components/inputs/SelectInput'))
const YesNoInput = React.lazy(() => import('@/modules/form/components/inputs/YesNoInput'))

/*
|--------------------------------------------------------------------------
| Create form context
|--------------------------------------------------------------------------
*/
export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()

/*
|--------------------------------------------------------------------------
| Create form hook
|--------------------------------------------------------------------------
*/
export const { useAppForm, withForm } = createFormHook({
	fieldComponents: {
		TextInput,
		PasswordInput,
		AutocompleteInput,
		CheckboxInput,
		CheckboxGroupInput,
		DateTimeInput,
		NumberInput,
		DurationInput,
		RadioInput,
		SelectInput,
		YesNoInput,
	},
	formComponents: {
		DebugCard,
		SubmitButton,
	},
	fieldContext,
	formContext,
})
