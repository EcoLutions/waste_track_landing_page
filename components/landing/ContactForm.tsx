"use client"

import {useState} from "react"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {CheckCircle, Loader2} from "lucide-react"

const contactFormSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Correo electrónico inválido"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
    variant?: "default" | "demo"
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true)

        // Simular envío (aquí irías tu lógica de envío real)
        await new Promise((resolve) => setTimeout(resolve, 1500))

        console.log("Formulario enviado:", data)
        setIsLoading(false)
        setSubmitted(true)

        // Resetear después de 5 segundos
        setTimeout(() => {
            setSubmitted(false)
            reset()
        }, 5000)
    }

    const getTitle = () => {
        return variant === "demo" ? "Solicitar demostración" : "Envíanos un mensaje"
    }

    const getDescription = () => {
        return variant === "demo"
            ? "Completa el formulario y nos pondremos en contacto contigo para agendar una demo personalizada"
            : "Completa el formulario y nuestro equipo te responderá a la brevedad"
    }

    return (
        <>
            {submitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-8">
                    <div className="rounded-full bg-primary/10 p-6">
                        <CheckCircle className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-center">¡Mensaje enviado con éxito!</h3>
                    <p className="text-center text-muted-foreground">
                        Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                    </p>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="space-y-2 text-center">
                        <h3 className="text-2xl font-bold">{getTitle()}</h3>
                        <p className="text-sm text-muted-foreground">{getDescription()}</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nombre completo</Label>
                            <Input
                                id="name"
                                placeholder="Juan Pérez"
                                {...register("name")}
                                disabled={isLoading}
                            />
                            {errors.name && (
                                <p className="text-sm text-destructive">{errors.name.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="juan@ejemplo.com"
                                {...register("email")}
                                disabled={isLoading}
                            />
                            {errors.email && (
                                <p className="text-sm text-destructive">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Mensaje</Label>
                            <Textarea
                                id="message"
                                placeholder={
                                    variant === "demo"
                                        ? "Cuéntanos sobre tu municipio y tus necesidades..."
                                        : "¿En qué podemos ayudarte?"
                                }
                                className="min-h-[120px]"
                                {...register("message")}
                                disabled={isLoading}
                            />
                            {errors.message && (
                                <p className="text-sm text-destructive">{errors.message.message}</p>
                            )}
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                "Enviar mensaje"
                            )}
                        </Button>
                    </form>
                </div>
            )}
        </>
    )
}