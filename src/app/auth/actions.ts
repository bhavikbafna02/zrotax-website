'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const authSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

const signupSchema = authSchema.extend({
    fullName: z.string().min(2),
})

export async function login(prevState: any, formData: FormData) {
    const supabase = await createClient()

    const rawData = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const validatedFields = authSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid fields. Failed to login.',
        }
    }

    const { email, password } = validatedFields.data

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return {
            message: error.message,
        }
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(prevState: any, formData: FormData) {
    const supabase = await createClient()
    const origin = process.env.NEXT_PUBLIC_ORIGIN || 'http://localhost:3000'

    const rawData = {
        email: formData.get('email'),
        password: formData.get('password'),
        fullName: formData.get('fullName'),
    }

    const validatedFields = signupSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid fields. Failed to signup.',
        }
    }

    const { email, password, fullName } = validatedFields.data

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
            data: {
                full_name: fullName,
                role: 'client', // Default role
            },
        },
    })

    if (error) {
        return {
            message: error.message,
        }
    }

    return {
        message: 'Check your email to continue sign in process.',
        success: true,
    }
}

export async function signOut() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    redirect('/login')
}

export async function forgotPassword(prevState: any, formData: FormData) {
    const supabase = await createClient()
    const origin = process.env.NEXT_PUBLIC_ORIGIN || 'http://localhost:3000'

    const email = formData.get('email') as string

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/auth/callback?next=/dashboard/reset-password`,
    })

    if (error) {
        return {
            message: error.message,
        }
    }

    return {
        success: true,
        message: 'Check your email for the password reset link.',
    }
}

export async function updatePassword(prevState: any, formData: FormData) {
    const supabase = await createClient()
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
        return {
            message: 'Passwords do not match',
        }
    }

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
        return {
            message: error.message,
        }
    }

    return {
        success: true,
        message: 'Password updated successfully',
    }
}
