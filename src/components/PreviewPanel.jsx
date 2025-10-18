// // import React from "react";
// // import { getShadowStyle } from "../utils/shadows";
// // import { Image as ImageIcon } from "lucide-react";

// // export default function PreviewPanel({ layout, config }) {
// //   const isMobile = layout === "mobile";

// //   // ✅ Button Style
// //   const btnStyle = {
// //     borderRadius: `${config.button.borderRadius}px`,
// //     boxShadow: getShadowStyle(config.button.shadow),
// //     backgroundColor: config.button.backgroundColor,
// //     color: config.button.textColor,
// //     padding: isMobile ? "12px 18px" : "10px 16px",
// //     display: "inline-block",
// //     fontFamily: config.typography.fontFamily,
// //     fontSize: isMobile
// //       ? `${config.typography.labelFontSize + 2}px`
// //       : `${config.typography.labelFontSize}px`,
// //     width: isMobile ? "100%" : "auto",
// //     border: "none",
// //     cursor: "pointer",
// //     transition: "all 0.3s ease",
// //   };

// //   // ✅ Card Style
// //   const cardStyle = {
// //     backgroundColor: config.layout.backgroundColor,
// //     borderRadius: `${config.layout.cardCornerRadius}px`,
// //     padding: isMobile
// //       ? `${config.layout.containerPadding / 1.5}px`
// //       : `${config.layout.containerPadding}px`,
// //     border: `${config.stroke.weight}px solid ${config.stroke.color}`,
// //     fontFamily: config.typography.fontFamily,
// //     fontWeight: config.typography.fontWeight,
// //     fontSize: `${config.typography.fontSize}px`,
// //     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
// //     transition: "all 0.3s ease",
// //   };

// //   const galleryColumns = isMobile ? 2 : 3;

// //   // ✅ Placeholder Style
// //   const getPlaceholderStyle = (i) => ({
// //     borderRadius: `${config.gallery.borderRadius}px`,
// //     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
// //     background: [
// //       "linear-gradient(135deg,#f7ede2,#f0d9c3)",
// //       "linear-gradient(135deg,#e3f0f8,#c9e0ef)",
// //       "linear-gradient(135deg,#ece7f7,#d6cdef)",
// //       "linear-gradient(135deg,#fbe6e2,#f5cfc8)",
// //       "linear-gradient(135deg,#e7f5e4,#c6ebc4)",
// //     ][i % 5],
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //   });

// //   return (
// //     <div
// //       className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
// //       // ✅ Apply font family only to preview container
// //       style={{
// //         fontFamily: config.typography.fontFamily,
// //         transition: "font-family 0.3s ease, font-size 0.3s ease",
// //       }}
// //     >
// //       <h1 className="text-lg font-semibold text-gray-900 mb-4 w-full text-center">
// //         Live Preview
// //       </h1>

// //       <div
// //         className={`mx-auto transition-all duration-300 ${
// //           isMobile ? "max-w-[390px]" : "max-w-5xl"
// //         }`}
// //       >
// //         <div
// //           className={`overflow-hidden ${
// //             isMobile
// //               ? "rounded-[24px] border border-gray-300 shadow-inner"
// //               : "rounded-[32px]"
// //           }`}
// //           style={cardStyle}
// //         >
// //           {isMobile ? (
// //             // 📱 MOBILE VIEW
// //             <div className="flex flex-col items-center gap-6">
// //               {/* Main Image */}
// //               <div
// //                 className="aspect-square hover:scale-[1.02] hover:shadow-md transition-all"
// //                 style={{
// //                   width: "85%",
// //                   ...getPlaceholderStyle(0),
// //                 }}
// //               >
// //                 <ImageIcon className="w-8 h-8 text-gray-600 opacity-70" />
// //               </div>

// //               {/* Product Info */}
// //               <div className="text-center space-y-2 px-3">
// //                 <h3
// //                   style={{
// //                     fontSize: `${Math.max(
// //                       config.typography.headingFontSize - 1,
// //                       18
// //                     )}px`,
// //                     fontWeight: config.typography.fontWeight,
// //                     textAlign: "center",
// //                   }}
// //                 >
// //                   Elegant Living
// //                 </h3>
// //                 <p
// //                   style={{
// //                     fontSize: `${Math.max(config.typography.fontSize - 1, 13)}px`,
// //                     color: "#555",
// //                     textAlign: "center",
// //                     lineHeight: "1.6",
// //                   }}
// //                 >
// //                   Discover premium handcrafted furniture designed to bring style,
// //                   comfort, and elegance to your home. Elevate your interiors with
// //                   furniture that embodies simplicity and sophistication. Each piece
// //                   is a statement of clean lines, premium materials, and enduring
// //                   comfort. Designed for modern homes, our collection balances
// //                   aesthetics with practicality. Whether you prefer subtle charm or
// //                   bold elegance, we have something for every taste. Discover
// //                   furniture that transforms your home into a space of beauty and
// //                   harmony.
// //                 </p>
// //               </div>

// //               {/* Gallery */}
// //               <div
// //                 className="grid w-full"
// //                 style={{
// //                   marginTop: `${config.gallery.spacing * 1.5}px`,
// //                   rowGap: `${config.gallery.spacing + 10}px`,
// //                   gridTemplateColumns: `repeat(${galleryColumns}, 1fr)`,
// //                   gap: `${config.gallery.spacing + 8}px`,
// //                   justifyItems:
// //                     config.gallery.alignment === "grid-center"
// //                       ? "center"
// //                       : config.gallery.alignment === "grid-right"
// //                       ? "end"
// //                       : "start",
// //                 }}
// //               >
// //                 {[2, 3, 4, 5].map((i) => (
// //                   <div
// //                     key={i}
// //                     className="aspect-square w-full hover:scale-105 hover:shadow-lg transition-all"
// //                     style={getPlaceholderStyle(i)}
// //                   >
// //                     <ImageIcon className="w-6 h-6 text-gray-600 opacity-60" />
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Button */}
// //               <div
// //                 className="w-full mt-4"
// //                 style={{ textAlign: config.button.alignment }}
// //               >
// //                 <button
// //                   style={btnStyle}
// //                   onMouseEnter={(e) => {
// //                     e.target.style.transform = "scale(1.05)";
// //                     e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.target.style.transform = "scale(1)";
// //                     e.target.style.boxShadow = getShadowStyle(
// //                       config.button.shadow
// //                     );
// //                   }}
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           ) : (
// //             // 💻 DESKTOP VIEW
// //             <div className="flex gap-10 items-start">
// //               {/* Gallery Section */}
// //               <div
// //                 style={{
// //                   flex: "1 1 40%",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <div
// //                   className="aspect-square mx-auto mb-8 hover:scale-[1.03] hover:shadow-md transition-all"
// //                   style={{
// //                     width: "50%",
// //                     ...getPlaceholderStyle(0),
// //                   }}
// //                 >
// //                   <ImageIcon className="w-10 h-10 text-gray-600 opacity-70" />
// //                 </div>

// //                 <div
// //                   className="grid"
// //                   style={{
// //                     gridTemplateColumns: "repeat(3, 1fr)",
// //                     gap: `${config.gallery.spacing + 12}px`,
// //                     marginTop: "12px",
// //                     padding: "0 8%",
// //                   }}
// //                 >
// //                   {[2, 3, 4, 5, 6, 7].map((i) => (
// //                     <div
// //                       key={i}
// //                       className="aspect-square w-full hover:scale-105 hover:shadow-lg transition-all"
// //                       style={{
// //                         ...getPlaceholderStyle(i),
// //                         width: "90%",
// //                       }}
// //                     >
// //                       <ImageIcon className="w-6 h-6 text-gray-600 opacity-60" />
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Content Section */}
// //               <div
// //                 style={{
// //                   flex: "1 1 60%",
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   justifyContent: "center",
// //                   gap: "18px",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <h3
// //                   style={{
// //                     fontSize: `${config.typography.headingFontSize}px`,
// //                     marginBottom: 8,
// //                     color: "#222",
// //                     fontFamily: config.typography.fontFamily,
// //                     fontWeight: config.typography.fontWeight,
// //                   }}
// //                 >
// //                   Elegant Living
// //                 </h3>
// //                 <p
// //                   style={{
// //                     fontFamily: config.typography.fontFamily,
// //                     fontSize: `${config.typography.fontSize}px`,
// //                     color: "#555",
// //                     marginBottom: 16,
// //                     lineHeight: "1.6",
// //                   }}
// //                 >
// //                   Discover premium handcrafted furniture designed to bring style,
// //                   comfort, and elegance to your home. Elevate your interiors with
// //                   furniture that embodies simplicity and sophistication. Each piece
// //                   is a statement of clean lines, premium materials, and enduring
// //                   comfort. Designed for modern homes, our collection balances
// //                   aesthetics with practicality. Whether you prefer subtle charm or
// //                   bold elegance, we have something for every taste. Discover
// //                   furniture that transforms your home into a space of beauty and
// //                   harmony.
// //                 </p>

// //                 <div style={{ textAlign: config.button.alignment }}>
// //                   <button
// //                     style={btnStyle}
// //                     onMouseEnter={(e) => {
// //                       e.target.style.transform = "scale(1.05)";
// //                       e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.target.style.transform = "scale(1)";
// //                       e.target.style.boxShadow = getShadowStyle(
// //                         config.button.shadow
// //                       );
// //                     }}
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import { getShadowStyle } from "../utils/shadows";

// // ✅ Furniture images (replace URLs with your preferred ones)
// const furnitureImages = [
//   "https://images.unsplash.com/photo-1616628182503-6539c7f6d0a3?w=800", // Chair
//   "https://images.unsplash.com/photo-1598300056393-4f376d5be2c6?w=800", // Sofa
//   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", // Table
//   "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800", // Lamp
//   "https://images.unsplash.com/photo-1616627452150-d9d858e7b9c1?w=800", // Bed
//   "https://images.unsplash.com/photo-1615874959474-d609e1c5d4c8?w=800", // Wardrobe
//   "https://images.unsplash.com/photo-1616627891448-b03055b7efdb?w=800", // Shelf
// ];

// export default function PreviewPanel({ layout, config }) {
//   const isMobile = layout === "mobile";

//   const btnStyle = {
//     borderRadius: `${config.button.borderRadius}px`,
//     boxShadow: getShadowStyle(config.button.shadow),
//     backgroundColor: config.button.backgroundColor,
//     color: config.button.textColor,
//     padding: isMobile ? "12px 18px" : "10px 16px",
//     display: "inline-block",
//     fontFamily: config.typography.fontFamily,
//     fontSize: isMobile
//       ? `${config.typography.labelFontSize + 2}px`
//       : `${config.typography.labelFontSize}px`,
//     width: isMobile ? "100%" : "auto",
//     border: "none",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   };

//   const cardStyle = {
//     backgroundColor: config.layout.backgroundColor,
//     borderRadius: `${config.layout.cardCornerRadius}px`,
//     padding: isMobile
//       ? `${config.layout.containerPadding / 1.5}px`
//       : `${config.layout.containerPadding}px`,
//     border: `${config.stroke.weight}px solid ${config.stroke.color}`,
//     fontFamily: config.typography.fontFamily,
//     fontWeight: config.typography.fontWeight,
//     fontSize: `${config.typography.fontSize}px`,
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     transition: "all 0.3s ease",
//   };

//   const galleryColumns = isMobile ? 2 : 3;

//   return (
//     <div
//       className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
//       style={{
//         fontFamily: config.typography.fontFamily,
//         transition: "font-family 0.3s ease, font-size 0.3s ease",
//       }}
//     >
//       <h1 className="text-lg font-semibold text-gray-900 mb-4 w-full text-center">
//         Live Preview
//       </h1>

//       <div
//         className={`mx-auto transition-all duration-300 ${
//           isMobile ? "max-w-[390px]" : "max-w-5xl"
//         }`}
//       >
//         <div
//           className={`overflow-hidden ${
//             isMobile
//               ? "rounded-[24px] border border-gray-300 shadow-inner"
//               : "rounded-[32px]"
//           }`}
//           style={cardStyle}
//         >
//           {isMobile ? (
//             <div className="flex flex-col items-center gap-6">
//               {/* Main Image */}
//               <div className="aspect-square hover:scale-[1.02] hover:shadow-md transition-all w-85%">
//                 <img
//                   src={furnitureImages[0]}
//                   alt="Furniture main"
//                   style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: `${config.gallery.borderRadius}px` }}
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="text-center space-y-2 px-3">
//                 <h3
//                   style={{
//                     fontSize: `${Math.max(config.typography.headingFontSize - 1, 18)}px`,
//                     fontWeight: config.typography.fontWeight,
//                     textAlign: "center",
//                   }}
//                 >
//                   Elegant Living
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: `${Math.max(config.typography.fontSize - 1, 13)}px`,
//                     color: "#555",
//                     textAlign: "center",
//                     lineHeight: "1.6",
//                   }}
//                 >
//                   Discover premium handcrafted furniture designed to bring style, comfort, and elegance to your home. Elevate your interiors with furniture that embodies simplicity and sophistication. Each piece is a statement of clean lines, premium materials, and enduring comfort. Designed for modern homes, our collection balances aesthetics with practicality. Whether you prefer subtle charm or bold elegance, we have something for every taste. Discover furniture that transforms your home into a space of beauty and harmony.
//                 </p>
//               </div>

//               {/* Gallery */}
//               <div
//                 className="grid w-full"
//                 style={{
//                   marginTop: `${config.gallery.spacing * 1.5}px`,
//                   rowGap: `${config.gallery.spacing + 10}px`,
//                   gridTemplateColumns: `repeat(${galleryColumns}, 1fr)`,
//                   gap: `${config.gallery.spacing + 8}px`,
//                   justifyItems:
//                     config.gallery.alignment === "grid-center"
//                       ? "center"
//                       : config.gallery.alignment === "grid-right"
//                       ? "end"
//                       : "start",
//                 }}
//               >
//                 {furnitureImages.slice(1, 5).map((img, i) => (
//                   <div
//                     key={i}
//                     className="aspect-square w-full hover:scale-105 hover:shadow-lg transition-all"
//                     style={{ borderRadius: `${config.gallery.borderRadius}px` }}
//                   >
//                     <img
//                       src={img}
//                       alt={`Furniture ${i + 1}`}
//                       style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: `${config.gallery.borderRadius}px` }}
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Button */}
//               <div className="w-full mt-4" style={{ textAlign: config.button.alignment }}>
//                 <button
//                   style={btnStyle}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = "scale(1.05)";
//                     e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = "scale(1)";
//                     e.target.style.boxShadow = getShadowStyle(config.button.shadow);
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="flex gap-10 items-start">
//               {/* Gallery Section */}
//               <div style={{ flex: "1 1 40%", textAlign: "center" }}>
//                 <div className="aspect-square mx-auto mb-8 hover:scale-[1.03] hover:shadow-md transition-all" style={{ width: "50%" }}>
//                   <img
//                     src={furnitureImages[0]}
//                     alt="Furniture main"
//                     style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: `${config.gallery.borderRadius}px` }}
//                   />
//                 </div>

//                 <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: `${config.gallery.spacing + 12}px`, marginTop: "12px", padding: "0 8%" }}>
//                   {furnitureImages.slice(1, 7).map((img, i) => (
//                     <div
//                       key={i}
//                       className="aspect-square w-full hover:scale-105 hover:shadow-lg transition-all"
//                       style={{ width: "90%", borderRadius: `${config.gallery.borderRadius}px` }}
//                     >
//                       <img
//                         src={img}
//                         alt={`Furniture ${i + 1}`}
//                         style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: `${config.gallery.borderRadius}px` }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div style={{ flex: "1 1 60%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "18px", textAlign: "center" }}>
//                 <h3
//                   style={{
//                     fontSize: `${config.typography.headingFontSize}px`,
//                     marginBottom: 8,
//                     color: "#222",
//                     fontFamily: config.typography.fontFamily,
//                     fontWeight: config.typography.fontWeight,
//                   }}
//                 >
//                   Elegant Living
//                 </h3>
//                 <p
//                   style={{
//                     fontFamily: config.typography.fontFamily,
//                     fontSize: `${config.typography.fontSize}px`,
//                     color: "#555",
//                     marginBottom: 16,
//                     lineHeight: "1.6",
//                   }}
//                 >
//                   Discover premium handcrafted furniture designed to bring style, comfort, and elegance to your home. Elevate your interiors with furniture that embodies simplicity and sophistication. Each piece is a statement of clean lines, premium materials, and enduring comfort. Designed for modern homes, our collection balances aesthetics with practicality. Whether you prefer subtle charm or bold elegance, we have something for every taste. Discover furniture that transforms your home into a space of beauty and harmony.
//                 </p>

//                 <div style={{ textAlign: config.button.alignment }}>
//                   <button
//                     style={btnStyle}
//                     onMouseEnter={(e) => {
//                       e.target.style.transform = "scale(1.05)";
//                       e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.transform = "scale(1)";
//                       e.target.style.boxShadow = getShadowStyle(config.button.shadow);
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { getShadowStyle } from "../utils/shadows";

// export default function PreviewPanel({ layout, config }) {
//   const isMobile = layout === "mobile";

//   // ✅ Button Style
//   const btnStyle = {
//     borderRadius: `${config.button.borderRadius}px`,
//     boxShadow: getShadowStyle(config.button.shadow),
//     backgroundColor: config.button.backgroundColor,
//     color: config.button.textColor,
//     padding: isMobile ? "12px 18px" : "10px 16px",
//     display: "inline-block",
//     fontFamily: config.typography.fontFamily,
//     fontSize: isMobile
//       ? `${config.typography.labelFontSize + 2}px`
//       : `${config.typography.labelFontSize}px`,
//     width: isMobile ? "100%" : "auto",
//     border: "none",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   };

//   // ✅ Card Style
//   const cardStyle = {
//     backgroundColor: config.layout.backgroundColor,
//     borderRadius: `${config.layout.cardCornerRadius}px`,
//     padding: isMobile
//       ? `${config.layout.containerPadding / 1.5}px`
//       : `${config.layout.containerPadding}px`,
//     border: `${config.stroke.weight}px solid ${config.stroke.color}`,
//     fontFamily: config.typography.fontFamily,
//     fontWeight: config.typography.fontWeight,
//     fontSize: `${config.typography.fontSize}px`,
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     transition: "all 0.3s ease",
//   };

//   const galleryColumns = isMobile ? 2 : 3;

//   // ✅ Furniture Images
//   const furnitureImages = [
//          "/images/fur_main.jpg",
//          "/images/fur1.jpg",
//          "/images/fur2.jpg",
//          "/images/fur3.jpg",
//          "/images/fur4.jpg",
//          "/images/fur5.jpg",
//          "/images/fur6.jpg",
//   ];

//   // ✅ Placeholder Style (optional shadow/border for images)
//   const getPlaceholderStyle = {
//     borderRadius: `${config.gallery.borderRadius}px`,
//     overflow: "hidden",
//   };

//   return (
//     <div
//       className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
//       style={{
//         fontFamily: config.typography.fontFamily,
//         transition: "font-family 0.3s ease, font-size 0.3s ease",
//       }}
//     >
//       <h1 className="text-lg font-semibold text-gray-900 mb-4 w-full text-center">
//         Live Preview
//       </h1>

//       <div
//         className={`mx-auto transition-all duration-300 ${
//           isMobile ? "max-w-[390px]" : "max-w-5xl"
//         }`}
//       >
//         <div
//           className={`overflow-hidden ${
//             isMobile
//               ? "rounded-[24px] border border-gray-300 shadow-inner"
//               : "rounded-[32px]"
//           }`}
//           style={cardStyle}
//         >
//           {isMobile ? (
//             <div className="flex flex-col items-center gap-6">
//               {/* Main Image */}
//               <div
//                 className="aspect-square hover:scale-[1.02] hover:shadow-md transition-all"
//                 style={{
//                   width: "85%",
//                   ...getPlaceholderStyle,
//                 }}
//               >
//                 <img
//                   src={furnitureImages[0]}
//                   alt="Main Furniture"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="text-center space-y-2 px-3">
//                 <h3
//                   style={{
//                     fontSize: `${Math.max(
//                       config.typography.headingFontSize - 1,
//                       18
//                     )}px`,
//                     fontWeight: config.typography.fontWeight,
//                     textAlign: "center",
//                   }}
//                 >
//                   Elegant Living
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: `${Math.max(config.typography.fontSize - 1, 13)}px`,
//                     color: "#555",
//                     textAlign: "center",
//                     lineHeight: "1.6",
//                   }}
//                 >
//                   Discover premium handcrafted furniture designed to bring style,
//                   comfort, and elegance to your home. Elevate your interiors with
//                   furniture that embodies simplicity and sophistication. Each piece
//                   is a statement of clean lines, premium materials, and enduring
//                   comfort. Designed for modern homes, our collection balances
//                   aesthetics with practicality. Whether you prefer subtle charm or
//                   bold elegance, we have something for every taste. Discover
//                   furniture that transforms your home into a space of beauty and
//                   harmony.
//                 </p>
//               </div>

//               {/* Gallery */}
//               <div
//                 className="grid w-full"
//                 style={{
//                   marginTop: `${config.gallery.spacing * 1.5}px`,
//                   rowGap: `${config.gallery.spacing + 10}px`,
//                   gridTemplateColumns: `repeat(${galleryColumns}, 1fr)`,
//                   gap: `${config.gallery.spacing + 8}px`,
//                   justifyItems:
//                     config.gallery.alignment === "grid-center"
//                       ? "center"
//                       : config.gallery.alignment === "grid-right"
//                       ? "end"
//                       : "start",
//                 }}
//               >
//                 {furnitureImages.slice(1).map((img, i) => (
//                   <div
//                     key={i}
//                     className="aspect-square w-full hover:scale-105 hover:shadow-lg transition-all"
//                     style={getPlaceholderStyle}
//                   >
//                     <img
//                       src={img}
//                       alt={`Furniture ${i + 1}`}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Button */}
//               <div
//                 className="w-full mt-4"
//                 style={{ textAlign: config.button.alignment }}
//               >
//                 <button
//                   style={btnStyle}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = "scale(1.05)";
//                     e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = "scale(1)";
//                     e.target.style.boxShadow = getShadowStyle(
//                       config.button.shadow
//                     );
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="flex gap-10 items-start">
//               {/* Gallery Section */}
//               <div style={{ flex: "1 1 40%", textAlign: "center" }}>
//                 {/* Main Image */}
//                 <div
//                   className="aspect-square mx-auto mb-8 hover:scale-[1.03] hover:shadow-md transition-all"
//                   style={{ width: "50%", ...getPlaceholderStyle }}
//                 >
//                   <img
//                     src={furnitureImages[0]}
//                     alt="Main Furniture"
//                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                   />
//                 </div>

//                 {/* Thumbnails */}
//                 <div
//                   className="grid"
//                   style={{
//                     gridTemplateColumns: "repeat(3, 1fr)",
//                     gap: `${config.gallery.spacing + 12}px`,
//                     marginTop: "12px",
//                     padding: "0 8%",
//                   }}
//                 >
//                   {furnitureImages.slice(1).map((img, i) => (
//                     <div
//                       key={i}
//                       className="aspect-square w-full hover:scale-105 hover:shadow-lg transition-all"
//                       style={{ ...getPlaceholderStyle, width: "90%" }}
//                     >
//                       <img
//                         src={img}
//                         alt={`Furniture ${i + 1}`}
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "cover",
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div
//                 style={{
//                   flex: "1 1 60%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   gap: "18px",
//                   textAlign: "center",
//                 }}
//               >
//                 <h3
//                   style={{
//                     fontSize: `${config.typography.headingFontSize}px`,
//                     marginBottom: 8,
//                     color: "#222",
//                     fontFamily: config.typography.fontFamily,
//                     fontWeight: config.typography.fontWeight,
//                   }}
//                 >
//                   Elegant Living
//                 </h3>
//                 <p
//                   style={{
//                     fontFamily: config.typography.fontFamily,
//                     fontSize: `${config.typography.fontSize}px`,
//                     color: "#555",
//                     marginBottom: 16,
//                     lineHeight: "1.6",
//                   }}
//                 >
//                   Discover premium handcrafted furniture designed to bring style,
//                   comfort, and elegance to your home. Elevate your interiors with
//                   furniture that embodies simplicity and sophistication. Each piece
//                   is a statement of clean lines, premium materials, and enduring
//                   comfort. Designed for modern homes, our collection balances
//                   aesthetics with practicality. Whether you prefer subtle charm or
//                   bold elegance, we have something for every taste. Discover
//                   furniture that transforms your home into a space of beauty and
//                   harmony.
//                 </p>

//                 <div style={{ textAlign: config.button.alignment }}>
//                   <button
//                     style={btnStyle}
//                     onMouseEnter={(e) => {
//                       e.target.style.transform = "scale(1.05)";
//                       e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.transform = "scale(1)";
//                       e.target.style.boxShadow = getShadowStyle(
//                         config.button.shadow
//                       );
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { getShadowStyle } from "../utils/shadows";

// ✅ Import images properly
import furMain from "./images/fur_main.jpg";
import fur1 from "./images/fur1.jpg";
import fur2 from "./images/fur2.jpg";
import fur3 from "./images/fur3.jpg";
import fur4 from "./images/fur4.jpg";
import fur5 from "./images/fur5.jpg";
import fur6 from "./images/fur6.jpg";

export default function PreviewPanel({ layout, config }) {
  const isMobile = layout === "mobile";

  // ✅ Button Style
  const btnStyle = {
    borderRadius: `${config.button.borderRadius}px`,
    boxShadow: getShadowStyle(config.button.shadow),
    backgroundColor: config.button.backgroundColor,
    color: config.button.textColor,
    padding: isMobile ? "12px 18px" : "10px 16px",
    display: "inline-block",
    fontFamily: config.typography.fontFamily,
    fontSize: isMobile
      ? `${config.typography.labelFontSize + 2}px`
      : `${config.typography.labelFontSize}px`,
    width: isMobile ? "100%" : "auto",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  // ✅ Card Style
  const cardStyle = {
    backgroundColor: config.layout.backgroundColor,
    borderRadius: `${config.layout.cardCornerRadius}px`,
    padding: isMobile
      ? `${config.layout.containerPadding / 1.5}px`
      : `${config.layout.containerPadding}px`,
    border: `${config.stroke.weight}px solid ${config.stroke.color}`,
    fontFamily: config.typography.fontFamily,
    fontWeight: config.typography.fontWeight,
    fontSize: `${config.typography.fontSize}px`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  };

  const galleryColumns = isMobile ? 2 : 3;

  // ✅ Furniture Images (fixed)
  const furnitureImages = [furMain, fur1, fur2, fur3, fur4, fur5, fur6];

  // ✅ Placeholder Style
  const getPlaceholderStyle = {
    borderRadius: `${config.gallery.borderRadius}px`,
    overflow: "hidden",
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      style={{
        fontFamily: config.typography.fontFamily,
        transition: "font-family 0.3s ease, font-size 0.3s ease",
      }}
    >
      <h1 className="text-lg font-semibold text-gray-900 mb-4 w-full text-center">
        Live Preview
      </h1>

      <div
        className={`mx-auto transition-all duration-300 ${
          isMobile ? "max-w-[390px]" : "max-w-5xl"
        }`}
      >
        <div
          className={`overflow-hidden ${
            isMobile
              ? "rounded-[24px] border border-gray-300 shadow-inner"
              : "rounded-[32px]"
          }`}
          style={cardStyle}
        >
          {isMobile ? (
            <div className="flex flex-col items-center gap-6">
              {/* Main Image */}
              <div
                className="aspect-square hover:scale-[1.02] hover:shadow-md transition-all"
                style={{
                  width: "85%",
                  ...getPlaceholderStyle,
                }}
              >
                <img
                  src={furnitureImages[0]}
                  alt="Main Furniture"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Product Info */}
              <div className="text-center space-y-2 px-3">
                <h3
                  style={{
                    fontSize: `${Math.max(
                      config.typography.headingFontSize - 1,
                      18
                    )}px`,
                    fontWeight: config.typography.fontWeight,
                    textAlign: "center",
                  }}
                >
                  Elegant Living
                </h3>
                <p
                  style={{
                    fontSize: `${Math.max(config.typography.fontSize - 1, 13)}px`,
                    color: "#555",
                    textAlign: "center",
                    lineHeight: "1.6",
                  }}
                >
                  Discover premium handcrafted furniture designed to bring style,
                  comfort, and elegance to your home. Elevate your interiors with
                  furniture that embodies simplicity and sophistication. Each piece
                  is a statement of clean lines, premium materials, and enduring
                  comfort. Designed for modern homes, our collection balances
                  aesthetics with practicality. Whether you prefer subtle charm or
                  bold elegance, we have something for every taste. Discover
                  furniture that transforms your home into a space of beauty and
                  harmony.
                </p>
              </div>

              {/* Gallery */}
              <div
                className="grid w-full"
                style={{
                  marginTop: `${config.gallery.spacing * 1.5}px`,
                  rowGap: `${config.gallery.spacing + 10}px`,
                  gridTemplateColumns: `repeat(${galleryColumns}, 1fr)`,
                  gap: `${config.gallery.spacing + 8}px`,
                  justifyItems:
                    config.gallery.alignment === "grid-center"
                      ? "center"
                      : config.gallery.alignment === "grid-right"
                      ? "end"
                      : "start",
                }}
              >
                {furnitureImages.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square w-full hover:scale-105 hover:shadow-lg transition-all"
                    style={getPlaceholderStyle}
                  >
                    <img
                      src={img}
                      alt={`Furniture ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Button */}
              <div
                className="w-full mt-4"
                style={{ textAlign: config.button.alignment }}
              >
                <button
                  style={btnStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = getShadowStyle(
                      config.button.shadow
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-10 items-start">
              {/* Gallery Section */}
              <div style={{ flex: "1 1 40%", textAlign: "center" }}>
                {/* Main Image */}
                <div
                  className="aspect-square mx-auto mb-8 hover:scale-[1.03] hover:shadow-md transition-all"
                  style={{ width: "50%", ...getPlaceholderStyle }}
                >
                  <img
                    src={furnitureImages[0]}
                    alt="Main Furniture"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Thumbnails */}
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: `${config.gallery.spacing + 12}px`,
                    marginTop: "12px",
                    padding: "0 8%",
                  }}
                >
                  {furnitureImages.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square w-full hover:scale-105 hover:shadow-lg transition-all"
                      style={{ ...getPlaceholderStyle, width: "90%" }}
                    >
                      <img
                        src={img}
                        alt={`Furniture ${i + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div
                style={{
                  flex: "1 1 60%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "18px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: `${config.typography.headingFontSize}px`,
                    marginBottom: 8,
                    color: "#222",
                    fontFamily: config.typography.fontFamily,
                    fontWeight: config.typography.fontWeight,
                  }}
                >
                  Elegant Living
                </h3>
                <p
                  style={{
                    fontFamily: config.typography.fontFamily,
                    fontSize: `${config.typography.fontSize}px`,
                    color: "#555",
                    marginBottom: 16,
                    lineHeight: "1.6",
                  }}
                >
                  Discover premium handcrafted furniture designed to bring style,
                  comfort, and elegance to your home. Elevate your interiors with
                  furniture that embodies simplicity and sophistication. Each piece
                  is a statement of clean lines, premium materials, and enduring
                  comfort. Designed for modern homes, our collection balances
                  aesthetics with practicality. Whether you prefer subtle charm or
                  bold elegance, we have something for every taste. Discover
                  furniture that transforms your home into a space of beauty and
                  harmony.
                </p>

                <div style={{ textAlign: config.button.alignment }}>
                  <button
                    style={btnStyle}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = getShadowStyle(
                        config.button.shadow
                      );
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
