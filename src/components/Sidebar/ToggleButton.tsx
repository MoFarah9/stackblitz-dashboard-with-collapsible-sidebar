import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface ToggleButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ToggleButton({ isExpanded, onToggle }: ToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute -right-3 top-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-1.5 
        shadow-lg transition-all duration-200 hover:scale-110 z-50"
      title={isExpanded ? 'Collapse' : 'Expand'}
    >
      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
    </button>
  );
}