import { VideoSection } from "./VideoSection"

export function TeamVideoSection() {
    return (
        <VideoSection
            title="Conoce al equipo detrás de WasteTrack"
            description="Somos un grupo de ingenieros, diseñadores y expertos ambientales apasionados por crear ciudades más limpias. Descubre nuestra historia y por qué nos dedicamos a transformar la gestión de residuos."
            // Video del Equipo (Placeholder)
            videoUrl="https://www.youtube.com/embed/UQeGcicNJ6w"
            badge="Nuestro Equipo"
            align="right"
            className="bg-muted/30"
        />
    )
}