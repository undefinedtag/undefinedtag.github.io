"use client"

import { Calendar, MapPin, Sparkles, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
    {
        role: "Junior Software Developer",
        company: "MK INTERNATIONAL TRAVEL CARE INC.",
        period: "January 20 - July 20 2025",
        location: "On-site",
        description: "Contributing to innovative ride-hailing solutions and mobile applications.",
        achievements: [
            "Developed and maintained the Ride-Hailing App using React Native and Laravel",
            "Implemented API integrations with Google Maps and Firebase for real-time tracking",
            "Conducted feature testing and bug fixes to improve app stability",
            "Collaborated with the team to deliver features on schedule",
        ],
    },
    {
        role: "Web Developer Intern",
        company: "KONSULTAMD - HEALTHNOW INC - AIDE.",
        period: "August 12 - December 12 2025",
        location: "On-site",
        description: "Intensive training in modern web development technologies and best practices.",
        achievements: [
            "Built CRUD systems and internal tools using Laravel, React, and MySQL",
            "Implemented role-based authentication and authorization systems",

        ],
    },
]

const technologies = [
    {
        name: "C#",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CS.svg",
    },
    {
        name: "CSS",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg",
    },
    {
        name: "Django",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Django.svg",
    },
    {
        name: "Figma",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Figma-Dark.svg",
    },
    {
        name: "Git",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Git.svg",
    },
    {
        name: "HTML",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg",
    },
    {
        name: "Java",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Java-Dark.svg",
    },
    {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg",
    },
    {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg",
    },
    {
        name: "MySQL",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MySQL-Dark.svg",
    },
    {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg",
    },
    {
        name: "Python",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Python-Dark.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg",
    },
    {
        name: "Vue.js",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/VueJS-Dark.svg",
    },
    {
        name: "React",
        icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg",
    },
    {
        name: "Laravel",
        icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/laravel/laravel-original.svg",
    },
]

export function ExperienceTechStack() {
    const [visibleItems, setVisibleItems] = useState<number[]>([])
    const [visibleTechs, setVisibleTechs] = useState<number[]>([])
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])
    const techRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
                    if (index !== -1 && entry.isIntersecting && !visibleItems.includes(index)) {
                        setVisibleItems((prev) => [...prev, index])
                    }
                })
            },
            { threshold: 0.1 },
        )

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [visibleItems])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = techRefs.current.indexOf(entry.target as HTMLDivElement)
                    if (index !== -1 && entry.isIntersecting && !visibleTechs.includes(index)) {
                        setVisibleTechs((prev) => [...prev, index])
                    }
                })
            },
            { threshold: 0.1 },
        )

        techRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [visibleTechs])

    return (
        <section
            id="experience"
            className="py-10 relative overflow-hidden bg-background"
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float delay-700" />
                <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />

                {/* Animated grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="space-y-4 mb-20 text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 mb-4 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
                        <p className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-cyan-400" />
                            Experience & Skills
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                        My Journey &{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Expertise
            </span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Center divider line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent transform -translate-x-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column - Experience with parallax slide-in from left */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Professional Experience</h3>
                            <div className="space-y-8">
                                {experiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        ref={(el) => {
                                            itemRefs.current[index] = el
                                        }}
                                        className={`transition-all duration-700 ${
                                            visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                                        }`}
                                        style={{ transitionDelay: `${index * 150}ms` }}
                                    >
                                        <div className="group relative">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-lg"></div>

                                            <div className="relative space-y-4 p-6 rounded-xl bg-slate-100/50 dark:bg-slate-800/40 backdrop-blur-xl border border-blue-200/30 dark:border-blue-500/20 group-hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                                                <div className="space-y-2">
                                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                                                        {exp.role}
                                                    </h4>
                                                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
                                                    <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                            <span className="flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200">
                              <Calendar className="h-4 w-4" />
                                {exp.period}
                            </span>
                                                        <span className="flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200">
                              <MapPin className="h-4 w-4" />
                                                            {exp.location}
                            </span>
                                                    </div>
                                                </div>

                                                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{exp.description}</p>

                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-200 transition-colors duration-200 group/item text-sm"
                                                        >
                                                            <ArrowRight className="h-3 w-3 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-200" />
                                                            <span className="leading-relaxed">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Tech Stack with parallax slide-in from right */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Languages & Tools</h3>
                            <div className="sticky top-32">
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">Technologies I've worked with</p>
                                <ul className="grid grid-cols-4 sm:grid-cols-5 gap-y-10">
                                    {technologies.map((tech, index) => (
                                        <li
                                            key={index}
                                            ref={(el:any) => {
                                                techRefs.current[index] = el
                                            }}
                                            className={`group relative flex items-center justify-center transition-all duration-700 ${
                                                visibleTechs.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                                            }`}
                                            style={{ transitionDelay: `${index * 80}ms` }}
                                        >
                                            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-110 hover:-translate-y-1 group">
                                                <img
                                                    src={tech.icon || "/placeholder.svg"}
                                                    alt={tech.name}
                                                    width={64}
                                                    height={64}
                                                    className="z-40 w-10 h-10 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-125"
                                                />
                                                <div className="z-50 absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-300/50 dark:border-slate-700/50">
                                                    {tech.name}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
