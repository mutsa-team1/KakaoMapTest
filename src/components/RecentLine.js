import React from "react";

function RecentLine() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "16px",
        marginBottom: "8px",
      }}
    >
      {/* 최신순 pill */}
      <div
        style={{
          backgroundColor: "#6B6B6B",
          color: "white",
          padding: "6px 16px",
          borderRadius: "999px",
          fontWeight: "bold",
          fontSize: "14px",
          whiteSpace: "nowrap",
        }}
      >
        최신순
      </div>

      {/* 라인 */}
      <div
        style={{
          flexGrow: 1,
          height: "1px",
          backgroundColor: "#ddd",
          marginLeft: "8px",
        }}
      />
    </div>
  );
}

export default RecentLine;

