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
