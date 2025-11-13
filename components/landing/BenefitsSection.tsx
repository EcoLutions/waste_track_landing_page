"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {useDynamicContent} from "@/components/dynamic-content"
import {useSegment} from "@/contexts/segment-context"

export function BenefitsSection() {
    const content = useDynamicContent()
    const { segment } = useSegment()

    const getTitleBySegment = () => {
        switch (segment) {
            case "municipal-admin":
                return "Optimiza tu gestión municipal"
            case "driver":
                return "Mejora tu eficiencia diaria"
            case "citizen":
                return "Impacta positivamente tu comunidad"
        }
    }

    const getDescriptionBySegment = () => {
        switch (segment) {
            case "municipal-admin":
                return "Herramientas avanzadas para administradores municipales que buscan eficiencia y sostenibilidad."
            case "driver":
                return "Tecnología diseñada específicamente para conductores de recolección de residuos."
            case "citizen":
                return "Participa activamente en la creación de una ciudad más limpia y sostenible."
        }
    }

    return (
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                            Beneficios
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {getTitleBySegment()}
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
                            {getDescriptionBySegment()}
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {content.benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors">
                                <CardHeader>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}