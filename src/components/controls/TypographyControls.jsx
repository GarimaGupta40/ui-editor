// import React from "react";

// const FONT_FAMILIES = ["Inter", "Roboto", "Poppins", "System"];

// export default function TypographyControls({ typography, updateConfig }) {
//   const handleChange = (key, value) => {
//     if (typeof updateConfig === "function") {
//       updateConfig("typography", key, value);
//     } else {
//       console.error("updateConfig is not a function");
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6">
//       {/* Font Family */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">Font Family</label>
//         <select
//           value={typography.fontFamily || "Inter"}
//           onChange={(e) => handleChange("fontFamily", e.target.value)}
//           className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         >
//           {FONT_FAMILIES.map((f) => (
//             <option key={f} value={f}>
//               {f}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Font Weight */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">Font Weight</label>
//         <input
//           type="range"
//           min="300"
//           max="800"
//           step="100"
//           value={typography.fontWeight ?? 400}
//           onChange={(e) => handleChange("fontWeight", Number(e.target.value))}
//           className="w-full accent-blue-600 cursor-pointer"
//         />
//         <div className="flex justify-between text-sm text-gray-600 mt-2">
//           <span>Current: {typography.fontWeight ?? 400}</span>
//           <span>300 - 800</span>
//         </div>
//       </div>

//       {/* Base Font Size */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">Base Font Size (px)</label>
//         <input
//           type="number"
//           value={typography.fontSize ?? 16}
//           min={10}
//           max={60}
//           onChange={(e) => handleChange("fontSize", Number(e.target.value))}
//           className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>

//       {/* Heading Size */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">Heading Size (px)</label>
//         <input
//           type="number"
//           value={typography.headingFontSize ?? 24}
//           min={12}
//           max={72}
//           onChange={(e) => handleChange("headingFontSize", Number(e.target.value))}
//           className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>

//       {/* Label Size */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">Label Size (px)</label>
//         <input
//           type="number"
//           value={typography.labelFontSize ?? 14}
//           min={8}
//           max={24}
//           onChange={(e) => handleChange("labelFontSize", Number(e.target.value))}
//           className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>
//     </div>
//   );
// }


// import React from "react";

// const FONT_FAMILIES = [
//   "Inter",
//   "Roboto",
//   "Poppins",
//   "System",
//   "Lato",
//   "Open Sans",
//   "Montserrat",
//   "Nunito",
//   "Raleway",
//   "Merriweather",
//   "Playfair Display",
//   "Oswald",
// ];

// export default function TypographyControls({ typography, updateConfig }) {
//   const handleChange = (key, value) => {
//     if (typeof updateConfig === "function") {
//       updateConfig("typography", key, value);
//     } else {
//       console.error("updateConfig is not a function");
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6">
//       {/* Font Family */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">
//           Font Family
//         </label>
//         <select
//           value={typography.fontFamily || "Inter"}
//           onChange={(e) => handleChange("fontFamily", e.target.value)}
//           className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           style={{ fontFamily: typography.fontFamily }}
//         >
//           {FONT_FAMILIES.map((f) => (
//             <option key={f} value={f} style={{ fontFamily: f }}>
//               {f}
//             </option>
//           ))}
//         </select>

//         <p
//           className="text-gray-700 mt-3 text-base"
//           style={{ fontFamily: typography.fontFamily || "Inter" }}
//         >
//           Preview Text – The quick brown fox jumps over the lazy dog.
//         </p>
//       </div>

//       {/* Font Weight */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">
//           Font Weight
//         </label>
//         <input
//           type="range"
//           min="300"
//           max="800"
//           step="100"
//           value={typography.fontWeight ?? 400}
//           onChange={(e) => handleChange("fontWeight", Number(e.target.value))}
//           className="w-full accent-blue-600 cursor-pointer"
//         />
//         <div className="flex justify-between text-sm text-gray-600 mt-2">
//           <span>Current: {typography.fontWeight ?? 400}</span>
//           <span>300 - 800</span>
//         </div>
//       </div>

//       {/* Base Font Size */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">
//           Base Font Size (px)
//         </label>
//         <input
//           type="number"
//           value={typography.fontSize ?? 16}
//           min={10}
//           max={60}
//           onChange={(e) => handleChange("fontSize", Number(e.target.value))}
//           className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>

//       {/* Heading Size */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">
//           Heading Size (px)
//         </label>
//         <input
//           type="number"
//           value={typography.headingFontSize ?? 24}
//           min={12}
//           max={72}
//           onChange={(e) =>
//             handleChange("headingFontSize", Number(e.target.value))
//           }
//           className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>

//       {/* Label Size */}
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <label className="block text-base font-semibold text-gray-800 mb-2">
//           Label Size (px)
//         </label>
//         <input
//           type="number"
//           value={typography.labelFontSize ?? 14}
//           min={8}
//           max={24}
//           onChange={(e) =>
//             handleChange("labelFontSize", Number(e.target.value))
//           }
//           className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>
//     </div>
//   );
// }


import React from "react";

const FONT_FAMILIES = [
  "Inter",
  "Roboto",
  "Poppins",
  "System",
  "Lato",
  "Open Sans",
  "Montserrat",
  "Nunito",
  "Raleway",
  "Merriweather",
  "Playfair Display",
  "Oswald",
];

export default function TypographyControls({ typography, updateConfig }) {
  const handleChange = (key, value) => {
    if (typeof updateConfig === "function") {
      updateConfig("typography", key, value);
    } else {
      console.error("updateConfig is not a function");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Font Family */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <label className="block text-base font-semibold text-gray-800 mb-2">
          Font Family
        </label>
        <select
          value={typography.fontFamily || "Inter"}
          onChange={(e) => handleChange("fontFamily", e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {FONT_FAMILIES.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>

        {/* NOTE: removed applying typography.fontFamily here to avoid changing UI.
            If you want an isolated preview inside this card, we can render a small
            element that uses the font but scoped only to that element. */}
        <p className="text-gray-700 mt-3 text-base">
          Preview Text – The quick brown fox jumps over the lazy dog.
        </p>
      </div>

      {/* Font Weight */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <label className="block text-base font-semibold text-gray-800 mb-2">
          Font Weight
        </label>
        <input
          type="range"
          min="300"
          max="800"
          step="100"
          value={typography.fontWeight ?? 400}
          onChange={(e) => handleChange("fontWeight", Number(e.target.value))}
          className="w-full accent-blue-600 cursor-pointer"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Current: {typography.fontWeight ?? 400}</span>
          <span>300 - 800</span>
        </div>
      </div>

      {/* Base Font Size */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <label className="block text-base font-semibold text-gray-800 mb-2">
          Base Font Size (px)
        </label>
        <input
          type="number"
          value={typography.fontSize ?? 16}
          min={10}
          max={60}
          onChange={(e) => handleChange("fontSize", Number(e.target.value))}
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Heading Size */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <label className="block text-base font-semibold text-gray-800 mb-2">
          Heading Size (px)
        </label>
        <input
          type="number"
          value={typography.headingFontSize ?? 24}
          min={12}
          max={72}
          onChange={(e) =>
            handleChange("headingFontSize", Number(e.target.value))
          }
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Label Size */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <label className="block text-base font-semibold text-gray-800 mb-2">
          Label Size (px)
        </label>
        <input
          type="number"
          value={typography.labelFontSize ?? 14}
          min={8}
          max={24}
          onChange={(e) =>
            handleChange("labelFontSize", Number(e.target.value))
          }
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
