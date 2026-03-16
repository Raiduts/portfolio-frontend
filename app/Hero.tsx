export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl" />
      <h1 className="text-5xl md:text-6xl font-bold">Rivaldo Sidiq</h1>

      <h2 className="mt-4 text-xl md:text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text font-semibold">
        Fast Learner Software Developer
      </h2>

      <p className="mt-6 max-w-xl text-gray-400">
        Building interactive software across web, apps, and games.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
          View Projects
        </button>

        <button className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 transition">
          Contact Me
        </button>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        React • Next.js • TypeScript • Unity • C#
      </div>
    </section>
  );
}
