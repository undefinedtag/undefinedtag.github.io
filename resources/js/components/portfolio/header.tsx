"use client"

import { useState } from "react"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <span className="font-bold text-lg hidden sm:inline">Portfolio</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#hero" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </a>
                    <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                        Services
                    </a>
                    <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
                        Experience
                    </a>
                    <a href="#roadmap" className="text-sm font-medium hover:text-primary transition-colors">
                        Roadmap
                    </a>
                    <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">
                        Team
                    </a>
                    <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </a>
                </nav>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden border-t border-border/40 bg-background">
                    <nav className="flex flex-col gap-4 p-4">
                        <a href="#hero" className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </a>
                        <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                            Services
                        </a>
                        <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
                            Experience
                        </a>
                        <a href="#roadmap" className="text-sm font-medium hover:text-primary transition-colors">
                            Roadmap
                        </a>
                        <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">
                            Team
                        </a>
                        <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
