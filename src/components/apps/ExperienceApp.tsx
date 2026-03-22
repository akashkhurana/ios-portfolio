"use client";

import React from "react";
import AppHeader from "../AppHeader";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function ExperienceApp() {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Tech Giant Inc.",
      date: "Jan 2021 - Present",
      type: "Full-time",
      logo: "bg-blue-500"
    },
    {
      role: "Software Developer",
      company: "Startupify LLC",
      date: "Jun 2018 - Dec 2020",
      type: "Full-time",
      logo: "bg-emerald-500"
    },
    {
      role: "Frontend Intern",
      company: "Web Solutions",
      date: "May 2017 - Aug 2017",
      type: "Internship",
      logo: "bg-purple-500"
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f2f2f7] dark:bg-black text-black dark:text-white h-full overflow-hidden relative">
      <AppHeader title="Work Experience" />

      <div className="flex-1 overflow-y-auto px-4 pb-12">
        <h1 className="text-3xl font-bold mt-4 mb-6">Experience</h1>

        <div className="bg-white dark:bg-[#1c1c1e] rounded-xl overflow-hidden mb-8 border border-zinc-200 dark:border-zinc-800/50">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`flex items-center p-4 ${i !== experiences.length - 1 ? 'border-b border-zinc-200 dark:border-zinc-800' : ''}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 mr-4 ${exp.logo}`}>
                <Briefcase className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[15px] truncate">{exp.role}</h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{exp.company}</p>
                <div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
                  <Calendar className="w-3 h-3" />
                  <span>{exp.date}</span>
                  <span>•</span>
                  <span>{exp.type}</span>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-zinc-400 ml-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
