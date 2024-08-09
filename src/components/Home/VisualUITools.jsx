import React, { useRef } from "react";
// import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi"

const emojis = [
  { icon: "🔍", row: 1, column: 10 },
  { icon: "", row: 1, column: 12 },
  { icon: "🧵", row: 2, column: 5 },
  { icon: "🤖", row: 2, column: 7 },
  { icon: "🤖", row: 2, column: 10 },
  { icon: "", row: 2, column: 12, backgroundColor: "#a09f9f" },
  { icon: "", row: 2, column: 16 },
  { icon: "🔗", row: 3, column: 4 },
  { icon: "🧰", row: 3, column: 6 },
  { icon: "", row: 3, column: 9 },
  { icon: "🧵", row: 3, column: 11 },
  { icon: "🛠️", row: 3, column: 13 },
  { icon: "🔧", row: 3, column: 14 },
  { icon: "💡", row: 3, column: 16, backgroundColor: "#a09f9f" },
  { icon: "📁", row: 3, column: 17 },
  { icon: "🦾", row: 4, column: 3 },
  { icon: "📚", row: 4, column: 5, backgroundColor: "#a09f9f" },
  { icon: "✂️", row: 4, column: 7, backgroundColor: "#a09f9f" },
  { icon: "", row: 4, column: 9 },
  { icon: "🌐", row: 4, column: 13 },
  { icon: "", row: 4, column: 15, backgroundColor: "#a09f9f" },
  { icon: "🌐", row: 4, column: 17 },
  { icon: "🔌", row: 4, column: 19, backgroundColor: "#a09f9f" },
  // { icon: '', row: 7, column: 1 },
  { icon: "", row: 5, column: 2 },
  { icon: "", row: 5, column: 3 },
  { icon: "🔗", row: 5, column: 4 },
  { icon: "", row: 5, column: 5 },
  { icon: "", row: 5, column: 6 },
  // { icon: '', row: 5, column: 5 },
  { icon: "🧰", row: 5, column: 8, backgroundColor: "#a09f9f" },
  { icon: "🔗", row: 5, column: 9 },
  { icon: "", row: 5, column: 10 },
  { icon: "", row: 5, column: 11 },
  { icon: "🔗", row: 5, column: 12 },
  // { icon: '🔗', row: 5, column: 13 },
  { icon: "", row: 5, column: 14 },
  { icon: "", row: 5, column: 15 },
  // { icon: '', row: 5, column: 16 },
  { icon: "", row: 5, column: 17, backgroundColor: "#a09f9f" },
  { icon: "🔗", row: 5, column: 18, backgroundColor: "#a09f9f" },
  { icon: "", row: 5, column: 19, backgroundColor: "#a09f9f" },
  // { icon: '', row: 5, column: 20 },
  { icon: "", row: 6, column: 1 },
  { icon: "🦾", row: 6, column: 2 },
  { icon: "🔗", row: 6, column: 3 },
  { icon: "", row: 6, column: 4, backgroundColor: "#a09f9f" },
  { icon: "", row: 6, column: 5 },
  { icon: "", row: 6, column: 6 },
  { icon: "", row: 6, column: 7 },
  { icon: "", row: 6, column: 8 },
  { icon: "🧵", row: 6, column: 9 },
  { icon: "🔗", row: 6, column: 10 },
  { icon: "🔍", row: 6, column: 11, backgroundColor: "#a09f9f" },
  { icon: "", row: 6, column: 12 },
  { icon: "", row: 6, column: 13 },
  { icon: "", row: 6, column: 14 },
  { icon: "📚", row: 6, column: 15 },
  { icon: "", row: 6, column: 16, backgroundColor: "#a09f9f" },
  { icon: "", row: 6, column: 17 },
  { icon: "", row: 6, column: 18 },
  { icon: "🔗", row: 6, column: 19 },
  { icon: "", row: 6, column: 20 },
  // { icon: "🔍", row: 7, column: 1 },
  { icon: "🔍", row: 7, column: 1 },

  { icon: "", row: 7, column: 2 },
  { icon: "", row: 7, column: 3 },
  { icon: "", row: 7, column: 4 },
  { icon: "", row: 7, column: 5, backgroundColor: "#a09f9f" },
  { icon: "", row: 7, column: 6 },
  { icon: "", row: 7, column: 7 },
  { icon: "", row: 7, column: 8, backgroundColor: "#a09f9f" },
  { icon: "", row: 7, column: 9, backgroundColor: "#a09f9f" },
  { icon: "", row: 7, column: 10 },
  { icon: "", row: 7, column: 11 },
  { icon: "", row: 7, column: 12, backgroundColor: "#a09f9f" },
  { icon: "", row: 7, column: 13 },
  { icon: "", row: 7, column: 14 },
  { icon: "", row: 7, column: 15, backgroundColor: "#a09f9f" },
  { icon: "", row: 7, column: 18, backgroundColor: "#a09f9f" },
  { icon: "🔗", row: 7, column: 19 },
  { icon: "", row: 7, column: 20, color: "red" },
];

const VisualUITools = () => {
  return (
    <div className="visual-ui-tools-wrapper">
      <div className="visual-ui-tools-header">
        <p className="font-2nd-head">Eeeeendless Components...</p>
        <p className="sub-font-head">
          Discover the magic of composable building blocks. Pre-built components
          can be combined in numerous ways to create AI apps.
        </p>
      </div>
      <div className="grid-container">
        {emojis.map((emoji, index) => (
          <div
            key={index}
            className="grid-item"
            style={{
              gridColumn: emoji.column,
              gridRow: emoji.row,
              backgroundColor: emoji.backgroundColor || "transparent", // Apply background color if defined
            }}
          >
            {emoji.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualUITools;
