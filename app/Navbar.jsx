export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <a href="#hero" className="font-bold text-lg">
          Rivaldo.dev
        </a>

        <div className="flex gap-6 text-sm text-gray-300">
          {/* <button onClick={() => alert("Hello")}>Say Hi</button> */}
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>

    </nav>
  )
}