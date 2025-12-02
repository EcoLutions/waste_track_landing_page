"use client"

import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {RoleSwitcher} from "./RoleSwitcher"
import {useSegment} from "@/contexts/segment-context"
import {DEEP_LINKS} from "@/lib/constants"
import {Menu} from "lucide-react"
import {useState} from "react"

export function Header() {
    const { segment } = useSegment()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const getHeaderButtons = () => {
        switch (segment) {
            case "municipal-admin":
                return (
                    <>
                        <Button variant="outline" asChild className="hidden md:flex">
                            <Link href="http://localhost:4200/municipal-admin">
                                Iniciar sesión
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="#contacto">Solicitar demo</Link>
                        </Button>
                    </>
                )
            case "driver":
                return (
                    <>
                        <Button variant="outline" asChild className="hidden md:flex">
                            <a href={DEEP_LINKS.DRIVER.LOGIN}>Iniciar sesión</a>
                        </Button>
                        <Button asChild>
                            <Link href="#app">Descargar app</Link>
                        </Button>
                    </>
                )
            case "citizen":
                return (
                    <>
                        <Button variant="outline" asChild className="hidden md:flex">
                            <a href={DEEP_LINKS.CITIZEN.LOGIN}>Iniciar sesión</a>
                        </Button>
                        <Button variant="secondary" asChild className="hidden md:flex">
                            <a href={DEEP_LINKS.CITIZEN.REGISTER}>Registrarse</a>
                        </Button>
                        <Button asChild>
                            <Link href="#app">Descargar app</Link>
                        </Button>
                    </>
                )
        }
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/wastetrack-logo.png"
                        width={40}
                        height={40}
                        alt="WasteTrack Logo"
                        className="h-10 w-10"
                    />
                    <span className="text-xl font-bold text-primary">WasteTrack</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    <Link
                        href="#beneficios"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Beneficios
                    </Link>
                    <Link
                        href="#caracteristicas"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Características
                    </Link>
                    <Link
                        href="#testimonios"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Testimonios
                    </Link>
                    {segment !== "municipal-admin" && (
                        <Link
                            href="#app"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Aplicación
                        </Link>
                    )}
                    <Link
                        href="#contacto"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Contacto
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <RoleSwitcher />
                    <div className="hidden md:flex items-center gap-2">
                        {getHeaderButtons()}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="container flex flex-col gap-4 py-4 px-4">
                        <Link
                            href="#beneficios"
                            className="text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Beneficios
                        </Link>
                        <Link
                            href="#caracteristicas"
                            className="text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Características
                        </Link>
                        <Link
                            href="#testimonios"
                            className="text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Testimonios
                        </Link>
                        {segment !== "municipal-admin" && (
                            <Link
                                href="#app"
                                className="text-sm font-medium hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Aplicación
                            </Link>
                        )}
                        <Link
                            href="#contacto"
                            className="text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contacto
                        </Link>
                        <div className="flex flex-col gap-2 pt-2">
                            {getHeaderButtons()}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}