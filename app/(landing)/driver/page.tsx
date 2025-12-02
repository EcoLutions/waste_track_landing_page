import type {Metadata} from "next"
import {HeroSection} from "@/components/landing/HeroSection"
import {BenefitsSection} from "@/components/landing/BenefitsSection"
import {FeaturesSection} from "@/components/landing/FeaturesSection"
import {TestimonialsSection} from "@/components/landing/TestimonialsSection"
import {AppDownloadSection} from "@/components/landing/AppDownloadSection"
import {CrossPromotionSection} from "@/components/landing/CrossPromotionSection"
import {ContactSection} from "@/components/landing/ContactSection"

export const metadata: Metadata = {
    title: "WasteTrack para Conductores - Optimiza tus Rutas",
    description:
        "Mejora tu eficiencia diaria como conductor de recolección con WasteTrack. Rutas optimizadas, gestión de tiempo y comunicación en tiempo real.",
    keywords: "conductores, recolección de residuos, rutas optimizadas, app móvil, logística",
}

export default function DriverPage() {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <TestimonialsSection />
            <AppDownloadSection />
            <CrossPromotionSection />
            <ContactSection />
        </>
    )
}