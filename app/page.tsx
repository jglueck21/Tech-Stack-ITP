"use client"

import { motion } from "framer-motion"

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

            {/* NAVBAR */}
            <motion.header
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-between px-8 py-6 border-b border-white/10"
            >
                <h1 className="text-xl font-bold">MyProject 🚀</h1>

                <nav className="space-x-6 text-sm text-gray-300">
                    <a className="hover:text-white">Home</a>
                    <a className="hover:text-white">Features</a>
                    <a className="hover:text-white">About</a>
                </nav>
            </motion.header>

            {/* HERO */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-24">

                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-bold leading-tight"
                >
                    Build Something <span className="text-blue-400">Amazing</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-6 text-gray-300 max-w-xl text-lg"
                >
                    A modern Next.js landing page with smooth animations and clean design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8 flex gap-4"
                >
                    <button className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
                        Get Started
                    </button>

                    <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
                        Learn More
                    </button>
                </motion.div>

            </section>

            {/* FEATURES */}
            <section className="grid md:grid-cols-3 gap-6 px-8 pb-24 max-w-6xl mx-auto">

                {[
                    {
                        title: "⚡ Fast",
                        desc: "Built on Next.js for ultra-fast performance."
                    },
                    {
                        title: "🎨 Modern UI",
                        desc: "Clean design with Tailwind CSS."
                    },
                    {
                        title: "🚀 Deploy Ready",
                        desc: "Works instantly with Vercel."
                    }
                ].map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                        <p className="text-gray-400">{f.desc}</p>
                    </motion.div>
                ))}

            </section>

            {/* FOOTER */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-gray-500 text-sm pb-10"
            >
                Built with Next.js + Tailwind + Framer Motion 💙
            </motion.footer>

        </div>
    )
}