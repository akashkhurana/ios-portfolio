"use client";

import React from "react";
import AppHeader from "../AppHeader";
import { Download, FileText, Share } from "lucide-react";

export default function ResumeApp() {
  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#1c1c1e] text-black dark:text-white h-full overflow-hidden relative">
      <AppHeader title="Resume" />

      <div className="flex-1 overflow-y-auto px-4 pb-12 pt-4 flex flex-col items-center">

        {/* PDF Document Preview Styling */}
        <div className="w-full max-w-sm aspect-[1/1.4] bg-zinc-50 dark:bg-zinc-100 rounded-lg shadow-xl border border-zinc-200 p-6 flex flex-col text-zinc-800 scale-[0.95] origin-top mb-4 relative overflow-hidden">
          {/* Header */}
          <div className="border-b-2 border-zinc-300 pb-4 mb-4">
            <h1 className="text-2xl font-black uppercase text-center tracking-widest text-zinc-900">John Doe</h1>
            <p className="text-center text-sm font-medium text-zinc-500 mt-1">Software Engineer • San Francisco, CA</p>
          </div>

          {/* Body Lines Mockup */}
          <div className="space-y-4">
            <div>
              <div className="h-3 w-32 bg-zinc-300 rounded mb-2"></div>
              <div className="h-2 w-full bg-zinc-200 rounded mb-1"></div>
              <div className="h-2 w-5/6 bg-zinc-200 rounded mb-1"></div>
              <div className="h-2 w-3/4 bg-zinc-200 rounded"></div>
            </div>
            <div>
              <div className="h-3 w-24 bg-zinc-300 rounded mb-2"></div>
              <div className="h-2 w-full bg-zinc-200 rounded mb-1"></div>
              <div className="h-2 w-full bg-zinc-200 rounded mb-1"></div>
              <div className="h-2 w-2/3 bg-zinc-200 rounded"></div>
            </div>
            <div>
              <div className="h-3 w-40 bg-zinc-300 rounded mb-2"></div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-3 px-4 pb-6 mt-4">
          <button className="w-full py-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-2xl font-semibold text-[17px] flex items-center justify-center gap-2 transition-colors">
            <Download className="w-5 h-5" /> Download PDF
          </button>

          <button className="w-full py-4 bg-zinc-100 dark:bg-zinc-800 text-blue-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:bg-zinc-300 dark:active:bg-zinc-600 rounded-2xl font-semibold text-[17px] flex items-center justify-center gap-2 transition-colors">
            <Share className="w-5 h-5" /> Share Document
          </button>
        </div>
      </div>
    </div>
  );
}
