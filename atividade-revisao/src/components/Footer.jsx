import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 - Todos os direitos reservados</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#007bff",
    color: "#333",
    margin: 0,
    boxSizing: "border-box",
    width: "100%",
  },
};

export default Footer;
