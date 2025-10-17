"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Code2, Layers } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
    {
        title: "Ride-Hailing App",
        description:
            "A comprehensive ride-hailing platform with real-time driver-passenger tracking, built for seamless urban transportation.",
        tech: ["React Native", "Laravel", "Node.js", "Google Maps API", "Firebase", "Nativewind"],
        image: "/ride-hailing-app-interface.jpg",
        features: ["Real-time GPS tracking", "Payment integration", "Driver-passenger matching", "Route optimization"],
        icon: Zap,
    },
    {
        title: "CulturaLink",
        description:
            "A cultural exchange platform connecting people worldwide through events, discussions, and shared experiences.",
        tech: ["Django", "Vue.js", "MongoDB", "Google Cloud Services", "Tailwind CSS",],
        image: "/cultural-exchange-platform.jpg",
        features: ["User management system", "Event listings", "Real-time Interactions", "Cultural content sharing"],
        icon: Layers,
    },
    {
        title: "PilPal: IoE Project",
        description:
            "An Internet of Everything prototype for real-time health monitoring, integrating IoT sensors with data visualization.",
        tech: ["IoT Sensors", "Firebase", "React Native","Nativewind", "Chart.js", "Arduino"],
        image: "/health-monitoring-dashboard.jpg",
        features: [
            "Real-time sensor data",
            "Wireless data transmission via Internet",
            "Mobile App Integrated",
            "Alert notifications",
        ],
        icon: Code2,
    },
]

export function Projects() {
    const [visibleCards, setVisibleCards] = useState<number[]>([])
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
                        if (index !== -1 && !visibleCards.includes(index)) {
                            setVisibleCards((prev) => [...prev, index])
                        }
                    }
                })
            },
            { threshold: 0.1 },
        )

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [visibleCards])

    return (
        <section id="projects" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float delay-700" />
                <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />

                {/* Animated grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 mb-24 text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide">FEATURED WORK</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight  bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Projects & Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Showcasing my expertise in full-stack development, from mobile applications to IoT solutions. Each project
                            represents innovation and technical excellence.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon
                        return (
                            <div
                                key={index}
                                ref={(el) => {
                                    cardRefs.current[index] = el
                                }}
                                className={`opacity-0 ${visibleCards.includes(index) ? "animate-scaleIn" : ""}`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="group relative h-full">
                                    <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/50 via-blue-500/30 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:blur-lg" />

                                    <Card className="relative overflow-hidden h-full bg-background/80 backdrop-blur-sm border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 hover:-translate-y-3">
                                        {/*<div className="aspect-video overflow-hidden bg-gradient-to-br from-muted to-muted/50 relative">*/}
                                        {/*    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />*/}
                                        {/*    <img*/}
                                        {/*        src={project.image || "/placeholder.svg"}*/}
                                        {/*        alt={project.title}*/}
                                        {/*        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"*/}
                                        {/*    />*/}

                                        {/*    <div className="absolute top-4 right-4 p-3 bg-blue-600/90 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">*/}
                                        {/*        <IconComponent className="h-6 w-6 text-white" />*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                        <div className="p-7 space-y-5">
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                                            <div className="space-y-3 py-2">
                                                <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                                                    Key Features
                                                </p>
                                                <ul className="text-sm text-muted-foreground space-y-2">
                                                    {project.features.map((feature, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-3 group/item hover:text-foreground transition-colors duration-200"
                                                        >
                              <span className="text-blue-500 font-bold mt-0.5 group-hover/item:scale-125 transition-transform">
                                ✓
                              </span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-blue-400/10 text-blue-600 dark:text-blue-300 rounded-lg border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/30 transition-all duration-200 cursor-default"
                                                    >
                            {tech}
                          </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-3 pt-4">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="gap-2 flex-1 bg-transparent hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    <span className="hidden sm:inline">Code</span>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="gap-2 flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    <span className="hidden sm:inline">Demo</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
