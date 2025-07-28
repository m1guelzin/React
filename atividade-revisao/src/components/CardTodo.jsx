import React from "react";

function CardTodo({ title, completed }) {
  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: completed ? "#d4edda" : "#f8d7da",
      }}
    >
      <p style={completed ? styles.completed : styles.pending}>{title}</p>
      <p>Status: {completed ? "Concluído" : "Pendente"}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #bbb",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
  },
  completed: {
    textDecoration: "line-through",
    color: "#155724",
    fontWeight: "bold",
  },
  pending: {
    color: "#721c24",
  },
};

export default CardTodo;
