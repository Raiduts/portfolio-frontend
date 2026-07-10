"use client"

export default function Hero() {
  return (
    <section>
      <section id="hero" className="relative min-h-[60vh] flex flex-col justify-center px-32 bg-[#DCCFC0]">
        <h1 className="text-5xl md:text-2xl text-[#778873]">
          Rivaldo Sidiq Pradana
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl bg-gradient-to-r from-[#778873] via-[#778873] to-[#A1BC98] text-transparent bg-clip-text font-semibold">
          Software Developer
        </h2>

        <p className="mt-6 max-w-xl text-[#778873]/90">
        I am a software developer who started my journey in game development using Unity and Unreal Engine. Over time I became interested in building interactive applications across different platforms including web, apps, and games.
        I enjoy solving problems, learning new technologies quickly, and creating software that combines logic, creativity, and user experience.
        </p>

        <div className="mt-8 flex gap-4">
          <button onClick={() => window.location.href = "#projects"} className="px-6 py-3 rounded-lg bg-[#778873] hover:to-[#5f7a6d] hover:shadow-lg hover:scale-105 transition text-[#FDF6ED]">
            View Projects
          </button>

          <button onClick={() => window.location.href = "#contact"} className="px-6 py-3 rounded-lg border border-[#293681] hover:bg-[#293681] hover:text-[#FDF6ED] hover:shadow-lg hover:scale-105 transition text-[#293681]">
            Contact Me
          </button>
        </div>
      </section>
         <div className="h-24 w-full bg-[#A1BC98] bg-[url('/cat.svg')] bg-repeat-x bg-contain bg-center" />
     </section>
  );
}
