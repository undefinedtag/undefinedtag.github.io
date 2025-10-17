export function Blog() {
    const posts = [
        {
            title: "Working Hard To Keep Pace With Very High Demand",
            description: "Insights on managing high-demand projects and maintaining quality standards.",
            image: "/blog-work.jpg",
            category: "Business",
        },
        {
            title: "Block Friday: Bitcoin the Biggest Deal on Luxury",
            description: "Exploring the intersection of cryptocurrency and luxury markets.",
            image: "/bitcoin-crypto.jpg",
            category: "Crypto",
        },
        {
            title: "Introducing Our Features & New Payment Methods",
            description: "Announcing exciting new features and payment options for our platform.",
            image: "/payment-features.jpg",
            category: "Product",
        },
    ]

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Checkout Our Latest <span className="text-primary">Blog</span> & Insights
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Stay updated with our latest articles and insights
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="group relative rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                                    {post.category}
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-sm text-muted-foreground">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
