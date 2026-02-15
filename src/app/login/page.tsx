'use client'

import Link from 'next/link'
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import { login } from '@/app/auth/actions'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useEffect } from 'react'

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
            style={{ backgroundColor: '#C6A85E' }}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C6A85E] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
            {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign in'}
        </button>
    )
}

export default function LoginPage() {
    // @ts-ignore
    const [state, formAction] = useFormState(login, initialState)

    useEffect(() => {
        if (state?.message) {
            toast.error(state.message)
        }
    }, [state])

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[#0B1120]">
            <div className="absolute top-8 left-8">
                <Link href="/" className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Home
                </Link>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-lg bg-[#C6A85E] flex items-center justify-center text-white font-bold text-xl">
                        Z
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-slate-400">
                    Or{' '}
                    <Link href="/signup" className="font-medium text-[#C6A85E] hover:text-[#B5964B]">
                        create a new account
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-[#111827] py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-slate-800">
                    <form action={formAction} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-700 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-[#C6A85E] focus:border-[#C6A85E] sm:text-sm bg-slate-900 text-white"
                                />
                            </div>
                            {state?.errors?.email && (
                                <p className="mt-2 text-sm text-red-500" id="email-error">
                                    {state.errors.email[0]}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-700 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-[#C6A85E] focus:border-[#C6A85E] sm:text-sm bg-slate-900 text-white"
                                />
                            </div>
                            {state?.errors?.password && (
                                <p className="mt-2 text-sm text-red-500" id="password-error">
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
                                    className="h-4 w-4 text-[#C6A85E] focus:ring-[#C6A85E] border-slate-700 rounded bg-slate-900"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-300">
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
                            <div className="rounded-md bg-red-900/50 p-4 border border-red-900">
                                <div className="flex">
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-200">
                                            Login Error
                                        </h3>
                                        <div className="mt-2 text-sm text-red-300">
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
