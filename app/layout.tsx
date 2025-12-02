import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SegmentProvider } from "@/contexts/segment-context"
import { baseMetadata } from "@/lib/metadata"

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" suppressHydrationWarning className={inter.variable}>
        <body className={inter.className}>
        <SegmentProvider>
            {children}
        </SegmentProvider>
        </body>
        </html>
    )
}