import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {ArrowLeft, Home} from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-muted/20 flex items-center justify-center p-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="flex justify-center">
                    <Image
                        src="/images/wastetrack-logo.png"
                        width={80}
                        height={80}
                        alt="WasteTrack Logo"
                    />
                </div>

                <div className="space-y-2">
                    <h1 className="text-6xl font-bold text-primary">404</h1>
                    <h2 className="text-2xl font-bold">Página no encontrada</h2>
                    <p className="text-muted-foreground">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild variant="default">
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Ir al inicio
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="javascript:history.back()">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver atrás
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}