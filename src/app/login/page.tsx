'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { GoogleAuthButton } from '@/components/auth/GoogleAuthButton'
import { PhoneAuthForm } from '@/components/auth/PhoneAuthForm'
import { EmailAuthForm } from '@/components/auth/EmailAuthForm'

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState<'phone' | 'email'>('phone')
    const supabase = createClient()
    const router = useRouter()

    useEffect(() => {
        // Check session and redirect if logged in
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session) {
                router.replace('/dashboard')
            }
        }
        checkSession()

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                router.replace('/dashboard')
            }
        })

        return () => subscription.unsubscribe()
    }, [router, supabase])

    return (
        <div className="min-h-screen flex flex-col justify-center pt-32 pb-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0B1120] transition-colors duration-200">
            <div className="absolute top-28 left-8">
                <Link href="/" className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Home
                </Link>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-2">
                    <div className="relative h-20 w-40">
                        <Image
                            src="/logo.png"
                            alt="Zrotax"
                            fill
                            className="object-contain brightness-0 dark:brightness-100"
                            priority
                        />
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                    Welcome Back
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-slate-400">
                    Login to continue
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-[#111827] py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-200 dark:border-slate-800 transition-colors duration-200">

                    {/* Google Login */}
                    <div className="mb-6">
                        <GoogleAuthButton />
                    </div>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-slate-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-[#111827] text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-1 rounded-xl bg-gray-100 dark:bg-slate-800 p-1 mb-6">
                        <button
                            onClick={() => setActiveTab('phone')}
                            className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all focus:outline-none
                                ${activeTab === 'phone'
                                    ? 'bg-white dark:bg-slate-700 text-[#C6A85E] shadow'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-[#C6A85E]'
                                }`}
                        >
                            Phone
                        </button>
                        <button
                            onClick={() => setActiveTab('email')}
                            className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all focus:outline-none
                                ${activeTab === 'email'
                                    ? 'bg-white dark:bg-slate-700 text-[#C6A85E] shadow'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-[#C6A85E]'
                                }`}
                        >
                            Email
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="transition-all duration-300 ease-in-out">
                        {activeTab === 'phone' ? (
                            <PhoneAuthForm />
                        ) : (
                            <EmailAuthForm />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
