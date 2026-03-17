import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Comments from "../components/Comments"

export default async function Home() {
  return (
    <main>
      <Hero/>

      <Projects/>

      <About/>

      <Skills/>

      <Contact/>

      <Comments/>
    </main>
  )
}