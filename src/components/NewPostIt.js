import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

function NewPostit({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        width: "224px",
        height: "224px",
        background: "rgba(235, 246, 242, 1)",
        borderRadius: "8px",
        padding: "12px",
        boxShadow: "4px 8px 8px 0px #00000040",
        marginBottom: "12px",
      }}
    >
      <textarea
        placeholder="내용을 입력하세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          height: "70%",
          border: "none",
          resize: "none",
          background: "transparent",
          outline: "none",
        }}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <SubmitButton
          onClick={() => {
            if (text.trim()) onSubmit(text);
          }}/>
      </div>
    </div>
  );
}

export default NewPostit;