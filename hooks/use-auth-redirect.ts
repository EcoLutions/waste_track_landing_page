"use client"

import {useState} from "react"
import type {RedirectStrategy} from "@/lib/redirect/redirect-strategy"
import {executeRedirect, getRedirectStrategy} from "@/lib/redirect/redirect-strategy"
import {REDIRECT_DELAYS} from "@/lib/constants"

export function useAuthRedirect() {
    const [strategy, setStrategy] = useState<RedirectStrategy | null>(null)
    const [countdown, setCountdown] = useState(3)

    const handleRedirect = async (roles: string[]) => {
        const redirectStrategy = getRedirectStrategy(roles)
        setStrategy(redirectStrategy)

        if (redirectStrategy.shouldRedirect && redirectStrategy.url) {
            // Start countdown
            let count = 3
            const countdownInterval = setInterval(() => {
                count -= 1
                setCountdown(count)
                if (count <= 0) {
                    clearInterval(countdownInterval)
                }
            }, 1000)

            // Execute redirect after delay
            await executeRedirect(redirectStrategy.url, REDIRECT_DELAYS.SUCCESS_COUNTDOWN)
        }
    }

    return {
        strategy,
        countdown,
        handleRedirect,
    }
}