import React from "react";
import PropTypes from "prop-types";
import LikeButton from "./LikeButton";

function ComplainCard({ content, likes, onLike, color }) {
  return (
    <div
      style={{
        border: "2px solid transparent",
        borderRadius: "8px",
        padding: "12px",
        backgroundColor: color, // 여기 적용
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ margin: 0 }}>{content}</p>
      <LikeButton likes={likes} onClick={onLike} />
    </div>
  );
}

ComplainCard.propTypes = {
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
export default ComplainCard;
