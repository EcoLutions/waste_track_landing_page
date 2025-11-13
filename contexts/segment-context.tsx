"use client"

import type React from "react"
import {createContext, useContext, useEffect, useState} from "react"
import {usePathname, useRouter} from "next/navigation"
import {ROUTES, SEGMENTS} from "@/lib/constants"

export type Segment = (typeof SEGMENTS)[keyof typeof SEGMENTS]

interface SegmentContextType {
    segment: Segment
    setSegment: (segment: Segment) => void
    isLoading: boolean
}

const SegmentContext = createContext<SegmentContextType | undefined>(undefined)

export function SegmentProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const router = useRouter()
    const [segment, setSegmentState] = useState<Segment>(SEGMENTS.MUNICIPAL_ADMIN)
    const [isLoading, setIsLoading] = useState(true)

    // Initialize segment from URL path on mount
    useEffect(() => {
        const initializeSegment = () => {
            // Determine a segment from current path
            if (pathname.includes(ROUTES.LANDING.MUNICIPAL_ADMIN)) {
                setSegmentState(SEGMENTS.MUNICIPAL_ADMIN)
            } else if (pathname.includes(ROUTES.LANDING.DRIVER)) {
                setSegmentState(SEGMENTS.DRIVER)
            } else if (pathname.includes(ROUTES.LANDING.CITIZEN)) {
                setSegmentState(SEGMENTS.CITIZEN)
            } else {
                // Try to load from localStorage for other pages
                const savedSegment = localStorage.getItem("wastetrack-segment") as Segment
                if (savedSegment && Object.values(SEGMENTS).includes(savedSegment)) {
                    setSegmentState(savedSegment)
                }
            }
            setIsLoading(false)
        }

        initializeSegment()
    }, [pathname])

    const setSegment = (newSegment: Segment) => {
        setSegmentState(newSegment)
        localStorage.setItem("wastetrack-segment", newSegment)

        // Navigate to the corresponding landing page
        const routeMap = {
            [SEGMENTS.MUNICIPAL_ADMIN]: ROUTES.LANDING.MUNICIPAL_ADMIN,
            [SEGMENTS.DRIVER]: ROUTES.LANDING.DRIVER,
            [SEGMENTS.CITIZEN]: ROUTES.LANDING.CITIZEN,
        }

        const targetRoute = routeMap[newSegment]
        if (targetRoute && !pathname.includes(targetRoute)) {
            router.push(targetRoute)
        }
    }

    return (
        <SegmentContext.Provider value={{ segment, setSegment, isLoading }}>
            {children}
        </SegmentContext.Provider>
    )
}

export function useSegment() {
    const context = useContext(SegmentContext)
    if (context === undefined) {
        throw new Error("useSegment must be used within a SegmentProvider")
    }
    return context
}

// Utility functions
export function getSegmentFromPath(pathname: string): Segment {
    if (pathname.includes(ROUTES.LANDING.MUNICIPAL_ADMIN)) {
        return SEGMENTS.MUNICIPAL_ADMIN
    } else if (pathname.includes(ROUTES.LANDING.DRIVER)) {
        return SEGMENTS.DRIVER
    } else if (pathname.includes(ROUTES.LANDING.CITIZEN)) {
        return SEGMENTS.CITIZEN
    }
    return SEGMENTS.MUNICIPAL_ADMIN // default
}

export function getRouteFromSegment(segment: Segment): string {
    const routeMap = {
        [SEGMENTS.MUNICIPAL_ADMIN]: ROUTES.LANDING.MUNICIPAL_ADMIN,
        [SEGMENTS.DRIVER]: ROUTES.LANDING.DRIVER,
        [SEGMENTS.CITIZEN]: ROUTES.LANDING.CITIZEN,
    }
    return routeMap[segment]
}