"use client"

export function Stats() {
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

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 dark:from-slate-950 dark:to-slate-900/50">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                        Languages and Tools
                    </h2>
                    <p className="text-muted-foreground text-lg">Technologies I've worked with</p>
                </div>

                <div className="flex justify-start items-center">
                    <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
                        {technologies.map((tech, index) => (
                            <li
                                key={index}
                                className="group relative flex items-center justify-center"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out forwards`,
                                    animationDelay: `${index * 0.08}s`,
                                    opacity: 0,
                                }}
                            >
                                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg bg-card/50 dark:bg-slate-800/50 border border-border/50 dark:border-slate-700/50 hover:border-primary/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-cyan-500/20 hover:scale-110 hover:-translate-y-1 group">
                                    <img
                                        src={tech.icon || "/placeholder.svg"}
                                        alt={tech.name}
                                        width={64}
                                        height={64}
                                        className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-125"
                                    />
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-auto">
                                        {tech.name}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    )
}
