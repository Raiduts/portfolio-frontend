import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import Comments from "./Comments"

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