"use client"

import { type Segment, useSegment } from "@/contexts/segment-context"
import { BarChart3, CheckCircle, Clock, Leaf, MapPin, Recycle, Route, Smartphone, Users } from "lucide-react"

export function getDynamicContent(segment: Segment) {
    const content = {
        "municipal-admin": {
            hero: {
                badge: "Gestión Municipal Inteligente",
                title: "Optimiza la gestión de residuos de tu municipio",
                description:
                    "Reduce costos operativos, mejora la eficiencia y toma decisiones basadas en datos para crear una ciudad más limpia y sostenible.",
                primaryCTA: "Solicitar demostración",
                secondaryCTA: "Conocer casos de éxito",
            },
            benefits: [
                {
                    icon: BarChart3,
                    title: "Análisis y reportes avanzados",
                    description:
                        "Obtén insights detallados sobre patrones de generación de residuos, eficiencia de rutas y costos operativos en tiempo real.",
                },
                {
                    icon: MapPin,
                    title: "Optimización de rutas",
                    description:
                        "Algoritmos inteligentes que optimizan las rutas de recolección, reduciendo costos de combustible y tiempo de operación.",
                },
                {
                    icon: Leaf,
                    title: "Indicadores ambientales",
                    description:
                        "Monitorea y mejora los indicadores de sostenibilidad de tu municipio con métricas precisas y reportes automáticos.",
                },
            ],
            testimonial: {
                name: "María Rodríguez",
                role: "Directora de Servicios Municipales",
                content:
                    "WasteTrack ha revolucionado nuestra gestión de residuos. Hemos reducido los costos operativos en un 30% y mejorado significativamente la satisfacción ciudadana con nuestros servicios.",
                avatar: "/images/maria.jpg",
            },
        },
        driver: {
            hero: {
                badge: "Herramientas para Conductores",
                title: "Optimiza tus rutas y mejora tu eficiencia diaria",
                description:
                    "Recibe rutas inteligentes, gestiona tu tiempo de manera eficiente y mantente conectado con tu equipo a través de nuestra app móvil.",
                primaryCTA: "Descargar app",
                secondaryCTA: "Ver características",
            },
            benefits: [
                {
                    icon: Route,
                    title: "Rutas optimizadas en tiempo real",
                    description:
                        "Recibe las rutas más eficientes actualizadas en tiempo real, considerando tráfico, prioridades y capacidad del vehículo.",
                },
                {
                    icon: Clock,
                    title: "Gestión inteligente del tiempo",
                    description:
                        "Planifica mejor tu jornada laboral con estimaciones precisas de tiempo y notificaciones de cambios en la ruta.",
                },
                {
                    icon: Smartphone,
                    title: "App móvil diseñada para ti",
                    description:
                        "Interfaz intuitiva optimizada para conductores, con navegación GPS integrada y comunicación directa con el centro de control.",
                },
            ],
            testimonial: {
                name: "Roberto García",
                role: "Conductor de recolección",
                content:
                    "La app me ayuda a optimizar mis rutas diarias. Ahora puedo completar mi trabajo más rápido y con menos estrés. Las notificaciones en tiempo real son muy útiles.",
                avatar: "/images/roberto.jpg",
            },
        },
        citizen: {
            hero: {
                badge: "Participación Ciudadana",
                title: "Contribuye a una ciudad más limpia y sostenible",
                description:
                    "Reporta problemas, aprende sobre reciclaje y conecta con tu comunidad para crear un impacto positivo en tu entorno.",
                primaryCTA: "Descargar app",
                secondaryCTA: "Conocer más",
            },
            benefits: [
                {
                    icon: CheckCircle,
                    title: "Reportes fáciles y efectivos",
                    description:
                        "Reporta problemas de residuos directamente desde tu móvil y sigue el estado de tus reportes hasta su resolución.",
                },
                {
                    icon: Recycle,
                    title: "Educación ambiental personalizada",
                    description:
                        "Accede a información sobre reciclaje, separación de residuos y prácticas sostenibles adaptadas a tu localidad.",
                },
                {
                    icon: Users,
                    title: "Comunidad comprometida",
                    description:
                        "Conecta con vecinos que comparten tu compromiso ambiental y participa en iniciativas locales de sostenibilidad.",
                },
            ],
            testimonial: {
                name: "Carlos Méndez",
                role: "Ciudadano comprometido",
                content:
                    "Como ciudadano, me encanta poder reportar problemas directamente y ver cómo se resuelven. La aplicación es intuitiva y realmente siento que estoy contribuyendo a mejorar mi comunidad.",
                avatar: "/images/carlos.jpg",
            },
        },
    }

    return content[segment]
}

export function useDynamicContent() {
    const { segment } = useSegment()
    return getDynamicContent(segment)
}