import React from 'react';
import { Download } from 'lucide-react';

export default function ExportButton({ config }) {
  const exportConfig = () => {
    const dataStr = JSON.stringify(config, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'ui-config.json');
    linkElement.click();
  };

  return (
    <button
      onClick={exportConfig}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Download className="w-4 h-4" />
      Export Config
    </button>
  );
}
