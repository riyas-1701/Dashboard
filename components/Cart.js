"use client";

import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function Cart() {
  const [mounted, setMounted] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { female, setFemale, male, setMale } = useUserContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        setFemale(data.users.filter((user) => user.gender === "female"));
        setMale(data.users.filter((user) => user.gender === "male"));
        setUsers(data.users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8 tracking-tight">Loading Users...</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm animate-pulse flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-slate-50">
                <div className="h-3 bg-slate-200 rounded w-full"></div>
                <div className="h-3 bg-slate-200 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Total Users</h1>

        </div>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100">
          Total: {users.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${user.gender === 'female' ? 'bg-pink-500' : 'bg-blue-500'}`}></span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors duration-200">
                    {user.firstName} {user.lastName}
                  </h3>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-1 ${user.gender === "female"
                    ? "bg-pink-50 text-pink-700 border border-pink-100"
                    : "bg-blue-50 text-blue-700 border border-blue-100"
                    }`}>
                    {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-50 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate" title={user.email}>{user.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.096.867l-1.1 1.486a10.582 10.582 0 004.872 4.872l1.486-1.1a1 1 0 01.867-.096l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="truncate">{user.phone}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-50 flex justify-end">
              <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1">
                View Profile
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
