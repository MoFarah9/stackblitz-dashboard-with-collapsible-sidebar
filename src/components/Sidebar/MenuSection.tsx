import React from 'react';
import { MenuSection as MenuSectionType } from './types';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  section: MenuSectionType;
  openSubmenus: string[];
  onToggleSubmenu: (label: string) => void;
}

export default function MenuSection({ section, openSubmenus, onToggleSubmenu }: MenuSectionProps) {
  return (
    <div className="px-4 py-4">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
        {section.title}
      </h2>
      
      {section.items.map((item, idx) => (
        <MenuItem
          key={idx}
          item={item}
          isOpen={openSubmenus.includes(item.label)}
          onToggle={() => onToggleSubmenu(item.label)}
        />
      ))}
    </div>
  );
}