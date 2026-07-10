"use client";

import { useState } from "react";

export default function Plane() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="mt-16 min-h-screen bg-linear-to-b from-[#FDF6ED] via-[#778873]/8 to-[#FDF6ED]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#778873] mb-2">Plane Runner</h1>
          <p className="text-[#778873]/70 text-sm">
            Endless runner game • built with Unity
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r from-[#A1BC98]/20 to-[#778873]/20 rounded-lg blur-xl"></div>

          <div className="relative bg-[#778873]/6 rounded-lg overflow-hidden border border-[#A1BC98]/30">
            {isLoading && (
              <div className="h-150 flex items-center justify-center bg-zinc-900/90">
                <div className="text-center">
                  <div className="w-10 h-10 border-2 border-[#A1BC98]/30 border-t-[#A1BC98] rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-[#778873]/60 text-sm">loading game...</p>
                </div>
              </div>
            )}
            <iframe
              src="/game/plane/index.html"
              width="900"
              height="600"
              className="w-full bg-[#FDF6ED]"
              style={{ display: isLoading ? "none" : "block" }}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-[#778873]/8 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#A1BC98]/30">
            <span className="text-[#4274D9] text-sm font-medium block mb-1">
              🎮 CONTROL
            </span>
            <span className="text-[#4274D9] text-sm">Gunakan Arrow Keys / Analog Stick</span>
          </div>
          <div className="bg-[#778873]/8 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#A1BC98]/30">
            <span className="text-[#4274D9] text-sm font-medium block mb-1">
              🏆 OBJECTIVE
            </span>
            <span className="text-[#4274D9] text-sm">Lewati rintangan, raih skor</span>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => {
              setIsLoading(true);
              const iframe = document.querySelector("iframe");
              if (iframe) iframe.src = "/game/plane/index.html";
            }}
            className="px-6 py-2.5 bg-[#778873]/8 hover:bg-[#778873]/10 text-[#4274D9] text-sm rounded-lg border border-[#A1BC98]/30 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
          >
            <span>↻</span> Restart Game
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#778873]/60 text-sm">
            <span className="text-[#A1BC98]/50">✦</span> flappy bird • arcade •
            2025 <span className="text-[#A1BC98]/50">✦</span>
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <span className="text-[#778873]/80 text-xs">React</span>
            <span className="text-[#A1BC98]/30 text-xs">•</span>
            <span className="text-[#778873]/80 text-xs">Unity</span>
            <span className="text-[#A1BC98]/30 text-xs">•</span>
            <span className="text-[#778873]/80 text-xs">Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
}
