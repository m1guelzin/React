import React from "react";

function CardUser({ name, email, city }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Cidade:</strong> {city}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    backgroundColor: "#f4f4f4",
  },
};

export default CardUser;
