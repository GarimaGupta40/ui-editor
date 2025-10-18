import React from 'react';

export default function LayoutControls({ layoutCfg, updateConfig }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-600">Card Corner Radius (px)</label>
        <input
          type="range"
          min="0"
          max="48"
          value={layoutCfg.cardCornerRadius}
          onChange={(e) => updateConfig('layout', 'cardCornerRadius', Number(e.target.value))}
          className="w-full"
        />
        <div className="text-xs text-gray-500 mt-1">{layoutCfg.cardCornerRadius}px</div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Container Padding (px)</label>
        <input
          type="range"
          min="0"
          max="64"
          value={layoutCfg.containerPadding}
          onChange={(e) => updateConfig('layout', 'containerPadding', Number(e.target.value))}
          className="w-full"
        />
        <div className="text-xs text-gray-500 mt-1">{layoutCfg.containerPadding}px</div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Section Background Color</label>
        <input
          type="color"
          value={layoutCfg.backgroundColor}
          onChange={(e) => updateConfig('layout', 'backgroundColor', e.target.value)}
          className="mt-1 w-12 h-8 p-0 border-0"
        />
        <input
          type="text"
          value={layoutCfg.backgroundColor}
          onChange={(e) => updateConfig('layout', 'backgroundColor', e.target.value)}
          className="mt-2 block w-full rounded border-gray-200 p-2"
        />
      </div>
    </div>
  );
}
