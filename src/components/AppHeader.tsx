"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { useOS } from "./OSProvider";

interface AppHeaderProps {
  title?: string;
  onBack?: () => void;
  showBack?: boolean;
}

export default function AppHeader({ title = "", onBack, showBack = true }: AppHeaderProps) {
  const { setActiveApp } = useOS();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      setActiveApp(null);
    }
  };

  return (
    <div className="w-full flex items-center justify-between px-4 pt-14 pb-2 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="w-20">
        {showBack && (
          <button 
            onClick={handleBack}
            className="flex items-center text-blue-500 font-medium hover:opacity-80 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6 -ml-2" />
            <span>Home</span>
          </button>
        )}
      </div>
      
      <div className="flex-1 text-center font-semibold text-[17px]">
        {title}
      </div>
      
      <div className="w-20 flex justify-end">
        {/* Right side placeholder for balance */}
      </div>
    </div>
  );
}
