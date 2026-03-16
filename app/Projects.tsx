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

  useEffect(() => {
    async function fetchProjects() {
      const data = await GetAllProject()
      setProjects(data)
    }
    fetchProjects()
  }, []);

  return (
    <section id="projects" className="py-24 px-6">

      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 w-300 max-w-5xl mx-auto">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            itch_io={project.itch_io}
            created_at={project.created_at}
            image={project.image}
          />
        ))}

      </div>

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