"use client"

import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {ArrowRight} from "lucide-react"
import {useDynamicContent} from "@/components/dynamic-content"
import {useSegment} from "@/contexts/segment-context"

export function HeroSection() {
    const content = useDynamicContent()
    const { segment } = useSegment()

    const getPrimaryCTALink = () => {
        if (segment === "municipal-admin") {
            return "#contacto"
        }
        return "#app"
    }

    const getSecondaryCTALink = () => {
        if (segment === "municipal-admin") {
            return "#testimonios"
        }
        return "#caracteristicas"
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                            {content.hero.badge}
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            {content.hero.title}
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                            {content.hero.description}
                        </p>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row">
                            <Button size="lg" asChild>
                                <Link href={getPrimaryCTALink()}>
                                    {content.hero.primaryCTA}
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href={getSecondaryCTALink()}>
                                    {content.hero.secondaryCTA}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                        <Image
                            src="/images/principal.png"
                            width={600}
                            height={600}
                            alt="WasteTrack Gestión de Residuos"
                            className="w-full rounded-xl object-contain shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}