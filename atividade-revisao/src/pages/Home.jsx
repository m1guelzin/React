import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bem-vindo</h1>
      <p style={styles.subtitle}>Escolha uma categoria para visualizar:</p>
      
      <div style={styles.menu}>
        <Link to="/posts" style={styles.button}>Ver Posts</Link>
        <Link to="/users" style={styles.button}>Ver Usuários</Link>
        <Link to="/todos" style={styles.button}>Ver Tarefas</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#555",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default Home;
