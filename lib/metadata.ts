import type { Metadata } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://wastetrack.com"

export const baseMetadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: "WasteTrack - Gestión Inteligente de Residuos",
        template: "%s | WasteTrack",
    },
    description:
        "Plataforma para optimizar la gestión de residuos urbanos con tecnología IoT y análisis de datos en tiempo real.",
    keywords: [
        "gestión de residuos",
        "reciclaje",
        "IoT",
        "sostenibilidad",
        "smart city",
        "waste management",
        "municipios",
        "ciudades inteligentes",
    ],
    authors: [{ name: "WasteTrack Team" }],
    creator: "WasteTrack",
    publisher: "WasteTrack",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "es_PE",
        url: BASE_URL,
        siteName: "WasteTrack",
        title: "WasteTrack - Gestión Inteligente de Residuos",
        description:
            "Plataforma para optimizar la gestión de residuos urbanos con tecnología IoT y análisis de datos en tiempo real.",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "WasteTrack - Gestión Inteligente de Residuos",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WasteTrack - Gestión Inteligente de Residuos",
        description:
            "Plataforma para optimizar la gestión de residuos urbanos con tecnología IoT y análisis de datos en tiempo real.",
        images: ["/images/twitter-image.png"],
        creator: "@wastetrack",
    },
    icons: {
        icon: "/images/wastetrack-logo-without-name.png",
        shortcut: "/images/wastetrack-logo.png",
        apple: "/images/wastetrack-logo.png",
    },
    manifest: "/manifest.json",
}