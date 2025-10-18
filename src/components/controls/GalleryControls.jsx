import React from 'react';

export default function GalleryControls({ gallery, updateConfig }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-600">Gallery Alignment</label>
        <select
          value={gallery.alignment}
          onChange={(e) => updateConfig('gallery', 'alignment', e.target.value)}
          className="mt-1 block w-full rounded border-gray-200 p-2"
        >
          <option value="grid-left">Grid Left</option>
          <option value="grid-center">Grid Center</option>
          <option value="grid-right">Grid Right</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Spacing (px)</label>
        <input
          type="range"
          min="0"
          max="48"
          value={gallery.spacing}
          onChange={(e) => updateConfig('gallery', 'spacing', Number(e.target.value))}
          className="w-full"
        />
        <div className="text-xs text-gray-500 mt-1">{gallery.spacing}px</div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Image Border Radius (px)</label>
        <input
          type="range"
          min="0"
          max="48"
          value={gallery.borderRadius}
          onChange={(e) => updateConfig('gallery', 'borderRadius', Number(e.target.value))}
          className="w-full"
        />
        <div className="text-xs text-gray-500 mt-1">{gallery.borderRadius}px</div>
      </div>
    </div>
  );
}
