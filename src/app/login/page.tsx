"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in as ${email}`);
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-white p-8 rounded-lg shadow-lg border max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
            <Lock className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Customer Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input 
              id="email" 
              type="email" 
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              id="password" 
              type="password" 
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button 
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 w-full text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute border-t border-gray-300 w-full"></div>
            <span className="bg-white px-3 text-sm text-gray-500 relative z-10">or continue with</span>
          </div>

          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              alert("Google OAuth Flow initialized. User redirected to Google accounts page.");
              router.push('/');
            }}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-4 rounded-lg transition-colors"
          >
            {/* Google G Logo SVG */}
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" />
              <path fill="#34A853" d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7253 38.5056 24.4888 38.5056C18.2275 38.5056 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" />
              <path fill="#FBBC05" d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03296C-0.371021 20.0112 -0.371021 28.0009 3.03296 34.7825L11.0051 28.6006Z" />
              <path fill="#EA4335" d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6346 13.0973L40.5387 6.19323C36.2359 2.17101 30.4462 -0.068932 24.48 0.00161733C15.4056 0.00161733 7.10718 5.11644 3.03296 13.2207L11.0051 19.4026C12.8923 13.7235 18.2187 9.49932 24.48 9.49932Z" />
            </svg>
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
