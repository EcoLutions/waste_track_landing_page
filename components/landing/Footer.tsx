import Link from "next/link"
import Image from "next/image"
import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter} from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full border-t bg-background">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto py-12 md:py-16">
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/wastetrack-logo.png"
                                width={32}
                                height={32}
                                alt="WasteTrack Logo"
                                className="h-8 w-8"
                            />
                            <span className="text-lg font-bold text-primary">WasteTrack</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Transformando la gestión de residuos urbanos para crear ciudades más limpias y
                            sostenibles.
                        </p>
                        <div className="flex gap-3">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Linkedin className="h-4 w-4" />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Instagram className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Plataforma */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Plataforma</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#caracteristicas" className="hover:text-primary transition-colors">
                                    Características
                                </Link>
                            </li>
                            <li>
                                <Link href="#beneficios" className="hover:text-primary transition-colors">
                                    Beneficios
                                </Link>
                            </li>
                            <li>
                                <Link href="#app" className="hover:text-primary transition-colors">
                                    Aplicación móvil
                                </Link>
                            </li>
                            <li>
                                <Link href="#testimonios" className="hover:text-primary transition-colors">
                                    Testimonios
                                </Link>
                            </li>
                            <li>
                                <Link href="/municipal-admin" className="hover:text-primary transition-colors">
                                    Para municipios
                                </Link>
                            </li>
                            <li>
                                <Link href="/driver" className="hover:text-primary transition-colors">
                                    Para conductores
                                </Link>
                            </li>
                            <li>
                                <Link href="/citizen" className="hover:text-primary transition-colors">
                                    Para ciudadanos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Empresa</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    Sobre nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-primary transition-colors">
                                    Carreras
                                </Link>
                            </li>
                            <li>
                                <Link href="/press" className="hover:text-primary transition-colors">
                                    Prensa
                                </Link>
                            </li>
                            <li>
                                <Link href="#contacto" className="hover:text-primary transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contacto</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <a
                                href="mailto:info@wastetrack.com"
                                className="hover:text-primary transition-colors"
                                >
                                info@wastetrack.com
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <a href="tel:+51987654321" className="hover:text-primary transition-colors">
                                +51 987 654 321
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <address className="not-italic">
                                Av. Sostenibilidad 123
                                <br />
                                Lima, Perú
                            </address>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-muted-foreground">
                    © {currentYear} WasteTrack. Todos los derechos reservados.
                </p>
                <div className="flex gap-6 text-xs text-muted-foreground">
                    <Link href="/privacy" className="hover:text-primary transition-colors">
                        Política de privacidad
                    </Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">
                        Términos de servicio
                    </Link>
                    <Link href="/cookies" className="hover:text-primary transition-colors">
                        Política de cookies
                    </Link>
                </div>
            </div>
        </div>
</footer>
)
}