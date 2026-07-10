"use client";

import { useRef, useState } from "react";

export default function RakitPC() {
  const [isLoading, setIsLoading] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const enterFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="mt-16 min-h-screen bg-linear-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Structures</h1>
          <p className="text-gray-400 text-sm">
            Structures - Unity WebGL 
            <br></br>
            =======================
            <br></br>
            Sebuah game edukasi yang mengajak pemain untuk belajar struktur data linear secara menyenangkan. Dengan grafis menarik dan gameplay interaktif, pemain dapat belajar sambil bersenang-senang. Cocok untuk siswa yang ingin memahami struktur data linear dengan cara yang menyenangkan.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600/20 to-purple-400/20 rounded-lg blur-xl"></div>

          <div className="relative bg-zinc-900 rounded-lg overflow-hidden border border-purple-500/30">
            {isLoading && (
              <div className="h-180 flex items-center justify-center bg-zinc-900/90">
                <div className="text-center">
                  <div className="w-10 h-10 border-2 border-purple-500/30 border-t-purple-400 rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-zinc-500 text-sm">loading game...</p>
                </div>
              </div>
            )}

            <iframe
              ref={iframeRef}
              src="/game/structures/index.html"
              allowFullScreen
              className="w-full h-180 bg-black" 
              style={{ display: isLoading ? "none" : "block" }}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg px-4 py-3 border border-purple-500/30">
            <span className="text-purple-400 text-sm font-medium block mb-1">
              🎮 CONTROL
            </span>
            <span className="text-white text-sm">Gunakan Mouse Pada Komputer / Tekan Layar Pada Handphone</span>
          </div>
          <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg px-4 py-3 border border-purple-500/30">
            <span className="text-purple-400 text-sm font-medium block mb-1">
              🏆 OBJECTIVE
            </span>
            <span className="text-white text-sm">Jelajahi Setiap Petualangan Struktur Data dan Raih Skor Setinggi-tingginya</span>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => {
              setIsLoading(true);
              const iframe = document.querySelector("iframe");
              if (iframe) iframe.src = "/game/structures/index.html";
            }}
            className="px-6 py-2.5 bg-zinc-900/80 hover:bg-zinc-800 text-white text-sm rounded-lg border border-purple-500/30 transition-all duration-200"
          >
            ↻ Restart Game
          </button>

          <button
            onClick={enterFullscreen}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm rounded-lg transition-all duration-200"
          >
            ⛶ Fullscreen
          </button>
        </div>
      </div>
    </div>
  );
}