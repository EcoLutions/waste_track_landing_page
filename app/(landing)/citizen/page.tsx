import type {Metadata} from "next"
import {HeroSection} from "@/components/landing/HeroSection"
import {BenefitsSection} from "@/components/landing/BenefitsSection"
import {FeaturesSection} from "@/components/landing/FeaturesSection"
import {TestimonialsSection} from "@/components/landing/TestimonialsSection"
import {AppDownloadSection} from "@/components/landing/AppDownloadSection"
import {CrossPromotionSection} from "@/components/landing/CrossPromotionSection"
import {ContactSection} from "@/components/landing/ContactSection"

export const metadata: Metadata = {
    title: "WasteTrack para Ciudadanos - Participa en tu Comunidad",
    description:
        "Contribuye a una ciudad más limpia con WasteTrack. Reporta problemas, aprende sobre reciclaje y conecta con tu comunidad.",
    keywords: "participación ciudadana, reciclaje, reportes, comunidad, sostenibilidad",
}

export default function CitizenPage() {
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