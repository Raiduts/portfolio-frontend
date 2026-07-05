"use client";

import { useState } from "react";

export default function FlappyBird() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="mt-16 min-h-screen bg-linear-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-5xl mx-auto">
        
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
              src="/game/letter/index.html"
              width="900"
              height="600"
              className="w-full bg-black"
              style={{ display: isLoading ? "none" : "block" }}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
