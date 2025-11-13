"use client"

import {useSegment} from "@/contexts/segment-context"
import {ContactForm} from "@/components/landing/ContactForm";

export function ContactSection() {
    const { segment } = useSegment()

    const getTitle = () => {
        switch (segment) {
            case "municipal-admin":
                return "¿Listo para optimizar la gestión de residuos en tu municipio?"
            case "driver":
                return "¿Listo para mejorar tu eficiencia diaria?"
            case "citizen":
                return "¿Listo para contribuir a una ciudad más limpia?"
        }
    }

    const getDescription = () => {
        switch (segment) {
            case "municipal-admin":
                return "Únete a los municipios que ya están creando ciudades más limpias y sostenibles con WasteTrack."
            case "driver":
                return "Únete a los conductores que ya optimizan sus rutas con WasteTrack."
            case "citizen":
                return "Únete a los ciudadanos que ya están participando activamente en su comunidad con WasteTrack."
        }
    }

    const formVariant = segment === "municipal-admin" ? "demo" : "default"

    return (
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {getTitle()}
                        </h2>
                        <p className="max-w-[600px] text-primary-foreground/90 text-lg md:text-xl">
                            {getDescription()}
                        </p>
                    </div>
                    <div className="bg-background rounded-lg p-6 shadow-lg">
                        <ContactForm variant={formVariant} />
                    </div>
                </div>
            </div>
        </section>
    )
}