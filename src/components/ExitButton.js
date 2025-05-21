import React from "react";
import PropTypes from "prop-types";

function LikeButton({ likes, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        background: "transparent",
        color: "#888",
        fontWeight: "bold",
        cursor: "pointer",
        textAlign: "right",
        marginTop: "8px",
        alignSelf: "flex-end",
        fontSize: "16px",
      }}
    >
      👍 {likes}
    </button>
  );
}

LikeButton.propTypes = {
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LikeButton;