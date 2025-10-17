import  React from "react"
import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"

import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import "@/../css/app.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins",
})

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-montserrat",
})

export const metadata1: Metadata = {
    title: "Mark Francis Galan - Full-Stack Developer",
    description:
        "Portfolio of Mark Francis Galan, a BSIT graduate and full-stack developer passionate about creating scalable, real-world applications.",
    generator: "v0.app",
}
export const metadata: Metadata = {
    title: "Mark Francis Galan - Full-Stack Developer",
    description:
        "Portfolio of Mark Francis Galan, a BSIT graduate and full-stack developer passionate about creating scalable, real-world applications.",
    generator: "v0.app",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${poppins.variable} ${montserrat.variable}`} suppressHydrationWarning>
        <body className={` font-sans antialiased `}>
        {children}
        {/*<Analytics />*/}
        </body>
        </html>
    )
}
