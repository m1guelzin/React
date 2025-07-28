import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Minha Aplicação React</h1>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/posts">Posts</Link>
        <Link style={styles.link} to="/users">Users</Link>
        <Link style={styles.link} to="/todos">Todos</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100%",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
  },
  nav: {
    display: "flex",
    gap: "16px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Header;
