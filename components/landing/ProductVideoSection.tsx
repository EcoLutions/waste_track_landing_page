"use client"

import { useSegment } from "@/contexts/segment-context"
import { VideoSection } from "./VideoSection"

export function ProductVideoSection() {
    const { segment } = useSegment()

    const getContent = () => {
        switch (segment) {
            case "municipal-admin":
                return {
                    title: "Control Total de la Operación",
                    description: "Mira cómo WasteTrack permite visualizar toda la flota en tiempo real, generar reportes de eficiencia y optimizar el presupuesto municipal en segundos.",
                    // Video Demo de Dashboard (Placeholder)
                    videoUrl: "https://www.youtube.com/embed/_iGGVN_GFuM"
                }
            case "driver":
                return {
                    title: "Tu Copiloto Inteligente",
                    description: "Descubre cómo la app de conductor te guía por la ruta más rápida, te alerta sobre tráfico y facilita el reporte de incidencias sin distracciones.",
                    // Video Demo de App Conductor (Placeholder)
                    videoUrl: "https://www.youtube.com/embed/_iGGVN_GFuM"
                }
            case "citizen":
                return {
                    title: "Reporta en 3 Simples Pasos",
                    description: "Aprende a usar WasteTrack para reportar residuos acumulados, encontrar puntos de reciclaje y ver cómo tus reportes mejoran tu vecindario.",
                    // Video Demo de App Ciudadano (Placeholder)
                    videoUrl: "https://www.youtube.com/embed/_iGGVN_GFuM"
                }
        }
    }

    const content = getContent()

    return (
        <VideoSection
            title={content.title}
            description={content.description}
            videoUrl={content.videoUrl}
            badge="Demo del Producto"
            align="left"
            className="bg-background"
        />
    )
}