"use client";

import { useState, useEffect } from 'react';
import { Pill, Search, Upload, Truck, PlayCircle } from 'lucide-react';

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setSlideIndex((prev) => {
          if (prev >= 3) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 3500); // 3.5 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full relative group cursor-pointer" onClick={() => !isPlaying && setIsPlaying(true)}>
      {!isPlaying ? (
        <>
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" 
            alt="Pharmacy Tutorial Thumbnail"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 bg-indigo-600/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform backdrop-blur-sm border-4 border-white/20">
              <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-indigo-900 z-20 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
          
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-950">
            <div 
              className="h-full bg-indigo-400 transition-all duration-[3500ms] ease-linear" 
              style={{ width: `${(slideIndex + 1) * 25}%` }}
            />
          </div>

          <div className="absolute top-4 right-4 text-xs font-bold text-indigo-300">
            Automated Demo ({slideIndex + 1}/4)
          </div>

          {/* Slide 1 */}
          {slideIndex === 0 && (
            <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center">
              <Pill className="w-20 h-20 text-indigo-400 mb-6 animate-pulse" />
              <h2 className="text-4xl font-black text-white mb-2">Medication Delivery Service</h2>
              <p className="text-xl text-indigo-200">Welcome to your modern online pharmacy platform.</p>
            </div>
          )}

          {/* Slide 2 */}
          {slideIndex === 1 && (
            <div className="animate-in fade-in slide-in-from-right-10 duration-500 flex flex-col items-center">
              <Search className="w-20 h-20 text-indigo-400 mb-6" />
              <h2 className="text-4xl font-black text-white mb-2">Search 800+ Medications</h2>
              <p className="text-xl text-indigo-200">Instantly find the exact dosages you need in our secure database.</p>
            </div>
          )}

          {/* Slide 3 */}
          {slideIndex === 2 && (
            <div className="animate-in fade-in slide-in-from-right-10 duration-500 flex flex-col items-center">
              <Upload className="w-20 h-20 text-indigo-400 mb-6" />
              <h2 className="text-4xl font-black text-white mb-2">HIPAA Secure Uploads</h2>
              <p className="text-xl text-indigo-200">Safely transfer your doctor's prescriptions to our licensed pharmacists.</p>
            </div>
          )}

          {/* Slide 4 */}
          {slideIndex === 3 && (
            <div className="animate-in fade-in slide-in-from-right-10 duration-500 flex flex-col items-center">
              <Truck className="w-20 h-20 text-indigo-400 mb-6" />
              <h2 className="text-4xl font-black text-white mb-2">Delivered to your Door</h2>
              <p className="text-xl text-indigo-200">Fast, discreet, and auto-refilled directly to your home.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
