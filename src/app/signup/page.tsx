'use client'

import Link from 'next/link'
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import { signup } from '@/app/auth/actions'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useEffect } from 'react'

const initialState = {
    message: '',
    errors: undefined,
    success: false,
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Create Account'}
        </button>
    )
}

export default function SignupPage() {
    // @ts-ignore
    const [state, formAction] = useFormState(signup, initialState)

    useEffect(() => {
        if (state?.success && state?.message) {
            toast.success(state.message) // Requires <Toaster /> in layout
        } else if (state?.message && !state.success) {
            toast.error(state.message)
        }
    }, [state])

    if (state?.success) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                    <div className="h-12 w-12 rounded-lg bg-green-100 text-green-600 mx-auto flex items-center justify-center">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="mt-4 text-3xl font-extrabold text-slate-900">Check your email</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        We've sent a verification link to your email address. Please click the link to sign in.
                    </p>
                    <div className="mt-6">
                        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Return to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="absolute top-8 left-8">
                <Link href="/" className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Home
                </Link>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                        Z
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-slate-600">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-100">
                    <form action={formAction} className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {state?.errors?.email && (
                                <p className="mt-2 text-sm text-red-600" id="email-error">
                                    {state.errors.email[0]}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                                Password must be at least 6 characters long.
                            </p>
                            {state?.errors?.password && (
                                <p className="mt-2 text-sm text-red-600" id="password-error">
                                    {state.errors.password[0]}
                                </p>
                            )}
                        </div>

                        <div>
                            <SubmitButton />
                        </div>

                        {state?.message && !state.success && (
                            <div className="rounded-md bg-red-50 p-4 border border-red-100">
                                <div className="flex">
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-800">
                                            Sign Up Error
                                        </h3>
                                        <div className="mt-2 text-sm text-red-700">
                                            <p>{state.message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
