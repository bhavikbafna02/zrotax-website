'use client'

import React, { useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import { login } from '@/app/auth/actions'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'

const initialState = {
    message: '',
    errors: undefined,
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#C6A85E] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C6A85E] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
            {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign in'}
        </button>
    )
}

export function EmailAuthForm() {
    // @ts-ignore
    const [state, formAction] = useFormState(login, initialState)

    useEffect(() => {
        if (state?.message) {
            // We show error in the UI below, toast is optional
            // toast.error(state.message) 
        }
    }, [state])

    return (
        <form action={formAction} className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                    Email address
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-[#C6A85E] focus:border-[#C6A85E] sm:text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
                    />
                </div>
                {state?.errors?.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500" id="email-error">
                        {state.errors.email[0]}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                    Password
                </label>
                <div className="mt-1">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-[#C6A85E] focus:border-[#C6A85E] sm:text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
                    />
                </div>
                {state?.errors?.password && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500" id="password-error">
                        {state.errors.password[0]}
                    </p>
                )}
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-[#C6A85E] focus:ring-[#C6A85E] border-gray-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900 transition-colors"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-slate-300">
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-[#C6A85E] hover:text-[#B5964B]">
                        Forgot your password?
                    </Link>
                </div>
            </div>

            <div>
                <SubmitButton />
            </div>

            {state?.message && (
                <div className="rounded-md bg-red-50 dark:bg-red-900/50 p-4 border border-red-200 dark:border-red-900 transition-colors">
                    <div className="flex">
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                                Login Error
                            </h3>
                            <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                                <p>{state.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </form>
    )
}
