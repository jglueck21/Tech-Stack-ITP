export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <div className="text-center p-10 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <h1 className="text-5xl font-bold text-white mb-4">
                    Hello World 👋
                </h1>

                <p className="text-gray-300 text-lg">
                    Welcome to my Next.js project 🚀
                    Willkommen bei meinem Next.js-Projekt 🚀
                    私のNext.jsプロジェクトへようこそ 🚀
                </p>

                <div className="mt-6 text-sm text-gray-400">
                    Built with Next.js + Tailwind
                </div>
            </div>
        </main>
    )
}