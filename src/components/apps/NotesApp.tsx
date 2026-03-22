"use client";

import React from "react";
import AppHeader from "../AppHeader";
import { Folder, ChevronRight, FileText } from "lucide-react";

export default function NotesApp() {
  const folders = [
    { name: "Frontend Core", count: 8, icon: <Folder className="w-5 h-5 text-yellow-500 fill-yellow-500" /> },
    { name: "Backend Core", count: 5, icon: <Folder className="w-5 h-5 text-yellow-500 fill-yellow-500" /> },
    { name: "Graphics & Mapping", count: 3, icon: <Folder className="w-5 h-5 text-yellow-500 fill-yellow-500" /> },
  ];

  const recentNotes = [
    { title: "Angular & Next.js", preview: "Signals, NgRx, React 19, TypeScript, Tailwind CSS, Framer Motion", date: "10:41 AM" },
    { title: "Node.js Architecture", preview: "Express.js, JWT, REST APIs, Microservices, MongoDB, MySQL", date: "Yesterday" },
    { title: "3D & Geospatial", preview: "Three.js (WebGL), Leaflet (Real-time tracking), D3.js", date: "Tuesday" },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f2f2f7] dark:bg-black text-black dark:text-white h-full overflow-hidden relative">
      <AppHeader title="Skills" />
      
      <div className="flex-1 overflow-y-auto px-4 pb-8">
        <h1 className="text-3xl font-bold mt-4 mb-4">Categories</h1>

        {/* Folders List */}
        <div className="bg-white dark:bg-[#1c1c1e] rounded-xl overflow-hidden mb-6">
          {folders.map((folder, i) => (
            <div 
              key={i} 
              className={`flex items-center justify-between p-3 ${i !== folders.length - 1 ? 'border-b border-zinc-200 dark:border-zinc-800' : ''}`}
            >
              <div className="flex items-center gap-3">
                {folder.icon}
                <span className="font-medium">{folder.name}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <span>{folder.count}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-3 px-1">Recent Notes</h2>
        
        {/* Notes List */}
        <div className="bg-white dark:bg-[#1c1c1e] rounded-xl overflow-hidden mb-6">
          {recentNotes.map((note, i) => (
            <div 
              key={i} 
              className={`flex flex-col p-4 ${i !== recentNotes.length - 1 ? 'border-b border-zinc-200 dark:border-zinc-800' : ''}`}
            >
              <span className="font-bold mb-1">{note.title}</span>
              <div className="flex text-sm text-zinc-500 gap-2">
                <span>{note.date}</span>
                <span className="truncate flex-1">{note.preview}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-12 bg-[#f2f2f7]/90 dark:bg-black/90 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4 z-10 mb-6">
        <div className="text-yellow-500 font-medium text-sm flex gap-1 items-center">
        </div>
        <button className="text-yellow-500 p-2 -mr-2">
          <FileText className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
