export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Let`s Work Together
        </h2>

        <p className="text-[#778873]/70 mb-10">
          I`m open to remote opportunities in software development,
          including web, apps, and game development.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mx-auto">

          <a 
            href="https://github.com/raiduts"
            className="px-6 py-3 bg-[#DCCFC0]/90 border border-[#A1BC98]/40 rounded-lg transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#A1BC98]/20 text-[#778873]"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rivaldo-sidiq-pradana-398467257/"
            className="px-6 py-3 bg-[#DCCFC0]/90 border border-[#A1BC98]/40 rounded-lg transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#A1BC98]/20 text-[#778873]"
          >
            LinkedIn
          </a>

          <a
            href="mailto:rivaldosidiq1253@gmail.com"
            className="px-6 py-3 bg-[#A1BC98] rounded-lg transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#A1BC98]/20 text-[#FDF6ED]"
          >
            Email Me
          </a>

        </div>

      </div>

    </section>
  )
}