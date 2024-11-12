import React from 'react';
import { Bell } from 'lucide-react';

interface NotificationBellProps {
  count?: number;
}

export default function NotificationBell({ count }: NotificationBellProps) {
  return (
    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full 
      hover:bg-gray-100 transition-colors relative">
      <Bell size={20} />
      {count !== undefined && count > 0 && (
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
      )}
    </button>
  );
}