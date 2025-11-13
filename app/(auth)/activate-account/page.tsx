"use client"

import {Suspense, useEffect, useState} from "react"
import {useRouter, useSearchParams} from "next/navigation"
import {AuthLayout} from "@/components/auth/AuthLayout"
import {PasswordForm} from "@/components/auth/PasswordForm"
import {SuccessRedirect} from "@/components/auth/SuccessRedirect"
import {MobileAppWarning} from "@/components/auth/MobileAppWarning"
import {useAuthRedirect} from "@/hooks/use-auth-redirect"
import {authClient} from "@/lib/api/auth-client"
import {AlertCircle} from "lucide-react"

function ActivateAccountContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const { strategy, countdown, handleRedirect } = useAuthRedirect()

    const token = searchParams.get("token")

    useEffect(() => {
        if (!token) {
            router.push("/")
        }
    }, [token, router])

    const handleSubmit = async (password: string) => {
        if (!token) return

        setIsLoading(true)
        setError(null)

        try {
            const response = await authClient.setInitialPassword(token, password)
            setSuccess(true)
            await handleRedirect(response.roles)
        } catch (err: any) {
            setError(err.message || "Error al activar la cuenta. Por favor, intenta nuevamente.")
        } finally {
            setIsLoading(false)
        }
    }

    if (!token) {
        return null
    }

    return (
        <AuthLayout
            title="Activa tu cuenta"
            description="Establece tu contraseña para comenzar a usar WasteTrack"
        >
            {!success ? (
                <div className="space-y-6">
                    {error && (
                        <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-destructive">Error</p>
                                <p className="text-sm text-destructive/90">{error}</p>
                            </div>
                        </div>
                    )}

                    <PasswordForm
                        onSubmit={handleSubmit}
                        submitButtonText="Activar cuenta"
                        isLoading={isLoading}
                    />
                </div>
            ) : (
                <>
                    {strategy?.shouldRedirect ? (
                        <SuccessRedirect message={strategy.message} countdown={countdown} />
                    ) : strategy?.requiresMobileApp && strategy?.appInfo ? (
                        <MobileAppWarning appInfo={strategy.appInfo} message={strategy.message} />
                    ) : (
                        <SuccessRedirect message="Cuenta activada correctamente" countdown={0} />
                    )}
                </>
            )}
        </AuthLayout>
    )
}

export default function ActivateAccountPage() {
    return (
        <Suspense fallback={
            <AuthLayout
                title="Activa tu cuenta"
                description="Cargando..."
            >
                <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            </AuthLayout>
        }>
            <ActivateAccountContent />
        </Suspense>
    )
}