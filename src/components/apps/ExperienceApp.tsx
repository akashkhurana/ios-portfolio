"use client";

import React from "react";
import AppHeader from "../AppHeader";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function ExperienceApp() {
  const experiences = [
    {
      role: "Senior Software Developer",
      company: "Reactore",
      date: "Apr 2023 - Present",
      type: "Full-time",
      logo: "bg-blue-600",
      details: [
        "Led design and development of a low-code PaaS platform enabling internal teams to generate full-stack Angular + Node.js applications.",
        "Engineered Three.js 3D mine model rendering as a platform feature, eliminating the need for a dedicated 3D toolchain.",
        "Delivered 90% bundle size reduction via code-splitting, tree-shaking, and lazy loading."
      ]
    },
    {
      role: "Software Developer",
      company: "Capgemini",
      date: "Mar 2021 - 2023",
      type: "Full-time",
      logo: "bg-indigo-500",
      details: [
        "Full-stack features for Walt Disney Parks & Resorts (Angular SPA + Node.js/Express.js APIs + MongoDB/MySQL).",
        "Led multi-major Angular framework upgrade across 3 cross-functional squads in production — zero regressions.",
        "Shipped enterprise SSO (MyID) and i18n across 5+ locales."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Fareportal",
      date: "Jun 2019 - Aug 2019",
      type: "Internship",
      logo: "bg-emerald-500",
      details: [
        "Refactored legacy JavaScript into a modular architecture.",
        "Reduced maintenance overhead by 30% and improved feature delivery velocity."
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f2f2f7] dark:bg-black text-black dark:text-white h-full overflow-hidden relative">
      <AppHeader title="Work Experience" />

      <div className="flex-1 overflow-y-auto px-4 pb-12">
        <h1 className="text-3xl font-bold mt-4 mb-6">Experience</h1>

        <div className="space-y-4 mb-8">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-white dark:bg-[#1c1c1e] rounded-[18px] p-5 shadow-sm border border-zinc-200/50 dark:border-zinc-800/50">
              <div className="flex justify-between items-start mb-1">
                <h2 className="text-[17px] font-bold tracking-tight text-zinc-900 dark:text-white">{exp.role}</h2>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-[12px] font-medium text-zinc-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.date}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-4 h-4 text-blue-500" />
                <h3 className="text-[15px] font-semibold text-zinc-600 dark:text-zinc-400 tracking-[-0.01em]">{exp.company}</h3>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="text-[13px] font-medium text-zinc-500">{exp.type}</span>
              </div>

              {exp.details && (
                <ul className="list-disc list-outside ml-4 text-[14px] text-zinc-600 dark:text-zinc-300 space-y-2 leading-[1.35] tracking-[-0.01em] pr-2">
                  {exp.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
