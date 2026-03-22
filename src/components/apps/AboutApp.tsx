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
          <h1 className="text-3xl font-bold mb-2">Software Developer</h1>
          <p className="text-zinc-500 font-medium mb-8">iOS Portfolio System</p>

          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6 shadow-sm w-full leading-relaxed text-[15px]">
            Software Developer with 5+ years of experience building high-performance applications.
            Specialist in modern web architecture. When I&apos;m not writing code, I&apos;m usually catching
            up on the latest technologies or enjoying some free time.
          </div>

          <div className="mt-6 w-full space-y-4">
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-4 flex justify-between items-center">
              <span className="font-medium">Location</span>
              <span className="text-zinc-500">San Francisco, CA</span>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-4 flex justify-between items-center">
              <span className="font-medium">Experience</span>
              <span className="text-zinc-500">5+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
