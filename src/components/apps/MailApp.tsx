"use client";

import React, { useState } from "react";
import { PenSquare, Search } from "lucide-react";
import AppHeader from "../AppHeader";

export default function MailApp() {
  const [isComposing, setIsComposing] = useState(false);

  const MOCK_MAILS = [
    { sender: "Recruiter", subject: "Job Opportunity", preview: "Hi, we saw your portfolio and loved it...", time: "10:30 AM", unread: true },
    { sender: "GitHub", subject: "Action Required", preview: "A new device logged into your account.", time: "Yesterday", unread: false },
    { sender: "LinkedIn", subject: "You appeared in 15 searches", preview: "See who's looking at your profile.", time: "Tuesday", unread: false },
  ];

  if (isComposing) {
    return (
      <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 text-black dark:text-white h-full pt-12 pb-8">
        <div className="flex items-center justify-between px-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          <button onClick={() => setIsComposing(false)} className="text-blue-500 font-medium w-16 text-left">Cancel</button>
          <span className="font-semibold pb-1">New Message</span>
          <a href="mailto:example@gmail.com" className="text-zinc-400 font-medium w-16 text-right">Send</a>
        </div>
        <div className="flex flex-col px-4 mt-2">
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 py-3">
            <span className="text-zinc-400 w-12 text-sm">To:</span>
            <input type="text" value="example@gmail.com" readOnly className="flex-1 bg-transparent outline-none text-sm" />
          </div>
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 py-3">
            <span className="text-zinc-400 w-16 text-sm">Subject:</span>
            <input type="text" placeholder="Inquiry" className="flex-1 bg-transparent outline-none text-sm" />
          </div>
          <textarea 
            className="flex-1 mt-4 bg-transparent outline-none resize-none text-sm h-64"
            placeholder="Write your message here..."
          ></textarea>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-zinc-950 text-black dark:text-white h-full overflow-hidden relative">
      <AppHeader title="Mailboxes" />
      
      <div className="flex-1 overflow-y-auto pb-8">
        <div className="flex items-center justify-between px-4 mb-2 mt-4">
          <button className="text-blue-500 font-medium">Edit</button>
        </div>
        
        <div className="px-4 mb-4">
          <h1 className="text-3xl font-bold">Inbox</h1>
        </div>

      <div className="px-4 mb-4">
        <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl h-9 flex items-center px-3 gap-2">
          <Search className="w-4 h-4 text-zinc-400" />
          <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-sm flex-1" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 divide-y divide-zinc-200 dark:divide-zinc-800">
        {MOCK_MAILS.map((mail, i) => (
          <div key={i} className="py-3 flex flex-col gap-0.5 relative group">
            {mail.unread && <div className="absolute left-[-12px] top-[18px] w-2.5 h-2.5 bg-blue-500 rounded-full" />}
            <div className="flex justify-between items-baseline pl-1">
              <span className={`font-semibold ${mail.unread ? '' : 'text-zinc-700 dark:text-zinc-300'}`}>{mail.sender}</span>
              <span className="text-zinc-500 text-xs">{mail.time}</span>
            </div>
            <span className={`text-sm pl-1 ${mail.unread ? 'font-medium' : 'text-zinc-700 dark:text-zinc-300'}`}>{mail.subject}</span>
            <span className="text-zinc-500 text-sm truncate pl-1">{mail.preview}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-full h-12 bg-zinc-100/90 dark:bg-zinc-900/90 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end px-4 z-10 mb-6">
        <button onClick={() => setIsComposing(true)} className="text-blue-500 p-2 -mr-2">
          <PenSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
  );
}
