import { Github, Linkedin, Twitter } from "lucide-react"

export function Team() {
    const teamMembers = [
        {
            name: "Mark Francis Galan",
            role: "Full-Stack Developer",
            image: "/professional-developer.png",
            socials: [
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
            ],
        },
        {
            name: "Sarah Johnson",
            role: "UI/UX Designer",
            image: "/stylish-woman.png",
            socials: [
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
            ],
        },
        {
            name: "Alex Chen",
            role: "DevOps Engineer",
            image: "/engineer-man.png",
            socials: [
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
            ],
        },
        {
            name: "Emma Wilson",
            role: "Product Manager",
            image: "/manager-woman.jpg",
            socials: [
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
            ],
        },
    ]

    return (
        <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Best <span className="text-primary">Qualified</span> Team Member
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Meet the talented professionals behind our success
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>

                                <div className="flex items-center gap-3">
                                    {member.socials.map((social, i) => {
                                        const Icon = social.icon
                                        return (
                                            <a
                                                key={i}
                                                href={social.href}
                                                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                            >
                                                <Icon className="w-4 h-4" />
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
