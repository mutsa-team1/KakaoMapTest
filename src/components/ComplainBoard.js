import React, { useState } from "react";
import ComplainCard from "./ComplainCard";
import AddButton from "./AddButton";
import NewPostit from "./NewPostIt";
import RecentLine from "./RecentLine";
import ComplainPostit from "./ComplainPostIt";
const CARD_COLORS = [
  ["#f8c8c8"], // row 0 - 1개
  ["#fff4b3", "#d0f0c0", "#fff4b3"], // row 1 - 3개
  ["#d9ccf1", "#bfe3ff"], // row 2 - 2개
];
const INITIAL_ROWS = [
  [{ content: "수업자료 없어!!", likes: 53 }],
  [
    { content: "에어컨 너무 추워요", likes: 10 },
    { content: "수업자료 없어!!", likes: 30 },
    { content: "교수님 너무해요", likes: 15 },
  ],
  [
    { content: "교수님 너무해요", likes: 50 },
    { content: "과제 너무 싫어", likes: 80 },
  ],
];
function calculateSpans(cards) {
  const totalLikes = cards.reduce((sum, card) => sum + card.likes, 0);
  return cards.map((card) => {
    const ratio = card.likes / totalLikes;
    const span = Math.round(ratio * 12);
    return { ...card, span: Math.max(span, 1) };
  });
}
function ComplainBoard({ isOpen, buildingName,onClose }) {
  const [isAdding, setIsAdding] = useState(false);
  const [posts, setPosts] = useState([]);
  const [rows, setRows] = useState(INITIAL_ROWS);
  if (!isOpen) return null;
  const handleLike = (rowIndex, cardIndex) => {
    setRows((prevRows) =>
      prevRows.map((row, rIdx) =>
        row.map((card, cIdx) =>
          rIdx === rowIndex && cIdx === cardIndex
            ? { ...card, likes: card.likes + 1 }
            : card
        )
      )
    );
  };
  const handleToggle = () => {
    setIsAdding((prev) => !prev);
  };
  const handleSubmit = (text) => {
    setPosts([text, ...posts]);
    setIsAdding(false);
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "400px",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        borderRadius: "12px",
        zIndex: 1000,
        padding: "20px",
        overflowY: "auto",
      }}
    >
        {/* 닫기 버튼 추가 */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "transparent",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
        aria-label="Close"
      >
        ✕
      </button>
      <h2>{buildingName}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          height: "300px",
          gap: "10px",
        }}
      >
        {rows.map((row, rowIndex) => {
          const rowCards = calculateSpans(row);
          let columnStart = 1;

          return rowCards.map((card, cardIndex) => {
            const gridColumn = `${columnStart} / span ${card.span}`;
            columnStart += card.span;
            const safeColor =
            (CARD_COLORS[rowIndex] && CARD_COLORS[rowIndex][cardIndex]) ||
            "#ffffff";
            return (
              <div
                key={`${rowIndex}-${cardIndex}`}
                style={{
                  gridColumn,
                  gridRow: `${rowIndex + 1}`,
                  overflow: "hidden",
                }}
              >
                <ComplainCard
                  content={card.content}
                  likes={card.likes}
                  onLike={() => handleLike(rowIndex, cardIndex)}
                  color={safeColor}
                />
              </div>
            );
          });
        })}
      </div>
      <RecentLine /> {/*최신순 라인*/}
      <ComplainPostit posts={posts} />
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {isAdding && (
          <div style={{ marginBottom: "12px" }}>
            <NewPostit onSubmit={handleSubmit} />
          </div>
        )}
        <AddButton onClick={handleToggle} isAdding={isAdding} />
      </div>
    </div>
  );
}
export default ComplainBoard;
