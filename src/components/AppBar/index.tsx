import React from 'react';
import SearchBar from './SearchBar';
import NotificationBell from './NotificationBell';
import UserAvatar from './UserAvatar';

export default function AppBar() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center flex-1">
        <SearchBar />
      </div>

      <div className="flex items-center space-x-4">
        <NotificationBell count={1} />
        <UserAvatar />
      </div>
    </header>
  );
}