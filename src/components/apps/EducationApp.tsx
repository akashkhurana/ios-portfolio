"use client";

import React from "react";
import AppHeader from "../AppHeader";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function EducationApp() {
  const education = [
    {
      degree: "B.Tech — Electronics & Communication Engineering",
      school: "Guru Gobind Singh Indraprastha University (GGSIPU)",
      location: "Delhi, India",
      date: "2016 - 2020",
      details: ["CGPA: 7.55 / 10"],
    },
    {
      degree: "High School (12th)",
      school: "Delhi Public School",
      location: "Faridabad, India",
      date: "2015",
      details: ["Percentage: 68.8%"],
    },
    {
      degree: "Secondary School (10th)",
      school: "Divine Public School",
      location: "Faridabad, India",
      date: "2013",
      details: ["CGPA: 8.8 / 10"],
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f2f2f7] dark:bg-black text-black dark:text-white h-full overflow-hidden relative">
      <AppHeader title="Education" />
      
      <div className="flex-1 overflow-y-auto px-4 pb-12">
        <div className="flex items-center gap-3 mt-4 mb-6 px-1">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold">Education</h1>
        </div>

        <div className="space-y-4 mb-8">
          {education.map((edu, i) => (
            <div key={i} className="bg-white dark:bg-[#1c1c1e] rounded-[18px] p-5 shadow-sm border border-zinc-200 dark:border-zinc-800/50">
              <h2 className="text-[16px] font-bold text-indigo-500 dark:text-indigo-400 mb-0.5 tracking-tight">{edu.degree}</h2>
              <h3 className="text-[15px] font-semibold mb-3 tracking-tight">{edu.school}</h3>
              
              <div className="flex items-center gap-4 text-[13px] font-medium text-zinc-500 mb-4 mt-1">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.date}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </div>
              </div>

              <ul className="list-disc list-outside ml-4 mt-2 text-[14px] text-zinc-600 dark:text-zinc-300 space-y-1.5 leading-[1.35] tracking-[-0.01em]">
                {edu.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
