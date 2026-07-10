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
    <div className="group overflow-hidden rounded-xl border border-[#A1BC98]/30 hover:border-[#778873] transition duration-300 bg-[#DCCFC0]/40 flex flex-col h-full hover:-translate-y-1">

      <div className="relative h-48 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          style={{ willChange: "transform" }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent scale-105"></div>

      </div>

      <div className="p-6 flex flex-col grow">

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-[#778873]/70 text-sm">
          {description}
        </p>

        <div className="mt-auto">
          <p className="mt-4 text-sm text-[#A1BC98]">
            {new Date(created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })}
          </p>

          <div className="mt-4 flex gap-3">
            <button 
            onClick={() => window.location.href = itch_io} 
             className="text-sm px-4 py-2 bg-[#A1BC98] rounded-md hover:bg-[#778873] transition text-[#FDF6ED]">
              Play
            </button>

            {/* <button className="text-sm px-4 py-2 border border-gray-700 rounded-md hover:border-gray-500 transition">
              GitHub
            </button> */}
          </div>
        </div>

      </div>

    </div>
  )
}