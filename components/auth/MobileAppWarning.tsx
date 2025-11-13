"use client"

import Image from "next/image"
import {Download, Smartphone} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader} from "@/components/ui/card"

interface MobileAppWarningProps {
    appInfo: {
        appName: string
        description: string
        iosUrl: string
        androidUrl: string
    }
    message: string
}

export function MobileAppWarning({ appInfo, message }: MobileAppWarningProps) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-6">
                    <Smartphone className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Aplicación móvil requerida</h3>
                    <p className="text-muted-foreground max-w-md">{message}</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/wastetrack-logo.png"
                                width={60}
                                height={60}
                                alt={appInfo.appName}
                                className="rounded-xl"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">{appInfo.appName}</h4>
                            <p className="text-sm text-muted-foreground">{appInfo.description}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p className="text-sm font-medium">Descarga la aplicación:</p>

                    <Button
                        asChild
                        variant="secondary"
                        className="w-full h-12"
                    >
                        <a href={appInfo.iosUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-5 w-5" />
                            <div className="text-left">
                                <div className="text-xs">Descargar en</div>
                                <div className="text-sm font-semibold">App Store</div>
                            </div>
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="secondary"
                        className="w-full h-12"
                    >
                        <a href={appInfo.androidUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-5 w-5" />
                            <div className="text-left">
                                <div className="text-xs">Disponible en</div>
                                <div className="text-sm font-semibold">Google Play</div>
                            </div>
                        </a>
                    </Button>
                </CardContent>
            </Card>

            <p className="text-center text-sm text-muted-foreground">
                Una vez instalada la aplicación, podrás iniciar sesión con tus credenciales
            </p>
        </div>
    )
}