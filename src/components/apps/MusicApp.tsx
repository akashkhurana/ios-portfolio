"use client";

import React from "react";
import AppHeader from "../AppHeader";

export default function MusicApp() {
  return (
    <div className="flex-1 flex flex-col bg-zinc-900 text-white h-full overflow-hidden">
      <AppHeader title="Music" />
      <div className="flex-1 overflow-y-auto px-4 pb-12">
        <h1 className="text-3xl font-bold mb-6 mt-4">Music</h1>
        <p className="text-zinc-400 mb-6 text-sm">Now Playing</p>
        
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="eager"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
