import { Code2, Zap, Shield } from "lucide-react"

export function Services() {
    const services = [
        {
            title: "Web Development",
            description: "Building scalable, responsive web applications with modern technologies and best practices.",
            icon: Code2,
        },
        {
            title: "Performance Optimization",
            description: "Optimizing applications for speed, efficiency, and seamless user experiences.",
            icon: Zap,
        },
        {
            title: "Security & Compliance",
            description: "Implementing robust security measures and ensuring compliance with industry standards.",
            icon: Shield,
        },
    ]

    return (
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Explore <span className="text-primary">Services</span> & Products
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                            >
                                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                    {service.description}
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 mt-4 text-primary hover:gap-3 transition-all">
                                    Learn more <span>→</span>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
