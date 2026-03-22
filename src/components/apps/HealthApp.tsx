"use client";

import React from "react";
import AppHeader from "../AppHeader";
import { Activity, Server, Zap, ShieldCheck } from "lucide-react";

export default function HealthApp() {
  const rings = [
    { title: "Performance", score: 100, color: "text-red-500", stroke: "stroke-red-500" },
    { title: "Accessibility", score: 100, color: "text-green-500", stroke: "stroke-green-500" },
    { title: "SEO", score: 100, color: "text-blue-500", stroke: "stroke-blue-500" },
  ];

  const metrics = [
    { label: "Systems Uptime", value: "99.99%", desc: "Trailing 90 Days", icon: <Server className="w-5 h-5 text-green-500" /> },
    { label: "p99 API Latency", value: "42ms", desc: "Global Edge Network", icon: <Zap className="w-5 h-5 text-yellow-500" /> },
    { label: "Bundle Size", value: "-90%", desc: "Tree-shaking & Lazy Load", icon: <ShieldCheck className="w-5 h-5 text-blue-500" /> },
  ];

  return (
    <div className="flex-1 flex flex-col bg-black text-white h-full overflow-hidden relative font-sans">
      <AppHeader title="System Health" />
      
      <div className="flex-1 overflow-y-auto pb-12">
        <div className="px-5 mt-4">
          <h1 className="text-3xl font-bold mb-1 tracking-tight">Summary</h1>
          <p className="text-zinc-400 text-[15px] mb-8">Production Telemetry</p>
          
          {/* Lighthouse Rings Section */}
          <div className="bg-[#1c1c1e] rounded-3xl p-6 mb-4 shadow-lg flex flex-col items-center">
            <h2 className="text-lg font-bold w-full mb-6 tracking-tight">Core Web Vitals</h2>
            
            <div className="flex justify-around w-full max-w-[300px] px-2 mb-2">
              {rings.map((ring, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative w-16 h-16 mb-2">
                    {/* Background Ring */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="transparent" className="stroke-zinc-800" strokeWidth="12" />
                      {/* Foreground Ring */}
                      <circle 
                        cx="50" cy="50" r="40" fill="transparent" 
                        className={ring.stroke} 
                        strokeWidth="12" 
                        strokeDasharray="251.2" 
                        strokeDashoffset={251.2 - (251.2 * ring.score) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-bold text-[15px]">{ring.score}</span>
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold ${ring.color}`}>{ring.title.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Telemetry List */}
        <div className="px-5 mt-6">
          <h2 className="text-[20px] font-bold tracking-tight mb-3">Highlights</h2>
          <div className="bg-[#1c1c1e] rounded-[1.3rem] overflow-hidden">
            {metrics.map((metric, i) => (
              <div 
                key={i} 
                className={`flex items-center p-4 ${i !== metrics.length - 1 ? 'border-b border-zinc-800/80' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 mr-4 border border-zinc-800">
                  {metric.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[16px] font-semibold tracking-tight">{metric.label}</p>
                  <p className="text-[13px] text-zinc-400 mt-0.5">{metric.desc}</p>
                </div>
                <div className="text-right ml-2 shrink-0">
                  <span className="text-[22px] font-bold tracking-tight">{metric.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 mt-8 mb-4">
          <p className="text-zinc-500 text-[13px] text-center px-4 leading-relaxed">
            Data sourced from production monitoring (Splunk, Grafana) and Vercel analytics. 
          </p>
        </div>
      </div>
    </div>
  );
}
