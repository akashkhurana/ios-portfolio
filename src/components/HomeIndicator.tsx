"use client";

import React from "react";
import { useOS } from "./OSProvider";
import { PanInfo, motion, useAnimation } from "framer-motion";

export default function HomeIndicator() {
  const { setActiveApp, activeApp } = useOS();
  const controls = useAnimation();

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Any swipe up goes directly home
    if (info.offset.y < -30 || info.velocity.y < -150) {
      setActiveApp(null);
    } else {
      // Snap back if didn't drag enough
      controls.start({ y: 0 });
    }
  };

  if (!activeApp) return null;

  return (
    <div className="absolute bottom-0 left-0 w-full h-8 flex items-end justify-center z-[9999] pointer-events-none pb-2">
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0.8, bottom: 0 }}
        whileHover={{ scaleX: 1.1, scaleY: 1.5 }}
        whileTap={{ scaleX: 0.95 }}
        onDragEnd={handleDragEnd}
        onClick={() => setActiveApp(null)}
        animate={controls}
        className="w-40 h-4 flex items-center justify-center cursor-pointer pointer-events-auto group"
      >
        <div className="w-full h-1 bg-black/80 dark:bg-white/90 rounded-full group-active:scale-95 transition-transform backdrop-invert pointer-events-none" />
      </motion.div>
    </div>
  );
}
