import React from 'react';
import { ChevronDown } from 'lucide-react';
import { MenuItem as MenuItemType } from './types';
import SubmenuItem from './SubmenuItem';

interface MenuItemProps {
  item: MenuItemType;
  isOpen: boolean;
  onToggle: () => void;
}

export default function MenuItem({ item, isOpen, onToggle }: MenuItemProps) {
  return (
    <div>
      <button
        onClick={item.submenu ? onToggle : undefined}
        className={`w-full flex items-center px-2 py-2.5 rounded-lg transition-colors
          justify-between hover:bg-gray-700 hover:text-white
          ${isOpen ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
      >
        <div className="flex items-center gap-3">
          {item.icon}
          <span>{item.label}</span>
        </div>
        {item.submenu && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 
              ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {item.submenu && isOpen && (
        <div className="ml-8 mt-1 space-y-1">
          {item.submenu.map((subItem, idx) => (
            <SubmenuItem key={idx} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}