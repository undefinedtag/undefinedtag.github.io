"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Send, MessageCircle, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle } from "lucide-react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

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

    const validateForm = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
        if (!formData.message.trim()) newErrors.message = "Message is required"
        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors = validateForm()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsLoading(true)
        setErrors({})

        // TODO: Integrate with Firebase Firestore
        console.log("Form submitted:", formData)

        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: "", email: "", message: "" })
        }, 3000)

        setIsLoading(false)
    }

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-float" />
                <div
                    className="absolute bottom-32 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute top-1/3 left-1/4 w-64 h-64 border border-blue-500/10 rounded-full animate-spin-slow"
                    style={{ animationDuration: "20s" }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center space-y-4 mb-20">
                        <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 backdrop-blur-sm">
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2 justify-center">
                                <MessageCircle className="h-4 w-4" />
                                Let's Connect
                            </p>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Get in Touch</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create
                            something amazing together.
                        </p>
                    </div>

                    <div ref={sectionRef} className={`grid md:grid-cols-3 gap-8 opacity-0 ${isVisible ? "animate-scaleIn" : ""}`}>
                        {/* Contact Information */}
                        <div className="md:col-span-1 space-y-6">
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                                            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm mb-1">Email</h3>
                                            <a
                                                href="mailto:francisgalan21@gmail.com"
                                                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                            >
                                                francisgalan21@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                                            <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm mb-1">Phone</h3>
                                            <a
                                                href="tel:+1234567890"
                                                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                            >
                                                +63 919 641 3263
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                                            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm mb-1">Location</h3>
                                            <p className="text-muted-foreground text-sm">Philippines</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-blue-500/10">
                                <p className="text-sm font-medium mb-4">Follow Me</p>
                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/undefinedtag"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 transition-all duration-300 hover:scale-110"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/mark-francis-galan-3bb21228b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 transition-all duration-300 hover:scale-110"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-2">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 to-blue-400/20 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
                                <Card className="relative p-8 md:p-10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 bg-background border-blue-500/10 group-hover:border-blue-500/30">
                                    {submitted ? (
                                        <div className="text-center py-12 space-y-6 animate-fadeInUp">
                                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto animate-pulse ring-4 ring-blue-500/20">
                                                <CheckCircle className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                                                <p className="text-lg text-muted-foreground">
                                                    Thank you for reaching out. I'll get back to you as soon as possible.
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                                                    <MessageCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                    Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    placeholder="Your name"
                                                    value={formData.name}
                                                    onChange={(e) => {
                                                        setFormData({ ...formData, name: e.target.value })
                                                        if (errors.name) setErrors({ ...errors, name: "" })
                                                    }}
                                                    className={`hover:border-blue-500/50 focus:border-blue-500 transition-colors duration-300 ${errors.name ? "border-red-500" : ""}`}
                                                />
                                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                                                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                    Email
                                                </label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="your.email@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => {
                                                        setFormData({ ...formData, email: e.target.value })
                                                        if (errors.email) setErrors({ ...errors, email: "" })
                                                    }}
                                                    className={`hover:border-blue-500/50 focus:border-blue-500 transition-colors duration-300 ${errors.email ? "border-red-500" : ""}`}
                                                />
                                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                                                    <Send className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                    Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell me about your project or inquiry..."
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={(e) => {
                                                        setFormData({ ...formData, message: e.target.value })
                                                        if (errors.message) setErrors({ ...errors, message: "" })
                                                    }}
                                                    className={`hover:border-blue-500/50 focus:border-blue-500 transition-colors duration-300 resize-none ${errors.message ? "border-red-500" : ""}`}
                                                />
                                                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                disabled={isLoading}
                                                className="w-full gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold"
                                            >
                                                <Send className="h-4 w-4" />
                                                {isLoading ? "Sending..." : "Send Message"}
                                            </Button>
                                        </form>
                                    )}
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
