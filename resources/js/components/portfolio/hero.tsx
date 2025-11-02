import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react"
// import Portrait from '@/../images/professional-developer-portrait-mark-francis-galan.jpg'
export function Hero() {
    // console.log(Portrait)
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl animate-float delay-300" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" />

                {/* Floating geometric shapes */}
                <div className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-blue-500/30 rounded-lg animate-float-slow rotate-12" />
                <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-blue-400/30 rotate-45 animate-float-slow delay-500" />
                <div className="absolute top-1/3 left-1/3 w-16 h-16 border-2 border-blue-300/20 rounded-full animate-float-slow delay-700" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-6 opacity-0 animate-fadeInUp">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Available for opportunities</p>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                                Hi, I'm{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Mark Francis Galan
                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                                A passionate <span className="text-foreground font-semibold">Full-Stack Developer</span> and BSIT
                                graduate, crafting scalable applications that solve real-world problems with elegant code.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fadeInUp delay-200">
                            <Button
                                asChild
                                size="lg"
                                className="gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500"
                            >
                                <a href="#contact">
                                    <Mail className="h-4 w-4" />
                                    Get in Touch
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="gap-2 bg-transparent hover:scale-105 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <a href="https://drive.google.com/file/d/1ndrqh7fKsXt1ZvlzAUhNqas-YWkjXbGU/view?usp=drive_link" download>
                                    <Download className="h-4 w-4" />
                                    Download Resume
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 pt-4 opacity-0 animate-fadeInUp delay-300">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-blue-500 hover:scale-125 transition-all duration-300"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-blue-500 hover:scale-125 transition-all duration-300"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="mailto:mark@example.com"
                                className="text-muted-foreground hover:text-blue-500 hover:scale-125 transition-all duration-300"
                            >
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative opacity-0 animate-fadeInRight delay-400">
                        <div className="relative group">
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-transparent">
                                <img
                                    src="/images/professional-developer-portrait-mark-francis-galan.png"
                                    alt="Mark Francis Galan"
                                    className="w-full h-full object-cover scale-95 group-hover:scale-100 transition-transform duration-500 "
                                />
                                {/* Vignette overlay */}
                                {/*<div className="absolute inset-0 bg-radial-vignette pointer-events-none" />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
