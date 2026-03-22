"use client";

import React from "react";
import AppHeader from "../AppHeader";
import { FolderGit2, Star, GitFork, ArrowUpRight } from "lucide-react";

export default function ProjectsApp() {
  const projects = [
    {
      title: "iOS OS Portfolio",
      description: "A highly interactive, pixel-perfect iOS replication built with Next.js, Framer Motion, and Tailwind CSS. Features an App Switcher, swipe gestures, and simulated native applications.",
      tech: ["Next.js", "React", "Framer Motion", "Tailwind"],
      stars: 124,
      forks: 18,
      color: "bg-blue-500"
    },
    {
      title: "AI Code Assistant",
      description: "VS Code extension that leverages LLMs to provide context-aware code suggestions and refactoring straight from the editor.",
      tech: ["TypeScript", "Node.js", "VS Code API"],
      stars: 89,
      forks: 5,
      color: "bg-purple-500"
    },
    {
      title: "Real-time Chat Protocol",
      description: "Custom lightweight WebSockets overlay protocol built for extreme throughput and low latency in distributed systems.",
      tech: ["Rust", "WebSockets", "Redis"],
      stars: 205,
      forks: 34,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f2f2f7] dark:bg-black text-black dark:text-white h-full overflow-hidden relative">
      <AppHeader title="Projects" />

      <div className="flex-1 overflow-y-auto px-4 pb-12">
        <h1 className="text-3xl font-bold mt-4 mb-6">Open Source</h1>

        <div className="space-y-4 mb-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-5 shadow-sm border border-zinc-200 dark:border-zinc-800/50 relative group cursor-pointer overflow-hidden">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${project.color}`}>
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <h2 className="text-lg font-bold">{project.title}</h2>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-[11px] px-2 py-1 rounded-full font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors">
                  <Star className="w-4 h-4" /> {project.stars}
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-4 h-4" /> {project.forks}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
