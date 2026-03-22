"use client";

import React from "react";
import { User } from "lucide-react";
import AppHeader from "../AppHeader";

export default function AboutApp() {
  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-zinc-950 text-black dark:text-white h-full overflow-hidden w-full relative">
      <AppHeader title="About" />
      <div className="flex-1 overflow-y-auto w-full pb-8">
        <div className="flex flex-col items-center px-6 mt-8">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center border-4 border-white dark:border-zinc-900 shadow-xl mb-6">
            <User className="w-16 h-16 text-zinc-400" />
          </div>
          <h1 className="text-[28px] font-bold tracking-tight mb-1">Akash Khurana</h1>
          <p className="text-[15px] text-zinc-500 font-medium mb-8">Senior Frontend / Full Stack Engineer</p>

          <div className="bg-zinc-100 dark:bg-[#1c1c1e] rounded-[18px] p-5 shadow-sm w-full leading-[1.4] text-[15px] tracking-[-0.01em] border border-zinc-200/50 dark:border-zinc-800/50">
            Full Stack Engineer with 5+ years owning complex systems end-to-end — from architecting a low-code PaaS platform that powered 10+ client projects with 40% faster delivery, to building production infrastructure for Walt Disney Parks & Resorts at global scale. Deep across the full stack: Angular (Signals, NgRx), Next.js/React 19, Node.js/Express.js, MongoDB, and MySQL.
          </div>

          <div className="mt-6 w-full space-y-4 text-[15px]">
            <div className="bg-zinc-100 dark:bg-[#1c1c1e] rounded-[18px] p-4 flex justify-between items-center border border-zinc-200/50 dark:border-zinc-800/50">
              <span className="font-medium tracking-tight">Location</span>
              <span className="text-zinc-500">Bengaluru, India</span>
            </div>
            <div className="bg-zinc-100 dark:bg-[#1c1c1e] rounded-[18px] p-4 flex justify-between items-center border border-zinc-200/50 dark:border-zinc-800/50">
              <span className="font-medium tracking-tight">Experience</span>
              <span className="text-zinc-500">5+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
