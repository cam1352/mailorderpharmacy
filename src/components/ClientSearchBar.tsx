"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export function ClientSearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/medications?search=${encodeURIComponent(query)}`);
    } else {
      router.push(`/medications`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search medications (e.g. Lisinopril)..."
        className="w-full bg-gray-100 border border-gray-300 rounded-full py-1.5 pl-4 pr-10 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
      />
      <button type="submit" className="absolute right-1.5 top-1 p-1 bg-indigo-600 rounded-full text-white hover:bg-indigo-700">
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
}
