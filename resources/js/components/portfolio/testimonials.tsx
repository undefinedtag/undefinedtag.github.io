import { Star } from "lucide-react"

export function Testimonials() {
    const testimonials = [
        {
            name: "John Smith",
            role: "CEO, Tech Startup",
            content: "Exceptional work and attention to detail. Highly recommended!",
            rating: 5,
            image: "/professional-man.png",
        },
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            content: "Great communication and delivered exactly what we needed.",
            rating: 5,
            image: "/professional-woman.png",
        },
        {
            name: "Michael Chen",
            role: "Founder, Digital Agency",
            content: "Professional, reliable, and always goes the extra mile.",
            rating: 5,
            image: "/thoughtful-asian-man.png",
        },
    ]

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Client's Satisfactory <span className="text-primary">Reviews</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">What our clients say about working with us</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
