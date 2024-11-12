import React from 'react';
import { SubMenuItem } from './types';

interface SubmenuItemProps {
  item: SubMenuItem;
}

export default function SubmenuItem({ item }: SubmenuItemProps) {
  return (
    <a
      href={item.path}
      className="block px-2 py-1.5 text-sm text-gray-400 hover:text-white 
        rounded-md hover:bg-gray-700 transition-colors"
    >
      {item.label}
    </a>
  );
}