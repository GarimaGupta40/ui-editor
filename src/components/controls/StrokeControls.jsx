import React from 'react';

export default function StrokeControls({ stroke, updateConfig }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-600">Stroke Color</label>
        <input
          type="color"
          value={stroke.color}
          onChange={(e) => updateConfig('stroke', 'color', e.target.value)}
          className="mt-1 w-12 h-8 p-0 border-0"
        />
        <input
          type="text"
          value={stroke.color}
          onChange={(e) => updateConfig('stroke', 'color', e.target.value)}
          className="mt-2 block w-full rounded border-gray-200 p-2"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Stroke Weight (px)</label>
        <input
          type="range"
          min="0"
          max="6"
          value={stroke.weight}
          onChange={(e) => updateConfig('stroke', 'weight', Number(e.target.value))}
          className="w-full"
        />
        <div className="text-xs text-gray-500 mt-1">{stroke.weight}px</div>
      </div>
    </div>
  );
}
