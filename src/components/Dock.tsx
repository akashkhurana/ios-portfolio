"use client";

import React from "react";
import { Github, Linkedin, Book, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Dock() {
  const dockItems: { icon: string | React.ElementType, link: string, color: string }[] = [
    { icon: Github, link: "https://github.com/akashkhurana", color: "bg-gradient-to-b from-zinc-700 to-zinc-900" },
    { icon: Linkedin, link: "https://linkedin.com/in/akash-khurana", color: "bg-gradient-to-b from-blue-500 to-blue-700" },
    { icon: Book, link: "https://blog.example.com", color: "bg-gradient-to-b from-orange-400 to-orange-600" },
    { icon: Code, link: "https://leetcode.com", color: "bg-gradient-to-b from-amber-500 to-yellow-600 outline outline-1 outline-white/10" },
  ];

  return (
    <div className="absolute bottom-4 left-4 right-4 h-20 rounded-[2rem] bg-white/20 dark:bg-black/40 backdrop-blur-md flex justify-around items-center px-4 z-20">
      {dockItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          {/* App Icon Bubble */}
          <motion.div
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={typeof item.icon !== "string" ? { borderRadius: 12, WebkitBorderCurve: "continuous" } as any : {}}
            className={`w-12 h-12 flex items-center justify-center text-white relative group/dockitem ${
              typeof item.icon === "string"
                ? "bg-transparent drop-shadow-xl"
                : `overflow-hidden drop-shadow-xl ${item.color}`
            }`}
          >
            {typeof item.icon === "string" ? (
              <img src={item.icon} alt="Dock Icon" className="w-full h-full object-contain z-10 pointer-events-none" />
            ) : (
              <>
                {/* Inner bezel highlight */}
                <div className="absolute inset-0 rounded-[12px] border border-white/20 pointer-events-none" style={{ WebkitBorderCurve: "continuous" } as any} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/dockitem:opacity-100 transition-opacity pointer-events-none" />
                <item.icon className="w-6 h-6 stroke-[1.5] drop-shadow z-10 pointer-events-none" />
              </>
            )}
          </motion.div>
        </a>
      ))}
    </div>
  );
}
