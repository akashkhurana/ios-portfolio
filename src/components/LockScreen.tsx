"use client";

import React from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { useOS } from "./OSProvider";

export default function LockScreen() {
  const { isUnlocked, setIsUnlocked, time } = useOS();
  const controls = useAnimation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Format time and date
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // If user dragged up significantly (-y direction)
    if (info.offset.y < -150 || info.velocity.y < -500) {
      setIsUnlocked(true);
    } else {
      // Snap back if didn't drag enough
      controls.start({ y: 0 });
    }
  };

  if (isUnlocked) return null;

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={{ top: 1, bottom: 0 }} // Only elastic upwards
      onDragEnd={handleDragEnd}
      animate={controls}
      className="absolute inset-0 z-30 flex flex-col items-center justify-between pb-2 pt-24 text-white touch-none"
      style={{
        background: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="flex flex-col items-center select-none pointer-events-none mt-12">
        <span className="text-xl font-medium">{mounted ? formattedDate : ""}</span>
        <span className="text-8xl font-bold tracking-tighter mt-2">{mounted ? formattedTime : ""}</span>
      </div>

      <div className="flex flex-col items-center gap-2 select-none pointer-events-none mb-2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {/* subtle animated arrow */}
          <div className="w-32 h-1.5 rounded-full bg-white/90" />
        </motion.div>
      </div>
    </motion.div>
  );
}
