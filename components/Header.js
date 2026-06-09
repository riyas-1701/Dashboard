"use client";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    setIsOpen(!isOpen)
    console.log("Button Clicked");
  }
  return (
    <button onClick={handleLogout} className="cursor-pointer" >
      <IoLogOutOutline size={24} />
      {isOpen && (
        <button>
          Logout
        </button>
      )}
    </button >
  );
}

export default function Header() {
  return (
    <header className="h-16 bg-slate-900 text-slate-100 flex items-center justify-between px-8 border-b border-slate-800 shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
          MD
        </div>
        <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          MoonDive
        </span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
        <ul className="flex gap-6">
          <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Apple
          </li>
          <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Mango
          </li>
          <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Banana
          </li>
        </ul>
      </div>

      <div>
        <Navbar />
      </div>
    </header>
  )
};
