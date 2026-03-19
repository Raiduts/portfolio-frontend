export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Let`s Work Together
        </h2>

        <p className="text-gray-400 mb-10">
          I`m open to remote opportunities in software development,
          including web, apps, and game development.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mx-auto">

          <a 
            href="https://github.com/raiduts"
            className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rivaldo-sidiq-pradana-398467257/"
            className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
          >
            LinkedIn
          </a>

          <a
            href="mailto:rivaldosidiq1253@gmail.com"
            className="px-6 py-3 bg-blue-600 rounded-lg transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
          >
            Email Me
          </a>

        </div>

      </div>

    </section>
  )
}