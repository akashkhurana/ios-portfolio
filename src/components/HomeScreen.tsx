"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOS } from "./OSProvider";
import Dock from "./Dock";
import { CalendarWidget, WeatherWidget } from "./Widgets";
import { 
  Mail, Music, BookOpen, GraduationCap, 
  FileText, Briefcase, Code2, Sparkles
} from "lucide-react";

export type AppMeta = {
  id: string;
  name: string;
  icon: string | React.ElementType;
  color: string;
  badge?: string;
};

export const APPS: AppMeta[] = [
  { id: "mail", name: "Mail", icon: Mail, color: "bg-gradient-to-b from-blue-400 to-blue-600" },
  { id: "music", name: "Music", icon: Music, color: "bg-gradient-to-b from-rose-400 to-rose-600" },
  { id: "notes", name: "Notes", icon: BookOpen, color: "bg-gradient-to-b from-yellow-300 to-yellow-500 text-yellow-900" },
  { id: "education", name: "Education", icon: GraduationCap, color: "bg-gradient-to-b from-indigo-400 to-indigo-600" },
  { id: "resume", name: "Resume", icon: FileText, color: "bg-gradient-to-b from-sky-400 to-blue-500" },
  { id: "experience", name: "Experience", icon: Briefcase, color: "bg-gradient-to-b from-orange-400 to-orange-600", badge: "5" },
  { id: "projects", name: "Projects", icon: Code2, color: "bg-gradient-to-b from-purple-500 to-indigo-700" },
  { id: "about", name: "About Me", icon: Sparkles, color: "bg-gradient-to-b from-zinc-700 to-black" },
];

export default function HomeScreen() {
  const { isUnlocked, setActiveApp, openApps, setOpenApps } = useOS();

  if (!isUnlocked) return null;

  return (
    <div className="absolute inset-0 pt-16 px-6 z-10">
      <div className="grid grid-cols-4 gap-y-6 gap-x-4">
        {/* iOS Widgets */}
        <CalendarWidget />
        <WeatherWidget />

        {/* Regular App Icons */}
        {APPS.map((app) => (
          <div key={app.id} className="flex flex-col items-center gap-1 relative">
            {/* Notification Badge */}
            {app.badge && (
              <div className="absolute -top-1.5 -right-1.5 z-50 bg-red-500 text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-[0_2px_4px_rgba(239,68,68,0.5)] border-[1.5px] border-black/10">
                {app.badge}
              </div>
            )}
            
            <motion.button
              layoutId={app.id}
              onClick={() => {
                setActiveApp(app.id);
                if (!openApps.includes(app.id)) {
                  setOpenApps([...openApps, app.id]);
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85, opacity: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`w-14 h-14 flex items-center justify-center text-white relative group/icon ${
                typeof app.icon === "string"
                  ? "bg-transparent drop-shadow-xl"
                  : `squircle overflow-hidden drop-shadow-xl ${app.color}`
              }`}
            >
              {typeof app.icon === "string" ? (
                <img src={app.icon} alt={app.name} className="w-full h-full object-contain z-10 pointer-events-none" />
              ) : (
                <>
                  {/* Inner bezel highlight for modern iOS glass/3D effect */}
                  <div className="absolute inset-0 squircle border border-white/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none" />
                  <app.icon className="w-7 h-7 stroke-[1.5] drop-shadow-md z-10 pointer-events-none" />
                </>
              )}
            </motion.button>
            <span className="text-[11px] text-white font-medium drop-shadow-md tracking-wide mt-0.5">
              {app.name}
            </span>
          </div>
        ))}
      </div>

      <Dock />
    </div>
  );
}
