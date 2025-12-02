"use client"

import {type Segment, useSegment} from "@/contexts/segment-context"
import {Button} from "@/components/ui/button"
import {Building2, ChevronDown, Truck, Users} from "lucide-react"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

const ROLE_CONFIG = {
    "municipal-admin": {
        label: "Administrador Municipal",
        icon: Building2,
    },
    driver: {
        label: "Conductor",
        icon: Truck,
    },
    citizen: {
        label: "Ciudadano",
        icon: Users,
    },
} as const

export function RoleSwitcher() {
    const { segment, setSegment } = useSegment()
    const CurrentIcon = ROLE_CONFIG[segment].icon

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <CurrentIcon className="h-4 w-4" />
                    <span className="hidden sm:inline">{ROLE_CONFIG[segment].label}</span>
                    <span className="sm:hidden">Rol</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                {(Object.entries(ROLE_CONFIG) as [Segment, typeof ROLE_CONFIG[Segment]][]).map(([key, config]) => {
                    const Icon = config.icon
                    return (
                        <DropdownMenuItem
                            key={key}
                            onClick={() => setSegment(key)}
                            className={segment === key ? "bg-primary/10" : ""}
                        >
                            <Icon className="mr-2 h-4 w-4" />
                            <span>{config.label}</span>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}