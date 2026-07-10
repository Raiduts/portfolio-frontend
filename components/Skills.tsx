export default function Skills() {

  const frontend = ["React", "Next.js", "Vue", "TypeScript", "JavaScript", "HTML", "CSS"]

  const backend = ["Node.js", "ASP .NET", "MySQL", "PostgreSQL"]

  const gamedev = ["Unity", "Unreal Engine", "Godot", "C#", "Visual Scripting", "GDScript", "Game Design"]

  const tools = ["Git", "VS Code", "Figma", "Canva", "Illustrator"]

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-[#DCCFC0] to-[#DCCFC0]">

      <h2 className="text-3xl font-bold text-center mb-12 text-[#293681]">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-10 mx-auto">

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
    <div className="p-6 rounded-xl border border-[#A1BC98]/30 hover:border-[#778873] transition transform hover:-translate-y-1 hover:scale-[1.02] bg-[#A1BC98]">

      <h3 className="text-xl font-semibold mb-4 text-[#293681]">
        {title}
      </h3>

      <ul className="space-y-1 text-[#293681]/70 grid md:grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <li key={index}>
                {skill}
          </li>
        ))}
      </ul>

    </div>
  )
}