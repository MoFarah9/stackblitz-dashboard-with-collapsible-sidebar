import React, { useState } from 'react';
import { Home, Users, Settings, Box, BarChart3, Mail, Shield } from 'lucide-react';
import Sidebar from './components/Sidebar';
import AppBar from './components/AppBar';
import { MenuSection } from './components/Sidebar/types';

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const menuSections: MenuSection[] = [
    {
      title: 'Main',
      items: [
        { label: 'Dashboard', icon: <Home size={20} /> },
        { 
          label: 'Analytics', 
          icon: <BarChart3 size={20} />,
          submenu: [
            { label: 'Overview', path: '/analytics' },
            { label: 'Reports', path: '/reports' },
            { label: 'Statistics', path: '/stats' }
          ]
        }
      ]
    },
    {
      title: 'Management',
      items: [
        { 
          label: 'Users', 
          icon: <Users size={20} />,
          submenu: [
            { label: 'List', path: '/users' },
            { label: 'Groups', path: '/groups' },
            { label: 'Permissions', path: '/permissions' }
          ]
        },
        { label: 'Products', icon: <Box size={20} /> },
        { label: 'Messages', icon: <Mail size={20} /> }
      ]
    },
    {
      title: 'System',
      items: [
        { label: 'Settings', icon: <Settings size={20} /> },
        { label: 'Security', icon: <Shield size={20} /> }
      ]
    }
  ];

  return (
    <div className="h-screen flex flex-col">
      <AppBar />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          sections={menuSections}
          isExpanded={isSidebarExpanded} 
          onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)} 
        />
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <p className="mt-4 text-gray-600">
              Welcome to your dashboard. This is a sample content area that will display your main content.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;