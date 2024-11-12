import React from 'react';
import { ChevronDown, Plus, Minus, Home, Users, Settings, Box, BarChart3, Mail, Shield } from 'lucide-react';

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  submenu?: { label: string; path: string }[];
}

export default function Sidebar({ isExpanded, onToggle }: { isExpanded: boolean; onToggle: () => void }) {
  const [openSubmenus, setOpenSubmenus] = React.useState<string[]>([]);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus(prev => 
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

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
    <aside className={`bg-gray-800 text-gray-100 h-full transition-all duration-300 flex flex-col relative
      ${isExpanded ? 'w-64' : 'w-2'}`}>
      <div className="relative">
        <button
          onClick={onToggle}
          className="absolute -right-3 top-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-1.5 
            shadow-lg transition-all duration-200 hover:scale-110 z-50"
          title={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
        </button>
      </div>

      <div className={`flex-1 overflow-y-auto transition-opacity duration-300 
        ${isExpanded ? 'opacity-100' : 'opacity-0 invisible'}`}>
        {menuSections.map((section, idx) => (
          <div key={idx} className="px-4 py-4">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {section.title}
            </h2>
            
            {section.items.map((item, itemIdx) => (
              <div key={itemIdx}>
                <button
                  onClick={() => item.submenu && toggleSubmenu(item.label)}
                  className={`w-full flex items-center px-2 py-2.5 rounded-lg transition-colors
                    justify-between hover:bg-gray-700 hover:text-white
                    ${openSubmenus.includes(item.label) ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 
                        ${openSubmenus.includes(item.label) ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {item.submenu && openSubmenus.includes(item.label) && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.submenu.map((subItem, subIdx) => (
                      <a
                        key={subIdx}
                        href={subItem.path}
                        className="block px-2 py-1.5 text-sm text-gray-400 hover:text-white 
                          rounded-md hover:bg-gray-700 transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}