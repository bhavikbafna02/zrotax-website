import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { signOut } from '@/app/auth/actions'
import { Building2, FileText, PieChart, ShieldCheck } from 'lucide-react'

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-slate-50/50">
            <div className="border-b bg-white">
                <div className="flex h-16 items-center px-8 container mx-auto justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl text-primary">
                        <Building2 className="h-6 w-6" />
                        <span>Zrotax Portal</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-slate-500">
                            {user.email} <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full border ml-2">{user.user_metadata.role || 'client'}</span>
                        </div>
                        <form action={signOut}>
                            <button className="text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-md transition-colors">
                                Sign Out
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-8 space-y-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border bg-white text-card-foreground shadow-sm p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                <FileText className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">ITR Filings</p>
                                <h3 className="text-2xl font-bold">12</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-white text-card-foreground shadow-sm p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                <PieChart className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">Tax Saved</p>
                                <h3 className="text-2xl font-bold">₹1.5L</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-white text-card-foreground shadow-sm p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">Compliance</p>
                                <h3 className="text-2xl font-bold">100%</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <div className="col-span-4 rounded-xl border bg-white shadow-sm p-6">
                        <h3 className="font-semibold text-lg mb-4">Recent Documents</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-5 w-5 text-slate-400" />
                                        <div>
                                            <p className="font-medium">ITR-V Assessment Year 2024-25</p>
                                            <p className="text-xs text-slate-500">Uploaded on 15 Feb 2025</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">Verified</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-3 rounded-xl border bg-white shadow-sm p-6">
                        <h3 className="font-semibold text-lg mb-4">Next Steps</h3>
                        <div className="space-y-4">
                            <div className="p-4 border border-l-4 border-l-yellow-500 bg-yellow-50/50 rounded-r-lg">
                                <h4 className="font-medium text-yellow-800">Complete KYC</h4>
                                <p className="text-sm text-yellow-700 mt-1">Please upload your PAN card copy to proceed with filing.</p>
                                <button className="mt-2 text-xs font-semibold text-yellow-800 underline">Upload Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
