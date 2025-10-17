import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "$325",
            description: "Perfect for small projects",
            features: ["Up to 5 pages", "Basic SEO optimization", "Mobile responsive", "1 month support", "Basic analytics"],
            highlighted: false,
        },
        {
            name: "Professional",
            price: "$574",
            description: "For growing businesses",
            features: [
                "Up to 20 pages",
                "Advanced SEO",
                "Mobile & tablet responsive",
                "3 months support",
                "Advanced analytics",
                "E-commerce integration",
                "API integration",
            ],
            highlighted: true,
        },
        {
            name: "Enterprise",
            price: "$945",
            description: "For large-scale projects",
            features: [
                "Unlimited pages",
                "Enterprise SEO",
                "Full responsive design",
                "12 months support",
                "Custom analytics",
                "Advanced e-commerce",
                "Custom integrations",
                "Dedicated account manager",
            ],
            highlighted: false,
        },
    ]

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Affordable <span className="text-primary">Pricing Plans</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the perfect plan for your needs</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl border transition-all duration-300 ${
                                plan.highlighted
                                    ? "border-primary/50 bg-card/80 backdrop-blur shadow-lg shadow-primary/20 scale-105"
                                    : "border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 hover:bg-card/80"
                            }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-muted-foreground mb-6">{plan.description}</p>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>

                                <Button className="w-full mb-8" variant={plan.highlighted ? "default" : "outline"}>
                                    Get Started
                                </Button>

                                <div className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
