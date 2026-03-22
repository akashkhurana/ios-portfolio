"use client";

import React from "react";
import { useOS } from "./OSProvider";

export default function StatusBar() {
  const { time } = useOS();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="absolute top-0 w-full h-12 flex items-center justify-between px-6 z-40 text-sm font-medium text-white pointer-events-none">
      <div className="flex-1 text-left tabular-nums pt-1">{mounted ? formattedTime : ""}</div>
      <div className="flex-1 flex justify-end items-center gap-1.5 pt-1 pr-1">
        {/* iOS Cellular Bars */}
        <svg viewBox="0 0 16 12" className="w-[15px] h-[11px] fill-white opacity-90 stroke-white stroke-[0.7]">
          <path d="M1 12h2V8H1v4zm4 0h2V6H5v6zm4 0h2V4H9v8zm4 0h2V0h-2v12z" />
        </svg>

        {/* iOS WiFi Arc */}
        <svg viewBox="0 0 16 12" className="w-[15px] h-[11px] fill-white opacity-90 stroke-white stroke-[0.7]">
          <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0-3.5c-1.8 0-3.4.7-4.6 1.8l1.1 1.1c.9-.9 2.1-1.4 3.5-1.4s2.6.5 3.5 1.4l1.1-1.1C11.4 6.7 9.8 6 8 6zm0-3.5C5 2.5 2.3 3.6.3 5.3l1.1 1.1C3.1 5 5.4 4 8 4s4.9 1 6.6 2.4l1.1-1.1C13.7 3.6 11 2.5 8 2.5z" />
          <path d="M8 0C4 0 .3 1.5-2.5 4l1.1 1.1C1 2.9 4.3 1.5 8 1.5s7 1.4 9.4 3.6l1.1-1.1C15.7 1.5 12 0 8 0z" />
        </svg>

        {/* iOS Battery */}
        <div className="relative flex items-center ml-0.5">
          <svg viewBox="0 0 24 12" className="w-[20px] h-[10px] fill-none stroke-white stroke-[2] opacity-60">
            <rect x="1" y="1" width="20" height="10" rx="3.33" />
            <path d="M22 4v4" strokeLinecap="round" strokeWidth="2" />
          </svg>
          <div className="absolute left-[2px] w-[13px] h-[6px] bg-white rounded-[1px]" />
        </div>
      </div>
    </div>
  );
}
