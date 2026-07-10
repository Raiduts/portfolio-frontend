export default function Navbar() {

  return (
    <nav className="fixed top-0 w-full backdrop-blur z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <a href="/." className="font-bold text-2xl" style=
        {{ 
          color: '#778873'
          }}>
          RIVALDO
        </a>

        <div className="flex gap-6 text-lg text-[#778873]">
          <a href="/.#hero" className="hover:text-[#9D6638]">Home</a>
          <a href="/.#projects" className="hover:text-[#9D6638]">Projects</a>
          <a href="/.#skills" className="hover:text-[#9D6638]">Skills</a>
          <a href="/.#contact" className="hover:text-[#9D6638]">Contact</a>
        </div>
      </div>

    </nav>
  )
}