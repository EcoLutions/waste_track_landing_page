"use client"

import Image from "next/image"
import {Button} from "@/components/ui/button"
import {BarChart3, CheckCircle, Clock, Download, Recycle, Route} from "lucide-react"
import {useSegment} from "@/contexts/segment-context"
import {APP_STORE_URLS} from "@/lib/constants"

export function AppDownloadSection() {
    const { segment } = useSegment()

    // Solo mostrar para driver y citizen
    if (segment === "municipal-admin") {
        return null
    }

    const getTitle = () => {
        return segment === "driver"
            ? "Optimiza tus rutas desde tu móvil"
            : "Participa desde tu dispositivo móvil"
    }

    const getDescription = () => {
        return segment === "driver"
            ? "Gestiona tu municipio desde cualquier lugar con nuestra app administrativa."
            : "Reporta problemas y participa en tu comunidad desde tu dispositivo móvil."
    }

    const getFeatures = () => {
        if (segment === "driver") {
            return [
                { icon: Route, text: "Rutas optimizadas en tiempo real" },
                { icon: Clock, text: "Gestión de tiempos y horarios" },
                { icon: CheckCircle, text: "Confirmación de recolecciones" },
                { icon: BarChart3, text: "Reportes de productividad" },
            ]
        } else {
            return [
                { icon: CheckCircle, text: "Reporta problemas fácilmente" },
                { icon: Recycle, text: "Consejos de reciclaje" },
                { icon: Route, text: "Ubicación de puntos de reciclaje" },
                { icon: BarChart3, text: "Seguimiento de reportes" },
            ]
        }
    }

    const appUrls = segment === "driver" ? APP_STORE_URLS.DRIVER : APP_STORE_URLS.CITIZEN

    return (
        <section id="app" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                            Aplicación Móvil
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {getTitle()}
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                            {getDescription()}
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" variant="secondary" asChild className="h-14">
                                <a href={appUrls.IOS} target="_blank" rel="noopener noreferrer">
                                    <Download className="mr-2 h-5 w-5" />
                                    <div className="text-left">
                                        <div className="text-xs">Descargar en</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </a>
                            </Button>
                            <Button size="lg" variant="secondary" asChild className="h-14">
                                <a href={appUrls.ANDROID} target="_blank" rel="noopener noreferrer">
                                    <Download className="mr-2 h-5 w-5" />
                                    <div className="text-left">
                                        <div className="text-xs">Disponible en</div>
                                        <div className="text-sm font-semibold">Google Play</div>
                                    </div>
                                </a>
                            </Button>
                        </div>
                        <div className="pt-4 space-y-3">
                            {getFeatures().map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <div key={index} className="flex items-center gap-3 text-sm">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                                            <Icon className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-muted-foreground">{feature.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-[400px] lg:max-w-none">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 shadow-2xl">
                                <div className="bg-background rounded-2xl p-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/images/wastetrack-logo.png"
                                            width={48}
                                            height={48}
                                            alt="WasteTrack Logo"
                                            className="h-12 w-12 rounded-xl"
                                        />
                                        <div>
                                            <h3 className="font-bold text-primary">WasteTrack</h3>
                                            <p className="text-sm text-muted-foreground">Gestión Inteligente</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {segment === "driver" ? (
                                            <>
                                                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                                                    <Route className="h-5 w-5 text-primary" />
                                                    <span className="text-sm font-medium">Ruta optimizada disponible</span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                                                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                                    <span className="text-sm font-medium">Tiempo estimado: 4h 30min</span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                                                    <CheckCircle className="h-5 w-5 text-primary" />
                                                    <span className="text-sm font-medium">Reporte procesado</span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                                                    <Recycle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                                    <span className="text-sm font-medium">Tip de reciclaje disponible</span>
                                                </div>
                                            </>
                                        )}
                                        <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                                            <BarChart3 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                            <span className="text-sm font-medium">Análisis semanal listo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}