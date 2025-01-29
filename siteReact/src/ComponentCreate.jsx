import React from "react";

function ButtonCreate() {
  function click() {
    alert("Item Criado!!");
  }

  return (
    <button
      style={{
        padding: "10px 20px",
        marginTop:  "265px",
        marginLeft: "500px",
        fontSize: "16px",
        cursor: "pointer",
        color: "white",
        backgroundColor: "green",
      }}
      onClick={() => click()}
    >
      Criar Item
    </button>
  );
}

export default ButtonCreate;
