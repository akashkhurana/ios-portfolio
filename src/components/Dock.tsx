"use client";

import React from "react";
import { Github, Linkedin, Phone, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Dock() {
  const dockItems: { icon: string | React.ElementType, link: string, color: string, download?: string }[] = [
    { icon: Github, link: "https://github.com/akashkhurana", color: "bg-gradient-to-b from-zinc-700 to-zinc-900" },
    { icon: Linkedin, link: "https://linkedin.com/in/akash-khurana", color: "bg-gradient-to-b from-blue-500 to-blue-700" },
    { icon: Phone, link: "tel:+919871349123", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { icon: Code, link: "https://leetcode.com/u/akashkhurana55/", color: "bg-gradient-to-b from-amber-500 to-yellow-600 outline outline-1 outline-white/10" },
  ];

  return (
    <div className="absolute bottom-4 left-4 right-4 h-20 rounded-[2rem] bg-white/20 dark:bg-black/40 backdrop-blur-md flex justify-around items-center px-4 z-20">
      {dockItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target={item.link.startsWith('tel:') || item.download ? "_self" : "_blank"}
          rel="noopener noreferrer"
          download={item.download}
          className="group relative"
        >
          {/* App Icon Bubble */}
          <motion.div
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={typeof item.icon !== "string" ? { borderRadius: 12, WebkitBorderCurve: "continuous" } as any : {}}
            className={`w-12 h-12 flex items-center justify-center text-white relative group/dockitem ${typeof item.icon === "string"
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
