import React from "react";

function AddButton({ onClick, isAdding }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "48px",
        height: "48px",
        backgroundColor: isAdding ? "#EF4444" : "#3B82F6",  // Tailwind의 bg-blue-500
        color: "white",
        fontSize: "30px",
        borderRadius: "50%",
        border: "none",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer"
      }}
    >
      {isAdding ? "×" : "+"}
    </button>
  );
}

export default AddButton;