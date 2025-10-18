// import React, { useMemo } from 'react';
// import { Settings, Type, Square, Layout, Palette } from 'lucide-react';
// import TypographyControls from './controls/TypographyControls';
// import ButtonControls from './controls/ButtonControls';
// import GalleryControls from './controls/GalleryControls';
// import LayoutControls from './controls/LayoutControls';
// import StrokeControls from './controls/StrokeControls';

// export default function EditorPanel({ config, updateConfig, selectedTab, setSelectedTab }) {
//   const tabs = useMemo(() => [
//     { id: 'typography', icon: Type, label: 'Typography' },
//     { id: 'button', icon: Square, label: 'Button' },
//     { id: 'gallery', icon: null, label: 'Gallery' },
//     { id: 'layout', icon: Layout, label: 'Layout' },
//     { id: 'stroke', icon: Palette, label: 'Stroke' },
//   ], []);

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-24">
//       <div className="border-b border-gray-200 p-4">
//         <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
//           <Settings className="w-5 h-5" />
//           Customization Panel
//         </h2>
//       </div>

//       <div className="border-b border-gray-200 flex overflow-x-auto">
//         {tabs.map(tab => {
//           const TabIcon = tab.icon;
//           return (
//             <button
//               key={tab.id}
//               onClick={() => setSelectedTab(tab.id)}
//               className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
//                 selectedTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               {TabIcon ? <TabIcon className="w-4 h-4" /> : <span className="w-4 h-4 inline-block" />}
//               {tab.label}
//             </button>
//           );
//         })}
//       </div>

//       <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
//         {selectedTab === 'typography' && (
//           <TypographyControls typography={config.typography} updateConfig={updateConfig} />
//         )}
//         {selectedTab === 'button' && (
//           <ButtonControls button={config.button} updateConfig={updateConfig} />
//         )}
//         {selectedTab === 'gallery' && (
//           <GalleryControls gallery={config.gallery} updateConfig={updateConfig} />
//         )}
//         {selectedTab === 'layout' && (
//           <LayoutControls layoutCfg={config.layout} updateConfig={updateConfig} />
//         )}
//         {selectedTab === 'stroke' && (
//           <StrokeControls stroke={config.stroke} updateConfig={updateConfig} />
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useMemo } from 'react';
// import { Settings, Type, Square, Layout, Palette } from 'lucide-react';
// import TypographyControls from './controls/TypographyControls';
// import ButtonControls from './controls/ButtonControls';
// import GalleryControls from './controls/GalleryControls';
// import LayoutControls from './controls/LayoutControls';
// import StrokeControls from './controls/StrokeControls';

// export default function EditorPanel({ config, updateConfig, selectedTab, setSelectedTab }) {
//   const tabs = useMemo(
//     () => [
//       { id: 'typography', icon: Type, label: 'Typography' },
//       { id: 'button', icon: Square, label: 'Button' },
//       { id: 'gallery', icon: null, label: 'Gallery' },
//       { id: 'layout', icon: Layout, label: 'Layout' },
//       { id: 'stroke', icon: Palette, label: 'Stroke' },
//     ],
//     []
//   );

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-24">
//       <div className="border-b border-gray-200 p-4">
//         <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
//           <Settings className="w-5 h-5" />
//           Customization Panel
//         </h2>
//       </div>

//       <div className="border-b border-gray-200 flex overflow-x-auto">
//         {tabs.map(tab => {
//           const TabIcon = tab.icon;
//           return (
//             <button
//               key={tab.id}
//               onClick={() => setSelectedTab(tab.id)}
//               className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
//                 selectedTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               {TabIcon ? <TabIcon className="w-4 h-4" /> : <span className="w-4 h-4 inline-block" />}
//               {tab.label}
//             </button>
//           );
//         })}
//       </div>

//       <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
//         {selectedTab === 'typography' && (
//           <TypographyControls typography={config.typography} updateConfig={updateConfig} />
//         )}
//         {selectedTab === 'button' && <ButtonControls button={config.button} updateConfig={updateConfig} />}
//         {selectedTab === 'gallery' && <GalleryControls gallery={config.gallery} updateConfig={updateConfig} />}
//         {selectedTab === 'layout' && <LayoutControls layoutCfg={config.layout} updateConfig={updateConfig} />}
//         {selectedTab === 'stroke' && <StrokeControls stroke={config.stroke} updateConfig={updateConfig} />}
//       </div>
//     </div>
//   );
// }


// import React, { useMemo } from 'react';
// import { Settings, Type, Square, Layout, Palette } from 'lucide-react';
// import TypographyControls from './controls/TypographyControls';
// import ButtonControls from './controls/ButtonControls';
// import GalleryControls from './controls/GalleryControls';
// import LayoutControls from './controls/LayoutControls';
// import StrokeControls from './controls/StrokeControls';

// export default function EditorPanel({ config, updateConfig, selectedTab, setSelectedTab }) {
//   const tabs = useMemo(
//     () => [
//       { id: 'typography', icon: Type, label: 'Typography' },
//       { id: 'button', icon: Square, label: 'Button' },
//       { id: 'gallery', icon: null, label: 'Gallery' },
//       { id: 'layout', icon: Layout, label: 'Layout' },
//       { id: 'stroke', icon: Palette, label: 'Stroke' },
//     ],
//     []
//   );

//   return (
//     <div className="flex flex-col h-full bg-gray-50 rounded-lg shadow-lg border border-gray-200 overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center gap-2 p-4 bg-white border-b border-gray-200">
//         <Settings className="w-6 h-6 text-blue-600" />
//         <h2 className="text-xl font-semibold text-gray-900">Customization Panel</h2>
//       </div>

//       {/* Tabs */}
//       <div className="flex border-b border-gray-200 overflow-x-auto bg-gray-50">
//         {tabs.map(tab => {
//           const TabIcon = tab.icon;
//           return (
//             <button
//               key={tab.id}
//               onClick={() => setSelectedTab(tab.id)}
//               className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all whitespace-nowrap rounded-t-lg ${
//                 selectedTab === tab.id
//                   ? 'bg-white text-blue-600 shadow-md'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               {TabIcon ? <TabIcon className="w-4 h-4" /> : <span className="w-4 h-4 inline-block" />}
//               {tab.label}
//             </button>
//           );
//         })}
//       </div>

//       {/* Tab Content */}
//       <div className="flex-1 overflow-auto p-4 space-y-6 bg-gray-50">
//         {selectedTab === 'typography' && (
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <TypographyControls typography={config.typography} updateConfig={updateConfig} />
//           </div>
//         )}
//         {selectedTab === 'button' && (
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <ButtonControls button={config.button} updateConfig={updateConfig} />
//           </div>
//         )}
//         {selectedTab === 'gallery' && (
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <GalleryControls gallery={config.gallery} updateConfig={updateConfig} />
//           </div>
//         )}
//         {selectedTab === 'layout' && (
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <LayoutControls layoutCfg={config.layout} updateConfig={updateConfig} />
//           </div>
//         )}
//         {selectedTab === 'stroke' && (
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <StrokeControls stroke={config.stroke} updateConfig={updateConfig} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useMemo } from 'react';
import { Settings, Type, Square, Layout, Palette } from 'lucide-react';
import TypographyControls from './controls/TypographyControls';
import ButtonControls from './controls/ButtonControls';
import GalleryControls from './controls/GalleryControls';
import LayoutControls from './controls/LayoutControls';
import StrokeControls from './controls/StrokeControls';

export default function EditorPanel({ config, updateConfig, selectedTab, setSelectedTab }) {
  const tabs = useMemo(
    () => [
      { id: 'typography', icon: Type, label: 'Typography' },
      { id: 'button', icon: Square, label: 'Button' },
      { id: 'gallery', icon: null, label: 'Gallery' },
      { id: 'layout', icon: Layout, label: 'Layout' },
      { id: 'stroke', icon: Palette, label: 'Stroke' },
    ],
    []
  );

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex justify-center items-center gap-3 p-5 bg-white border-b border-gray-200">
  <Settings className="w-6 h-6 text-blue-600" />
  <h1 className="text-lg font-semibold text-gray-900 m-0">
    Customization Panel
  </h1>
</div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 overflow-x-auto bg-gray-50">
        {tabs.map(tab => {
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all whitespace-nowrap rounded-t-lg ${
                selectedTab === tab.id
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {TabIcon ? <TabIcon className="w-5 h-5" /> : <span className="w-5 h-5 inline-block" />}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-auto p-5 space-y-6 bg-gray-50">
        {selectedTab === 'typography' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <TypographyControls typography={config.typography} updateConfig={updateConfig} />
          </div>
        )}
        {selectedTab === 'button' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ButtonControls button={config.button} updateConfig={updateConfig} />
          </div>
        )}
        {selectedTab === 'gallery' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <GalleryControls gallery={config.gallery} updateConfig={updateConfig} />
          </div>
        )}
        {selectedTab === 'layout' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <LayoutControls layoutCfg={config.layout} updateConfig={updateConfig} />
          </div>
        )}
        {selectedTab === 'stroke' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <StrokeControls stroke={config.stroke} updateConfig={updateConfig} />
          </div>
        )}
      </div>
    </div>
  );
}
