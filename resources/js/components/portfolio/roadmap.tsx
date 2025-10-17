import { CheckCircle2 } from "lucide-react"

export function Roadmap() {
    const roadmapItems = [
        {
            number: "01",
            title: "Design & Planning",
            description: "Comprehensive planning and design phase to ensure project success",
        },
        {
            number: "02",
            title: "Development",
            description: "Building robust and scalable solutions with modern technologies",
        },
        {
            number: "03",
            title: "Testing & QA",
            description: "Rigorous testing to ensure quality and reliability",
        },
        {
            number: "04",
            title: "Deployment & Support",
            description: "Seamless deployment and ongoing support for your project",
        },
    ]

    return (
        <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        The <span className="text-primary">Roadmap</span> Of Platform
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our proven process for delivering exceptional results
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {roadmapItems.map((item, index) => (
                        <div key={index} className="relative group">
                            {/* Connector line */}
                            {index < roadmapItems.length - 1 && (
                                <div className="hidden md:block absolute top-20 left-[60%] w-[calc(100%-60%)] h-1 bg-gradient-to-r from-primary/50 to-transparent" />
                            )}

                            <div className="relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-primary-foreground">{item.number}</span>
                                    </div>
                                    <CheckCircle2 className="w-6 h-6 text-primary hidden group-hover:block transition-all" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
