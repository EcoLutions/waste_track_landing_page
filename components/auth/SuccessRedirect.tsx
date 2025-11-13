"use client"

import {useEffect, useState} from "react"
import {CheckCircle} from "lucide-react"

interface SuccessRedirectProps {
    message: string
    countdown: number
}

export function SuccessRedirect({ message, countdown }: SuccessRedirectProps) {
    const [count, setCount] = useState(countdown)

    useEffect(() => {
        if (count <= 0) return

        const timer = setInterval(() => {
            setCount((prev) => Math.max(0, prev - 1))
        }, 1000)

        return () => clearInterval(timer)
    }, [count])

    return (
        <div className="flex flex-col items-center justify-center space-y-6 py-8">
            <div className="rounded-full bg-primary/10 p-6">
                <CheckCircle className="h-16 w-16 text-primary" />
            </div>

            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">¡Contraseña actualizada!</h3>
                <p className="text-muted-foreground">{message}</p>
            </div>

            {count > 0 && (
                <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted border-2 border-primary">
                        <span className="text-xl font-bold text-primary">{count}</span>
                    </div>
                    <p className="text-sm">Redirigiendo automáticamente...</p>
                </div>
            )}
        </div>
    )
}