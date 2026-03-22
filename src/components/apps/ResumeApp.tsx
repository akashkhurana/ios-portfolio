"use client";

import React from "react";
import AppHeader from "../AppHeader";
import { Download, FileText, Share } from "lucide-react";

export default function ResumeApp() {
  const basePath = process.env.NODE_ENV === 'production' ? '/ios-portfolio' : '';

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#1c1c1e] text-black dark:text-white h-full overflow-hidden relative">
      <AppHeader title="Resume" />

      <div className="flex-1 overflow-y-auto px-4 pb-12 pt-4 flex flex-col items-center">

        {/* PDF Document Viewer embedding the native browser PDF renderer */}
        <div className="w-full max-w-sm h-[500px] flex-shrink-0 bg-zinc-50 dark:bg-zinc-100 rounded-lg shadow-xl border border-zinc-200 text-zinc-800 origin-top relative overflow-hidden flex flex-col mt-2">
          <iframe 
            src={`${basePath}/Resume (3).pdf#toolbar=0&navpanes=0&scrollbar=0`} 
            title="Resume PDF"
            className="w-full h-full border-none rounded-lg flex-1"
          />
        </div>

        <div className="w-full space-y-3 px-4 pb-6 mt-4">
          <a 
            href={`${basePath}/Resume (3).pdf`} 
            download="Akash_Khurana_Resume.pdf"
            className="w-full py-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-2xl font-semibold text-[17px] flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-5 h-5" /> Download PDF
          </a>

          <button className="w-full py-4 bg-zinc-100 dark:bg-zinc-800 text-blue-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:bg-zinc-300 dark:active:bg-zinc-600 rounded-2xl font-semibold text-[17px] flex items-center justify-center gap-2 transition-colors">
            <Share className="w-5 h-5" /> Share Document
          </button>
        </div>
      </div>
    </div>
  );
}
