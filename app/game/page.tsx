"use client";

import { useState } from "react";

export default function Game() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="mt-16 min-h-screen bg-linear-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Flappy Bird</h1>
          <p className="text-gray-400 text-sm">
            Classic arcade game • built with Phaser
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600/20 to-purple-400/20 rounded-lg blur-xl"></div>

          <div className="relative bg-zinc-900 rounded-lg overflow-hidden border border-purple-500/30">
            {isLoading && (
              <div className="h-150 flex items-center justify-center bg-zinc-900/90">
                <div className="text-center">
                  <div className="w-10 h-10 border-2 border-purple-500/30 border-t-purple-400 rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-zinc-500 text-sm">loading game...</p>
                </div>
              </div>
            )}

            <iframe
              src="/game/flappy/index.html"
              width="100%"
              height="600"
              className="w-full bg-black"
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
            <span className="text-white text-sm">Tekan Spasi / Klik</span>
          </div>
          <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg px-4 py-3 border border-purple-500/30">
            <span className="text-purple-400 text-sm font-medium block mb-1">
              🏆 OBJECTIVE
            </span>
            <span className="text-white text-sm">Lewati pipa, raih skor</span>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => {
              setIsLoading(true);
              const iframe = document.querySelector("iframe");
              if (iframe) iframe.src = "/game/flappy/index.html";
            }}
            className="px-6 py-2.5 bg-zinc-900/80 hover:bg-zinc-800 text-white text-sm rounded-lg border border-purple-500/30 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
          >
            <span>↻</span> Restart Game
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-700 text-sm">
            <span className="text-purple-400/50">✦</span> flappy bird • arcade •
            2025 <span className="text-purple-400/50">✦</span>
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <span className="text-zinc-800 text-xs">React</span>
            <span className="text-purple-400/30 text-xs">•</span>
            <span className="text-zinc-800 text-xs">Phaser</span>
            <span className="text-purple-400/30 text-xs">•</span>
            <span className="text-zinc-800 text-xs">Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
}
