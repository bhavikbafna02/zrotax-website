'use client'

import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { Loader2, Smartphone, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export function PhoneAuthForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState('')
    const [otpSent, setOtpSent] = useState(false)
    const supabase = createClient()
    const router = useRouter()

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!phone) return

        setIsLoading(true)

        // Simple format logic: If 10 digits, add +91
        let formattedPhone = phone.trim()
        // If it starts with 0, remove it? No, assume user knows.
        // If no +, assumes India +91 if 10 digits.
        if (/^\d{10}$/.test(formattedPhone)) {
            formattedPhone = `+91${formattedPhone}`
        }

        const { error } = await supabase.auth.signInWithOtp({
            phone: formattedPhone,
        })

        if (error) {
            toast.error(error.message)
            setIsLoading(false)
        } else {
            setOtpSent(true)
            toast.success('OTP sent successfully')
            setIsLoading(false)
        }
    }

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!otp) return

        setIsLoading(true)

        let formattedPhone = phone.trim()
        if (/^\d{10}$/.test(formattedPhone)) {
            formattedPhone = `+91${formattedPhone}`
        }

        const { error } = await supabase.auth.verifyOtp({
            phone: formattedPhone,
            token: otp,
            type: 'sms',
        })

        if (error) {
            toast.error(error.message)
            setIsLoading(false)
        } else {
            toast.success('Login successful!')
            router.push('/dashboard')
            router.refresh()
        }
    }

    const handleResend = async () => {
        // Reset and resend logic handles same as handleSendOtp with same phone
        // But usually requires cooldown.
        // For simplicity, just call handleSendOtp logic again.
        // Or better, just go back to input?
        setOtpSent(false)
        setOtp('')
    }

    if (otpSent) {
        return (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                        Enter OTP sent to {phone}
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <CheckCircle2 className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            name="otp"
                            id="otp"
                            className="focus:ring-[#C6A85E] focus:border-[#C6A85E] block w-full pl-10 sm:text-sm border-gray-300 dark:border-slate-700 rounded-md py-2.5 bg-white dark:bg-slate-900 dark:text-white transition-all"
                            placeholder="123456"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                            autoFocus
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-10 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#C6A85E] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C6A85E] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Verify & Login'}
                </button>

                <div className="text-center">
                    <button
                        type="button"
                        onClick={handleResend}
                        className="text-xs text-[#C6A85E] hover:underline flex items-center justify-center w-full gap-1"
                    >
                        <RefreshCw className="h-3 w-3" /> Change Number / Resend
                    </button>
                </div>
            </form>
        )
    }

    return (
        <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                    Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Smartphone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="focus:ring-[#C6A85E] focus:border-[#C6A85E] block w-full pl-10 sm:text-sm border-gray-300 dark:border-slate-700 rounded-md py-2.5 bg-white dark:bg-slate-900 dark:text-white transition-all"
                        placeholder="+91 99999 99999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full h-10 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#C6A85E] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C6A85E] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
                {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                    <span className="flex items-center">
                        Send OTP <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                )}
            </button>
        </form>
    )
}
