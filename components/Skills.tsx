export default function Skills() {

  const frontend = ["React", "Next.js", "Vue", "TypeScript", "JavaScript", "HTML", "CSS"]

  const backend = ["Node.js", "ASP .NET", "MySQL", "PostgreSQL"]

  const gamedev = ["Unity", "Unreal Engine", "Godot", "C#", "Visual Scripting", "GDScript", "Game Design"]

  const tools = ["Git", "VS Code", "Figma", "Canva", "Illustrator"]

  return (
    <section id="skills" className="py-24 px-6 bg-linear-to-b from-transparent via-purple-950/20 to-transparent">

      <h2 className="text-3xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">

        <SkillColumn title="Frontend" skills={frontend} />

        <SkillColumn title="Backend" skills={backend} />

        <SkillColumn title="Game Development" skills={gamedev} />

        <SkillColumn title="Tools" skills={tools} />

      </div>

    </section>
  )
}


type SkillColumnProps = {
  title: string
  skills: string[]
}

function SkillColumn({ title, skills }: SkillColumnProps) {
  return (
    <div className="p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-1 hover:scale-[1.02] bg-black/40 backdrop-blur">

      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>

      <ul className="space-y-1 text-gray-400 grid md:grid-cols-2">
        {skills.map((skill, index) => (
          <li key={index}>
                {skill}
          </li>
        ))}
      </ul>

    </div>
  )
}