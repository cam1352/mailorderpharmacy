"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Pill, User, FileText, MapPin, BookOpen } from 'lucide-react';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-indigo-600 transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Menu"
      >
        {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
      </button>

      {isOpen && (
        <>
          {/* Overlay to close menu when clicking outside */}
          <div 
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-12 left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
            <Link 
              href="/medications" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            >
              <Pill className="w-5 h-5 text-indigo-500" />
              <span className="font-semibold">Medications</span>
            </Link>
            
            <Link 
              href="/prescriptions" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            >
              <FileText className="w-5 h-5 text-indigo-500" />
              <span className="font-semibold">Prescriptions</span>
            </Link>

            <Link 
              href="/locations" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            >
              <MapPin className="w-5 h-5 text-indigo-500" />
              <span className="font-semibold">Locations</span>
            </Link>

            <Link 
              href="/blog" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            >
              <BookOpen className="w-5 h-5 text-indigo-500" />
              <span className="font-semibold">Health Blog</span>
            </Link>

            <div className="border-t border-gray-100 my-1"></div>

            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            >
              <User className="w-5 h-5 text-indigo-500" />
              <span className="font-semibold">Sign In / Register</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
