import type {Metadata} from "next"
import {HeroSection} from "@/components/landing/HeroSection"
import {BenefitsSection} from "@/components/landing/BenefitsSection"
import {FeaturesSection} from "@/components/landing/FeaturesSection"
import {TestimonialsSection} from "@/components/landing/TestimonialsSection"
import {CrossPromotionSection} from "@/components/landing/CrossPromotionSection"
import {ContactSection} from "@/components/landing/ContactSection"
import {ProductVideoSection} from "@/components/landing/ProductVideoSection";
import {TeamVideoSection} from "@/components/landing/TeamVideoSection";

export const metadata: Metadata = {
    title: "WasteTrack para Administradores Municipales - Gestión Inteligente de Residuos",
    description:
        "Optimiza la gestión de residuos de tu municipio con WasteTrack. Reduce costos, mejora eficiencia y toma decisiones basadas en datos.",
    keywords: "gestión municipal, residuos, optimización, smart city, administración pública",
}

export default function MunicipalAdminPage() {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CrossPromotionSection />
            <ProductVideoSection/>
            <TeamVideoSection />
            <ContactSection />
        </>
    )
}