"use client"

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {ArrowRight, Building2, Truck, Users} from "lucide-react"
import {useSegment} from "@/contexts/segment-context"
import {ROUTES} from "@/lib/constants"

export function CrossPromotionSection() {
    const { segment } = useSegment()

    const getPromotions = () => {
        switch (segment) {
            case "municipal-admin":
                return [
                    {
                        icon: Truck,
                        title: "¿Eres conductor?",
                        description: "Descubre cómo WasteTrack optimiza tus rutas diarias",
                        link: ROUTES.LANDING.DRIVER,
                        linkText: "Ver para conductores",
                    },
                    {
                        icon: Users,
                        title: "¿Eres ciudadano?",
                        description: "Aprende cómo puedes contribuir a una ciudad más limpia",
                        link: ROUTES.LANDING.CITIZEN,
                        linkText: "Ver para ciudadanos",
                    },
                ]
            case "driver":
                return [
                    {
                        icon: Building2,
                        title: "¿Administras un municipio?",
                        description: "Conoce nuestras herramientas de gestión municipal",
                        link: ROUTES.LANDING.MUNICIPAL_ADMIN,
                        linkText: "Ver para municipios",
                    },
                    {
                        icon: Users,
                        title: "¿Eres ciudadano?",
                        description: "Participa activamente en tu comunidad",
                        link: ROUTES.LANDING.CITIZEN,
                        linkText: "Ver para ciudadanos",
                    },
                ]
            case "citizen":
                return [
                    {
                        icon: Building2,
                        title: "¿Administras un municipio?",
                        description: "Optimiza la gestión de residuos en tu ciudad",
                        link: ROUTES.LANDING.MUNICIPAL_ADMIN,
                        linkText: "Ver para municipios",
                    },
                    {
                        icon: Truck,
                        title: "¿Eres conductor?",
                        description: "Mejora tu eficiencia con tecnología inteligente",
                        link: ROUTES.LANDING.DRIVER,
                        linkText: "Ver para conductores",
                    },
                ]
        }
    }

    const promotions = getPromotions()

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        WasteTrack para todos
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
                        Nuestra plataforma está diseñada para cada actor del ecosistema de gestión de residuos
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                    {promotions.map((promo, index) => {
                        const Icon = promo.icon
                        return (
                            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                                    <CardDescription className="text-base">{promo.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="outline" asChild className="w-full group">
                                        <Link href={promo.link}>
                                            {promo.linkText}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}