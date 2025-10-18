// import React, { useEffect, useState, useCallback } from 'react';
// import EditorPanel from './components/EditorPanel';
// import PreviewPanel from './components/PreviewPanel';
// import LayoutSwitcher from './components/LayoutSwitcher';
// import ExportButton from './components/ExportButton';

// const DEFAULT_CONFIG = {
//   typography: {
//     fontFamily: 'Inter',
//     fontWeight: 500,
//     fontSize: 18,
//     headingFontSize: 28,
//     labelFontSize: 16
//   },
//   button: {
//     borderRadius: 4,
//     shadow: 'medium',
//     alignment: 'center',
//     backgroundColor: '#cb5757',
//     textColor: '#FFFFFF'
//   },
//   gallery: {
//     alignment: 'grid-center',
//     spacing: 6,
//     borderRadius: 8
//   },
//   layout: {
//     cardCornerRadius: 12,
//     containerPadding: 24,
//     backgroundColor: '#ecb6b6'
//   },
//   stroke: {
//     color: '#000000',
//     weight: 3
//   }
// };

// // LocalStorage Hook
// function useLocalStorageState(key, initial) {
//   const [state, setState] = useState(() => {
//     try {
//       const raw = localStorage.getItem(key);
//       return raw ? JSON.parse(raw) : initial;
//     } catch {
//       return initial;
//     }
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem(key, JSON.stringify(state));
//     } catch {}
//   }, [key, state]);

//   return [state, setState];
// }

// export default function App() {
//   const [layout, setLayout] = useLocalStorageState('ui:layout', 'desktop');
//   const [config, setConfig] = useLocalStorageState('ui:config', DEFAULT_CONFIG);
//   const [selectedTab, setSelectedTab] = useLocalStorageState('ui:selectedTab', 'typography');
//   const [darkMode, setDarkMode] = useLocalStorageState('ui:darkMode', false);

//   // Apply dark mode to <html>
//   useEffect(() => {
//     const html = document.documentElement;
//     if (darkMode) html.classList.add('dark');
//     else html.classList.remove('dark');
//   }, [darkMode]);

//   const updateConfig = useCallback(
//     (category, key, value) => {
//       setConfig(prev => ({
//         ...prev,
//         [category]: {
//           ...prev[category],
//           [key]: value
//         }
//       }));
//     },
//     [setConfig]
//   );

//   const resetToDefaults = () => {
//     if (confirm('Reset configuration to defaults?')) {
//       setConfig(DEFAULT_CONFIG);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 text-gray-900 dark:text-gray-100">
//       {/* Header */}
//       <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-start justify-between">
//           {/* Left: Title */}
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dynamic UI Editor</h1>
//             <p className="text-[22px] text-gray-500 dark:text-gray-300 mt-1">
//               Ikarus 3D - Furniture Configurator
//             </p>
//           </div>

//           {/* Right: Buttons */}
//           <div className="flex flex-col items-end">
//             <div className="flex items-center gap-2">
//               <LayoutSwitcher layout={layout} setLayout={setLayout} />
//               <ExportButton config={config} />
//             </div>

//             {/* Reset button */}
//  {/* Reset Button */}
// <button
//   onClick={resetToDefaults}
//   style={{
//     backgroundColor: '#e53e3e',
//     color: 'white',
//     padding: '8px 16px', // very large padding
//     fontSize: '14px',     // large text
//     borderRadius: '2px', // rounded
//   }}
// >
//   Reset
// </button>

// {/* Dark Mode Toggle */}
// <button
//   onClick={() => setDarkMode(prev => !prev)}
//   style={{
//     padding: '8px 16px',
//     fontSize: '14px',
//     borderRadius: '2px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '16px', // space between icon and text
//     backgroundColor: darkMode ? '#333' : '#ddd',
//     color: darkMode ? '#facc15' : '#111',
//   }}
// >
//   {darkMode ? '🌙 Dark' : '🌞 Light'}
// </button>



//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex max-w-7xl mx-auto p-4 gap-6">
//         {/* Left Panel */}
//         <div className="w-1/3 h-[calc(100vh-96px)] overflow-auto sticky top-24">
//           <EditorPanel
//             config={config}
//             updateConfig={updateConfig}
//             selectedTab={selectedTab}
//             setSelectedTab={setSelectedTab}
//           />
//         </div>

//         {/* Right Panel */}
//         <div className="w-2/3 h-[calc(100vh-96px)] overflow-auto">
//           <PreviewPanel layout={layout} config={config} />
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState, useCallback } from 'react';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import LayoutSwitcher from './components/LayoutSwitcher';
import ExportButton from './components/ExportButton';

const DEFAULT_CONFIG = {
  typography: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 18,
    headingFontSize: 28,
    labelFontSize: 16
  },
  button: {
    borderRadius: 4,
    shadow: 'medium',
    alignment: 'center',
    backgroundColor: '#cb5757',
    textColor: '#FFFFFF'
  },
  gallery: {
    alignment: 'grid-center',
    spacing: 6,
    borderRadius: 8
  },
  layout: {
    cardCornerRadius: 12,
    containerPadding: 24,
    backgroundColor: '#ecb6b6'
  },
  stroke: {
    color: '#000000',
    weight: 3
  }
};

// LocalStorage Hook
function useLocalStorageState(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  return [state, setState];
}

export default function App() {
  const [layout, setLayout] = useLocalStorageState('ui:layout', 'desktop');
  const [config, setConfig] = useLocalStorageState('ui:config', DEFAULT_CONFIG);
  const [selectedTab, setSelectedTab] = useLocalStorageState('ui:selectedTab', 'typography');
  const [darkMode, setDarkMode] = useLocalStorageState('ui:darkMode', false);

  // Apply dark mode to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add('dark');
    else html.classList.remove('dark');
  }, [darkMode]);

  const updateConfig = useCallback(
    (category, key, value) => {
      setConfig(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [key]: value
        }
      }));
    },
    [setConfig]
  );

  // Reset defaults and switch to light mode
  const resetToDefaults = () => {
    if (confirm('Reset configuration to defaults?')) {
      setConfig(DEFAULT_CONFIG);
      setDarkMode(false); // turn off dark mode
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-start justify-between">
          {/* Left: Title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dynamic UI Editor</h1>
            <p className="text-[22px] text-gray-500 dark:text-gray-300 mt-1">
              Ikarus 3D - Furniture Configurator
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              <LayoutSwitcher layout={layout} setLayout={setLayout} />
              <ExportButton config={config} />
            </div>

            {/* Reset Button */}
            <button
              onClick={resetToDefaults}
              style={{
                backgroundColor: '#e53e3e',
                color: 'white',
                padding: '8px 8px',
                fontSize: '14px',
                borderRadius: '5px',
                fontWeight: 'bold',
              }}
            >
              Reset
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(prev => !prev)}
              style={{
                padding: '8px 8px',
                fontSize: '14px',
                borderRadius: '5px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                backgroundColor: darkMode ? '#333' : '#ddd',
                color: darkMode ? '#facc15' : '#111',
              }}
            >
              {darkMode ? (
                <>
                  <span style={{ fontSize: '14px' }}>🌙</span>
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: '14px' }}>🌞</span>
                  <span>Light</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto p-4 gap-6">
        {/* Left Panel */}
        <div className="w-1/3 h-[calc(100vh-96px)] overflow-auto sticky top-24">
          <EditorPanel
            config={config}
            updateConfig={updateConfig}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>

        {/* Right Panel */}
        <div className="w-2/3 h-[calc(100vh-96px)] overflow-auto">
          <PreviewPanel layout={layout} config={config} />
        </div>
      </div>
    </div>
  );
}
