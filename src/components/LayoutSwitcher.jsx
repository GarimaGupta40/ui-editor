import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';

export default function LayoutSwitcher({ layout, setLayout }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLayout('mobile')}
        className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
          layout === 'mobile' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
        }`}
      >
        <Smartphone className="w-4 h-4" />
        <span className="text-sm font-medium">Mobile</span>
      </button>
      <button
        onClick={() => setLayout('desktop')}
        className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
          layout === 'desktop' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
        }`}
      >
        <Monitor className="w-4 h-4" />
        <span className="text-sm font-medium">Desktop</span>
      </button>
    </div>
  );
}
