"use client"

import ProjectCard from "../components/ProjectCard"
import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  itch_io: string;
  created_at: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true)
      const data = await GetAllProject()
      setProjects(data)
      setLoading(false)
    }
    fetchProjects()
  }, []);

  const featuredProjects = [
  {
    title: "Flappy Bird - Phaser",
    description: "Classic arcade game built with Phaser. Navigate the bird through pipes and aim for a high score!",
    itch_io: "/flappy",
    created_at: "2024-06-01",
    image: "/game/flappy/thumbnail.png"
  },
  {
    title: "Plane Runner - Unity WebGL",
    description: "Endless runner game built with Unity WebGL. Dodge obstacles and survive as long as possible!",
    itch_io: "/plane",
    created_at: "2026-03-28",
    image: "/game/plane/thumbnail.png"
  },
  {
    title: "Rakit PC - Unity WebGL",
    description: "Sebuah game edukasi yang mengajak pemain untuk merakit komputer sesuai petunjuk. Dengan grafis menarik dan gameplay interaktif, pemain dapat belajar tentang komponen PC sambil bersenang-senang.",
    itch_io: "/rakit",
    created_at: "2026-03-28",
    image: "/game/rakit/thumbnail.png"
  },
  {
    title: "Structure - Unity WebGL",
    description: "Sebuah game edukasi yang mengajak pemain untuk merakit komputer sesuai petunjuk. Dengan grafis menarik dan gameplay interaktif, pemain dapat belajar tentang komponen PC sambil bersenang-senang.",
    itch_io: "/structure",
    created_at: "2026-03-28",
    image: "/game/structures/thumbnail.png"
  }
];
  return (
    <section id="projects" className="py-24 px-6 bg-linear-to-b from-transparent via-[#778873]/15 to-transparent">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      {
      loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-10 h-10 border-2 border-[#A1BC98]/30 border-t-[#A1BC98] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-10 mx-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}

          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )
      }
      
    </section>
  )
}

export async function GetAllProject() : Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching projects:", error)
    return []
  }

  return data as Project[]
}