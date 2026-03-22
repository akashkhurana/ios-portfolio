import React from "react";
import { useOS } from "./OSProvider";
import { CloudRain, Sun, Cloud } from "lucide-react";

export function CalendarWidget() {
  const { time } = useOS();
  
  const dayOfWeek = time.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
  const dateNum = time.getDate();

  return (
    <div className="col-span-2 row-span-2 bg-white rounded-[1.3rem] shadow-xl p-4 flex flex-col justify-between overflow-hidden relative group">
      {/* Red Calendar Header */}
      <div className="absolute top-0 left-0 w-full h-8 bg-red-500 pl-4 py-1.5 opacity-90">
        <span className="text-[10px] font-bold text-white tracking-widest">{dayOfWeek}</span>
      </div>
      
      <div className="mt-8">
        <span className="text-4xl font-light text-black tracking-tighter leading-none">{dateNum}</span>
      </div>

      <div className="mt-auto pt-2 border-t border-zinc-100">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] font-medium text-zinc-500">Available for Work</span>
        </div>
      </div>
    </div>
  );
}

export function WeatherWidget() {
  const { time } = useOS();
  
  // Fake weather data based on time grouping
  const getSimulatedWeather = () => {
    const hour = time.getHours();
    if (hour > 18 || hour < 6) return { temp: 64, low: 58, high: 71, icon: <Cloud className="w-8 h-8 text-white fill-white/80" /> };
    if (hour > 14) return { temp: 72, low: 62, high: 75, icon: <CloudRain className="w-8 h-8 text-white fill-white/80" /> };
    return { temp: 78, low: 65, high: 82, icon: <Sun className="w-8 h-8 text-yellow-300 fill-yellow-300" /> };
  };

  const weather = getSimulatedWeather();

  return (
    <div className="col-span-2 row-span-2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-[1.3rem] shadow-xl p-4 flex flex-col justify-between text-white overflow-hidden relative">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium drop-shadow-md">San Francisco</h3>
          <span className="text-4xl font-light tracking-tighter drop-shadow-md">{weather.temp}&deg;</span>
        </div>
        <div className="mt-1 drop-shadow-lg">
          {weather.icon}
        </div>
      </div>

      <div className="mt-auto">
        <span className="text-xs font-medium drop-shadow-md opacity-90">Mostly Sunny</span>
        <div className="flex gap-2 text-[11px] mt-0.5 opacity-80">
          <span>H:{weather.high}&deg;</span>
          <span>L:{weather.low}&deg;</span>
        </div>
      </div>
    </div>
  );
}

export function GithubWidget() {
  return (
    <div className="col-span-4 row-span-2 bg-[#1c1c1e] rounded-[1.3rem] shadow-xl p-4 flex flex-col justify-between overflow-hidden relative group border border-zinc-800/80">
      <div className="flex items-center gap-2 mb-2">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        <span className="text-[12px] font-semibold text-white tracking-tight">GitHub Activity</span>
      </div>
      <div className="w-full flex-1 flex items-center justify-center -ml-2">
        <img 
          src="https://ghchart.rshah.org/akashkhurana" 
          alt="Github Contributions" 
          className="w-full object-cover scale-150 origin-left invert hue-rotate-[180deg] brightness-125 contrast-125 opacity-90"
        />
      </div>
    </div>
  );
}
