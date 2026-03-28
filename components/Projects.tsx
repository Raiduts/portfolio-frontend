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
    title: "Flappy Bird",
    description: "Classic arcade game built with Phaser. Navigate the bird through pipes and aim for a high score!",
    itch_io: "/flappy",
    created_at: "2024-06-01",
    image: "/game/flappy/thumbnail.png"
  },
  {
    title: "Plane Runner",
    description: "Endless runner game built with Unity WebGL. Dodge obstacles and survive as long as possible!",
    itch_io: "/plane",
    created_at: "2026-03-28",
    image: "/game/plane/thumbnail.png"
  }
];
  return (
    <section id="projects" className="py-24 px-6 bg-linear-to-b from-transparent via-purple-950/20 to-transparent">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      {
      loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-10 h-10 border-2 border-purple-500/30 border-t-purple-400 rounded-full animate-spin"></div>
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