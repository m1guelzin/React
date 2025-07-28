import React from "react";

function CardPost({ title, body }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    backgroundColor: "#f4f4f4",
  },
};

export default CardPost;
