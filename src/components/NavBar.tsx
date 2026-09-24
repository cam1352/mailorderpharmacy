"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Pill, Menu, X } from 'lucide-react';

export default function NavBar({ city }: { city: string | null }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  if (city) {
    return (
      <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
            <Pill className="text-indigo-400 w-6 h-6 shrink-0" /> 
            <span className="truncate">{city} <span className="font-light text-slate-300">Pharmacy</span></span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-300">
            <Link href="/medications" className="hover:text-white transition">Medications</Link>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <Link href="/how-it-works" className="hover:text-white transition">How it Works</Link>
            <Link href="/blog" className="hover:text-white transition">Health Blog</Link>
            <Link href="/faq" className="hover:text-white transition">FAQ</Link>
            <Link href="/prescriptions" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-indigo-700 transition">
              See a Pharmacist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-slate-300 hover:text-white focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link href="/medications" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">Medications</Link>
              <Link href="/services" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">Services</Link>
              <Link href="/how-it-works" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">How it Works</Link>
              <Link href="/blog" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">Health Blog</Link>
              <Link href="/faq" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">FAQ</Link>
              <Link href="/prescriptions" className="mt-4 block text-center bg-indigo-600 text-white px-5 py-3 rounded-lg font-bold text-base hover:bg-indigo-700 transition">
                See a Pharmacist
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav className="bg-white text-slate-900 shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
          <Pill className="text-indigo-600 w-6 h-6 shrink-0" /> 
          <span className="truncate">MailOrderPharmacy<span className="font-light text-slate-500">.io</span></span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-600">
          <Link href="/medications" className="hover:text-indigo-600 transition">Medications</Link>
          <Link href="/prescriptions" className="hover:text-indigo-600 transition">Prescriptions</Link>
          <Link href="/blog" className="hover:text-indigo-600 transition">Health Blog</Link>
          <Link href="/faq" className="hover:text-indigo-600 transition">FAQ</Link>
                    <Link href="/login" className="bg-slate-900 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-slate-800 transition">
            Patient Portal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href="/medications" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Medications</Link>
            <Link href="/prescriptions" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Prescriptions</Link>
            <Link href="/blog" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Health Blog</Link>
            <Link href="/faq" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">FAQ</Link>
                        <Link href="/login" onClick={toggleMenu} className="mt-4 block text-center bg-slate-900 text-white px-5 py-3 rounded-lg font-bold text-base hover:bg-slate-800 transition">
              Patient Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}