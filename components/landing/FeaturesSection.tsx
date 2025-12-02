import Image from "next/image"
import {BarChart3, MapPin, Users} from "lucide-react"

export function FeaturesSection() {
    return (
        <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                            Características
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Una plataforma completa
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
                            WasteTrack ofrece todas las herramientas necesarias para revolucionar la gestión de
                            residuos en tu ciudad.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 lg:grid-cols-2 lg:gap-12">
                    <Image
                        src="/images/analisis.png"
                        width={600}
                        height={600}
                        alt="Análisis de datos WasteTrack"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-contain shadow-xl sm:w-full lg:order-last"
                    />
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Mapeo en tiempo real</h3>
                                <p className="text-muted-foreground">
                                    Visualiza la ubicación de contenedores, puntos de reciclaje y reportes ciudadanos
                                    en un mapa interactivo.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Análisis de datos</h3>
                                <p className="text-muted-foreground">
                                    Obtén estadísticas detalladas sobre generación de residuos, tasas de reciclaje y
                                    eficiencia de recolección.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Users className="h-6 w-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Participación ciudadana</h3>
                                <p className="text-muted-foreground">
                                    Facilita la comunicación entre ciudadanos y autoridades para resolver problemas de
                                    manera colaborativa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}