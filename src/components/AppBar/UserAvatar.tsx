import React from 'react';
import { User } from 'lucide-react';

export default function UserAvatar() {
  return (
    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
      <User size={20} className="text-gray-600" />
    </div>
  );
}