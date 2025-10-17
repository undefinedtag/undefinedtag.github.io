"use client"

import { Award, Calendar, MapPin, Sparkles, GraduationCap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Education() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="education" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl animate-pulse-glow delay-700" />
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-300/5 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-4 mb-24 text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Academic Journey</p>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Education</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Building expertise through rigorous academic training and prestigious scholarships
                    </p>
                </div>

                <div ref={sectionRef} className="max-w-4xl mx-auto">
                    {/* Timeline line */}

                    <div className="space-y-12 md:space-y-16">
                        {/* Degree Card */}
                        <div
                            className={`group relative transition-all duration-700 ${
                                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                            }`}
                        >
                            <div className="md:flex md:gap-8 md:items-center">
                                {/* Timeline dot */}
                                <div className="hidden md:flex md:flex-col md:items-center md:w-20">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-background shadow-lg shadow-blue-500/50 relative z-10" />
                                </div>

                                {/* Card */}
                                <div className="flex-1">
                                    <div className="relative group/card">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition duration-500" />
                                        <div className="relative bg-background border border-blue-500/20 rounded-2xl p-8 md:p-10 hover:border-blue-500/40 transition-all duration-500">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                        <img
                                                            src="/images/sdcaLogo.png"
                                                            alt="SDCA Logo"
                                                            className="size-14  rounded-full border-2 border-blue-500/30 shadow-lg shadow-blue-500/20 -rotate-12 hover:rotate-0 transition-transform duration-300"
                                                        />

                                                    <div>
                                                        <h3 className="text-2xl md:text-3xl font-bold">
                                                            Bachelor of Science in Information Technology
                                                        </h3>
                                                        <div className="flex items-center gap-3 mt-2">
                                                            <p className="text-blue-600 dark:text-blue-400 font-semibold">
                                                                St. Dominic College of Asia
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 whitespace-nowrap">
                          2021 - July 2025
                        </span>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                                                <div className="space-y-4">
                                                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                                        <Award className="h-4 w-4 text-blue-500" />
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        <li className="flex items-start gap-3 text-sm group/item">
                                                            <span className="text-blue-500 font-bold mt-0.5">✓</span>
                                                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                                Capstone: CulturaLink platform with Django, Vue.js, MongoDB (Best Capstone Project)
                              </span>
                                                        </li>
                                                        <li className="flex items-start gap-3 text-sm group/item">
                                                            <span className="text-blue-500 font-bold mt-0.5">✓</span>
                                                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                                IoT Research presentation at international conference
                              </span>
                                                        </li>

                                                    </ul>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                                        <MapPin className="h-4 w-4 text-blue-500" />
                                                        Details
                                                    </h4>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3 text-sm">
                                                            <Calendar className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                                            <span className="text-muted-foreground">4 Years Full-Time</span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-sm">
                                                            <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                                            <span className="text-muted-foreground">Philippines</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scholarship Card */}
                        <div
                            className={`group relative transition-all duration-700 ${
                                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                            }`}
                            style={{ transitionDelay: "0.2s" }}
                        >
                            <div className="md:flex md:gap-8 md:items-center md:flex-row-reverse">
                                {/* Timeline dot */}
                                <div className="hidden md:flex md:flex-col md:items-center md:w-20">
                                    <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-background shadow-lg shadow-amber-500/50 relative z-10" />
                                </div>

                                {/* Card */}
                                <div className="flex-1">
                                    <div className="relative group/card">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-400 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition duration-500" />
                                        <div className="relative bg-background border border-amber-500/20 rounded-2xl p-8 md:p-10 hover:border-amber-500/40 transition-all duration-500">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className=" rounded-xl bg-amber-500/10">
                                                        <img
                                                            src="/images/DBP-Logo-512.png"
                                                            alt="SDCA Logo"
                                                            className="size-14 border-2 border-blue-500/30 shadow-lg shadow-blue-500/20 "
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl md:text-3xl font-bold">DBP Rise Scholar</h3>
                                                        <p className="text-amber-600 dark:text-amber-400 font-semibold mt-1">
                                                            Development Bank of The Philippines
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 whitespace-nowrap">
                          2022 - July 2025
                        </span>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                                                <div className="space-y-4">
                                                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                                        <Sparkles className="h-4 w-4 text-amber-500" />
                                                        Scholarship Benefits
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        <li className="flex items-start gap-3 text-sm group/item">
                                                            <span className="text-amber-500 font-bold mt-0.5">★</span>
                                                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                                 Tuition and educational support
                              </span>
                                                        </li>


                                                    </ul>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                                        <Award className="h-4 w-4 text-amber-500" />
                                                        Recognition
                                                    </h4>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3 text-sm">
                                                            <Sparkles className="h-4 w-4 text-amber-500 flex-shrink-0" />
                                                            <span className="text-muted-foreground">Dean's Lister</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
