"use client"

import Image from "next/image"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Quote, Truck} from "lucide-react"
import {useDynamicContent} from "@/components/dynamic-content"

export function TestimonialsSection() {
    const content = useDynamicContent()

    return (
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                            Testimonios
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Lo que dicen nuestros usuarios
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
                            Descubre cómo WasteTrack está transformando la gestión de residuos en diferentes
                            comunidades.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-4xl">
                    <Card className="border-primary/20 shadow-lg relative overflow-hidden">
                        <div className="absolute top-4 right-4 opacity-10">
                            <Quote className="h-24 w-24 text-primary" />
                        </div>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                {content.testimonial.avatar ? (
                                    <Image
                                        src={content.testimonial.avatar}
                                        width={80}
                                        height={80}
                                        alt={content.testimonial.name}
                                        className="rounded-full object-cover h-20 w-20 border-4 border-primary/10"
                                    />
                                ) : (
                                    <div className="rounded-full bg-primary/10 h-20 w-20 flex items-center justify-center border-4 border-primary/20">
                                        <Truck className="h-10 w-10 text-primary" />
                                    </div>
                                )}
                                <div className="text-left">
                                    <CardTitle className="text-2xl">{content.testimonial.name}</CardTitle>
                                    <CardDescription className="text-base">
                                        {content.testimonial.role}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                                "{content.testimonial.content}"
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}