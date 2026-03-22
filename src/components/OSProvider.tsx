"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface OSContextType {
  isBooting: boolean;
  setIsBooting: (value: boolean) => void;
  isUnlocked: boolean;
  setIsUnlocked: (value: boolean) => void;
  activeApp: string | null;
  setActiveApp: (app: string | null) => void;
  openApps: string[];
  setOpenApps: React.Dispatch<React.SetStateAction<string[]>>;
  isSwitcherOpen: boolean;
  setIsSwitcherOpen: (value: boolean) => void;
  time: Date;
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export function OSProvider({ children }: { children: ReactNode }) {
  const [isBooting, setIsBooting] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [openApps, setOpenApps] = useState<string[]>([]);
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  // Boot Sequence Timer
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
    }, 2500);
    return () => clearTimeout(bootTimer);
  }, []);

  // Timer for clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <OSContext.Provider
      value={{
        isBooting,
        setIsBooting,
        isUnlocked,
        setIsUnlocked,
        activeApp,
        setActiveApp,
        openApps,
        setOpenApps,
        isSwitcherOpen,
        setIsSwitcherOpen,
        time,
      }}
    >
      {children}
    </OSContext.Provider>
  );
}

export function useOS() {
  const context = useContext(OSContext);
  if (context === undefined) {
    throw new Error("useOS must be used within an OSProvider");
  }
  return context;
}
