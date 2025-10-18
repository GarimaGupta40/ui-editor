import React from 'react';
import { getShadowStyle } from '../../utils/shadows';

export default function ButtonControls({ button, updateConfig }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-600">Border Radius (px)</label>
        <input
          type="range"
          min="0"
          max="32"
          value={button.borderRadius}
          onChange={(e) => updateConfig('button', 'borderRadius', Number(e.target.value))}
          className="w-full"
        />
        <div className="text-xs text-gray-500 mt-1">{button.borderRadius}px</div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Shadow</label>
        <select
          value={button.shadow}
          onChange={(e) => updateConfig('button', 'shadow', e.target.value)}
          className="mt-1 block w-full rounded border-gray-200 p-2"
        >
          <option value="none">None</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <div className="text-xs text-gray-500 mt-1">Preview: {getShadowStyle(button.shadow)}</div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Alignment</label>
        <select
          value={button.alignment}
          onChange={(e) => updateConfig('button', 'alignment', e.target.value)}
          className="mt-1 block w-full rounded border-gray-200 p-2"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Background Color</label>
        <input
          type="color"
          value={button.backgroundColor}
          onChange={(e) => updateConfig('button', 'backgroundColor', e.target.value)}
          className="mt-1 w-12 h-8 p-0 border-0"
        />
        <input
          type="text"
          value={button.backgroundColor}
          onChange={(e) => updateConfig('button', 'backgroundColor', e.target.value)}
          className="mt-2 block w-full rounded border-gray-200 p-2"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600">Text Color</label>
        <input
          type="color"
          value={button.textColor}
          onChange={(e) => updateConfig('button', 'textColor', e.target.value)}
          className="mt-1 w-12 h-8 p-0 border-0"
        />
        <input
          type="text"
          value={button.textColor}
          onChange={(e) => updateConfig('button', 'textColor', e.target.value)}
          className="mt-2 block w-full rounded border-gray-200 p-2"
        />
      </div>
    </div>
  );
}
