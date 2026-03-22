"use client";

import React from "react";
import { motion, PanInfo } from "framer-motion";
import { useOS } from "./OSProvider";

export default function AppSwitcher() {
  const { isSwitcherOpen, setIsSwitcherOpen, openApps, setOpenApps, setActiveApp } = useOS();

  if (!isSwitcherOpen || openApps.length === 0) return null;

  const handleDragEnd = (app: string, event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Swipe up to close app completely
    if (info.offset.y < -100 || info.velocity.y < -300) {
      setOpenApps(prev => prev.filter(a => a !== app));
      if (openApps.length === 1) {
        // Last app closed
        setIsSwitcherOpen(false);
      }
    }
    // Swipe down to close switcher
    else if (info.offset.y > 100 || info.velocity.y > 300) {
      setIsSwitcherOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-30 bg-black/60 backdrop-blur-md flex items-center justify-center overflow-hidden"
      onClick={() => setIsSwitcherOpen(false)}
    >
      <div 
        className="flex gap-4 px-8 overflow-x-auto w-full snap-x snap-mandatory hide-scrollbar items-center py-20"
        onClick={(e) => e.stopPropagation()}
      >
        {openApps.map((app) => (
          <motion.div
            key={app}
            layoutId={app}
            onClick={() => {
              setActiveApp(app);
              setIsSwitcherOpen(false);
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.4}
            onDragEnd={(e, info) => handleDragEnd(app, e, info)}
            className="shrink-0 w-3/4 h-[60vh] bg-zinc-800 rounded-3xl snap-center cursor-pointer shadow-xl overflow-hidden hover:scale-105 active:scale-95 transition-transform"
          >
            {/* Minimal App Preview */}
            <div className="w-full h-8 bg-zinc-900 flex items-center justify-center text-xs text-white">
              {app.toUpperCase()}
            </div>
            <div className="w-full h-full flex items-center justify-center text-zinc-500">
              App Preview
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
