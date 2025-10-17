import { Head, Link } from "@inertiajs/react"

export default function Welcome() {
    return (
        <>
            <Head title="Mark Francis Galan - Full Stack Developer">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800" rel="stylesheet" />
            </Head>

            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/10" />
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-600/10" />
                </div>

                {/* Main content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
                                    Hi. <span className="text-blue-600 dark:text-blue-400">I'm Mark.</span> I build amazing web
                                    applications.
                                </h1>
                                <p className="text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
                                    I am a full-stack developer passionate about creating innovative solutions. From ride-hailing
                                    platforms to cultural exchange apps, I bring ideas to life with code.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Link
                                    href="/portfolio"
                                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 dark:bg-blue-500 dark:shadow-blue-500/30 dark:hover:bg-blue-600 dark:hover:shadow-blue-500/40"
                                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:scale-110">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                                    <span>View My Portfolio</span>
                                </Link>

                                <a
                                    href="/portfolio#contact"
                                    className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-700"
                                >
                                    Get In Touch
                                </a>
                            </div>

                            {/* Quick stats */}
                            <div className="flex flex-wrap gap-8 pt-4">
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold text-slate-900 dark:text-white">3+</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold text-slate-900 dark:text-white">1</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold text-slate-900 dark:text-white">10+</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
                                </div>
                            </div>
                        </div>

                        {/* Right content - Image */}
                        <div className="relative">
                            <div className="relative aspect-square overflow-hidden rounded-3xl ">
                                <img
                                    src="/images/professional-developer-portrait-mark-francis-galan1.png"
                                    alt="Mark Francis Galan"
                                    className="h-full w-full object-cover "
                                />
                                <div className="absolute inset-0 " />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-900 dark:text-white">Available for Work</div>
                                        <div className="text-xs text-slate-600 dark:text-slate-400">Open to opportunities</div>
                                    </div>
                                </div>
                            </div>

                            {/* Tech stack badges */}
                            <div className="absolute -right-6 top-1/4 space-y-3">
                                <div className="rounded-xl bg-white px-4 py-2 shadow-lg dark:bg-slate-800">
                                    <span className="text-sm font-semibold text-slate-900 dark:text-white">React</span>
                                </div>
                                <div className="rounded-xl bg-white px-4 py-2 shadow-lg dark:bg-slate-800">
                                    <span className="text-sm font-semibold text-slate-900 dark:text-white">Laravel</span>
                                </div>
                                <div className="rounded-xl bg-white px-4 py-2 shadow-lg dark:bg-slate-800">
                                    <span className="text-sm font-semibold text-slate-900 dark:text-white">Node.js</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg
                        className="h-6 w-6 text-slate-400 dark:text-slate-600"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </>
    )
}
