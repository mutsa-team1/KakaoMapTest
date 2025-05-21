import React from "react";
function SubmitButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: "13px",
        backgroundColor: "#ffffff",
        color: "#000000",
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "4px 12px",
        cursor: "pointer",
        marginTop: "25px",
      }}
    >
      등록
    </button>
  );
}
export default SubmitButton;
