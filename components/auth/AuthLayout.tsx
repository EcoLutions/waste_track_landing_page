import Image from "next/image"
import Link from "next/link"
import {ReactNode} from "react"
import {Card, CardContent, CardHeader} from "@/components/ui/card"

interface AuthLayoutProps {
    children: ReactNode
    title: string
    description: string
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-muted/20 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/images/wastetrack-logo.png"
                            width={50}
                            height={50}
                            alt="WasteTrack Logo"
                            className="transition-transform group-hover:scale-105"
                        />
                        <span className="text-2xl font-bold text-primary">WasteTrack</span>
                    </Link>
                </div>

                {/* Card */}
                <Card className="shadow-xl">
                    <CardHeader className="text-center pb-4">
                        <h1 className="text-3xl font-bold mb-2">{title}</h1>
                        <p className="text-muted-foreground">{description}</p>
                    </CardHeader>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>

                {/* Footer */}
                <p className="text-center text-sm text-muted-foreground mt-6">
                    ¿Necesitas ayuda?{" "}
                    <Link href="/#contacto" className="text-primary hover:underline font-medium">
                        Contáctanos
                    </Link>
                </p>
            </div>
        </div>
    )
}