import React, { useState } from 'react';
import { MenuSection as MenuSectionType } from './types';
import MenuSection from './MenuSection';
import ToggleButton from './ToggleButton';

interface SidebarProps {
  sections: MenuSectionType[];
  isExpanded: boolean;
  onToggle: () => void;
}

export default function Sidebar({ sections, isExpanded, onToggle }: SidebarProps) {
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus(prev => 
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className={`bg-gray-800 text-gray-100 h-full transition-all duration-300 flex flex-col relative
      ${isExpanded ? 'w-64' : 'w-2'}`}>
      <div className="relative">
        <ToggleButton isExpanded={isExpanded} onToggle={onToggle} />
      </div>

      <div className={`flex-1 overflow-y-auto transition-opacity duration-300 
        ${isExpanded ? 'opacity-100' : 'opacity-0 invisible'}`}>
        {sections.map((section, idx) => (
          <MenuSection
            key={idx}
            section={section}
            openSubmenus={openSubmenus}
            onToggleSubmenu={toggleSubmenu}
          />
        ))}
      </div>
    </aside>
  );
}