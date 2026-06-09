"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col border-r border-slate-800 p-6 shadow-xl">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</span>
      </div>
      <ul className="space-y-2 flex-1">
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-800 hover:text-white"
          >
            <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
        </li>

        <li>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-800 hover:text-white text-left focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Users
            </div>
            <svg
              className={`w-4 h-4 opacity-75 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <ul className="mt-1 pl-4 space-y-1 border-l border-slate-800 ml-6">
              <li>
                <Link
                  href="/about/a"
                  className="block py-2 px-3 text-xs rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-150"
                >
                  Male
                </Link>
              </li>
              <li>
                <Link
                  href="/about/b"
                  className="block py-2 px-3 text-xs rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-150"
                >
                  Female
                </Link>
              </li>
              <li>
                <Link
                  href="/about/c"
                  className="block py-2 px-3 text-xs rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-150"
                >
                  Both
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            href="/contact"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-800 hover:text-white"
          >
            <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About
          </Link>
        </li>

        <li>
          <Link
            href="/females"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-800 hover:text-white"
          >
            <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Females
          </Link>
        </li>
      </ul>
      {/* <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
        Dashboard v1.0.0
      </div> */}
    </aside>
  );
}

