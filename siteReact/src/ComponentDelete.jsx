import React from "react";

function ButtonDelete() {
  function click() {
    alert("Item Deletado!!");
  }

  return (
    <button
      style={{
        padding: "10px 20px",
        margin:  "10px",
        fontSize: "16px",
        cursor: "pointer",
        color: "white",
        backgroundColor: "red",
      }}
      onClick={() => click()}
    >
      Deletar Item
    </button>
  );
}

export default ButtonDelete;
