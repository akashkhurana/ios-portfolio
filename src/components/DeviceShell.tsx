import React from "react";
import { AnimatePresence } from "framer-motion";
import StatusBar from "./StatusBar";
import BootSequence from "./BootSequence";

export default function DeviceShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[100dvh] w-screen items-center justify-center bg-zinc-950 p-0 sm:py-6 sm:px-8">
      {/* Outer Shell strictly for relative positioning of the hardware buttons */}
      <div className="relative w-full h-full sm:w-[360px] sm:h-[760px]">

        {/* Hardware Buttons (Titanium look) - Only visible on desktop */}
        {/* Action Button */}
        <div className="hidden sm:block absolute top-[120px] -left-[12px] w-[4px] h-[24px] bg-zinc-800 rounded-l-md shadow-inner" />
        {/* Volume Up */}
        <div className="hidden sm:block absolute top-[165px] -left-[12px] w-[4px] h-[46px] bg-zinc-800 rounded-l-md shadow-inner" />
        {/* Volume Down */}
        <div className="hidden sm:block absolute top-[225px] -left-[12px] w-[4px] h-[46px] bg-zinc-800 rounded-l-md shadow-inner" />
        {/* Power Button */}
        <div className="hidden sm:block absolute top-[185px] -right-[12px] w-[4px] h-[70px] bg-zinc-800 rounded-r-md shadow-inner" />

        <div
          className="
            relative overflow-hidden w-full h-full 
            sm:rounded-[2.75rem] sm:border-[8px] sm:border-black sm:ring-2 sm:ring-zinc-800 sm:shadow-[0_0_0_1px_rgba(255,255,255,0.1),_0_25px_60px_-12px_rgba(0,0,0,0.8)]
            bg-[url('/wallpaper.png')] bg-cover bg-center text-white
          "
        >
          <AnimatePresence>
            <BootSequence key="boot" />
          </AnimatePresence>

          {/* Dynamic Island (iPhone 16 Pro Style Pill) - Hidden on mobile to avoid native notch overlap */}
          <div className="hidden sm:flex absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-full z-50 items-center justify-end px-3">
            {/* Fake Camera Lens */}
            <div className="w-[12px] h-[12px] rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
              <div className="w-[4px] h-[4px] rounded-full bg-blue-900/40" />
            </div>
          </div>

          <StatusBar />
          {children}
        </div>
      </div>
    </div>
  );
}
