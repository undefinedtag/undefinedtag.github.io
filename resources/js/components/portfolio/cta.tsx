import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur p-12 md:p-20 text-center overflow-hidden">
                    <div className="absolute inset-0 -z-10 opacity-20">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Have a <span className="text-primary">Project?</span> Let's Talk!
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Ready to bring your ideas to life? Let's collaborate and create something amazing together.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="gap-2">
                            Get in Touch
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Schedule a Call
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
