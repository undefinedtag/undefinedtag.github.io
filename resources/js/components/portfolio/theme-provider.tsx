"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    useEffect(() => {
        setMounted(true)
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
        setTheme(initialTheme)
        document.documentElement.classList.toggle("dark", initialTheme === "dark")
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    if (!mounted) return <>{children}</>

    return (
        <>
            {children}
            <button
                onClick={toggleTheme}
                className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
                aria-label="Toggle theme"
            >
                {theme === "dark" ? "☀️" : "🌙"}
            </button>
        </>
    )
}
