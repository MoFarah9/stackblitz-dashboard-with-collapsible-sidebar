import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="max-w-md w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder="Search..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            text-sm"
        />
      </div>
    </div>
  );
}