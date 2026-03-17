import { link } from "fs"

/* eslint-disable @next/next/no-img-element */
type Props = {
  title: string
  description: string
  image: string
  itch_io: string
  created_at: string
}

export default function ProjectCard({ title, description, created_at, image, itch_io }: Props) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-1 hover:scale-[1.02] bg-black/40 backdrop-blur flex flex-col h-full">

      {/* IMAGE PREVIEW */}
      <div className="relative h-48 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent scale-105"></div>

      </div>

      {/* CONTENT - flex-grow biar ngisi sisa space */}
      <div className="p-6 flex flex-col grow">

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-gray-400 text-sm">
          {description}
        </p>

        {/* Bagian bawah yang akan selalu di bottom */}
        <div className="mt-auto">
          <p className="mt-4 text-sm text-blue-400">
            {new Date(created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })}
          </p>

          <div className="mt-4 flex gap-3">
            <button 
            onClick={() => window.location.href = itch_io} 
             className="text-sm px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">
              Demo
            </button>

            <button className="text-sm px-4 py-2 border border-gray-700 rounded-md hover:border-gray-500 transition">
              GitHub
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}