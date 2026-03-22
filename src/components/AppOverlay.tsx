"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOS } from "./OSProvider";
import HomeIndicator from "./HomeIndicator";
import MailApp from "./apps/MailApp";
import MusicApp from "./apps/MusicApp";
import AboutApp from "./apps/AboutApp";
import NotesApp from "./apps/NotesApp";
import EducationApp from "./apps/EducationApp";
import ExperienceApp from "./apps/ExperienceApp";
import ResumeApp from "./apps/ResumeApp";
import ProjectsApp from "./apps/ProjectsApp";

// App Placeholders (We will implement real ones next)
const PlaceholderApp = ({ title }: { title: string }) => (
  <div className="flex-1 flex items-center justify-center bg-white dark:bg-zinc-900 text-black dark:text-white pt-12 pb-8 h-full">
    <h1 className="text-2xl font-bold">{title} App Placeholder</h1>
  </div>
);

export default function AppOverlay() {
  const { activeApp } = useOS();

  const renderAppContent = () => {
    switch (activeApp) {
      case "mail":
        return <MailApp />;
      case "music":
        return <MusicApp />;
      case "about":
        return <AboutApp />;
      case "notes":
        return <NotesApp />;
      case "education":
        return <EducationApp />;
      case "experience":
        return <ExperienceApp />;
      case "resume":
        return <ResumeApp />;
      case "projects":
        return <ProjectsApp />;
      default:
        // Generic fallback for notes, education, resume etc
        return <PlaceholderApp title={activeApp ? activeApp.charAt(0).toUpperCase() + activeApp.slice(1) : ""} />;
    }
  };

  return (
    <AnimatePresence>
      {activeApp && (
        <motion.div
          layoutId={activeApp}
          initial={{ borderRadius: 32, opacity: 0, scale: 0.95 }}
          animate={{ borderRadius: 0, opacity: 1, scale: 1 }}
          exit={{ borderRadius: 32, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
          className="absolute inset-0 z-40 bg-zinc-950 overflow-hidden flex flex-col"
        >
          {renderAppContent()}
          <HomeIndicator />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
