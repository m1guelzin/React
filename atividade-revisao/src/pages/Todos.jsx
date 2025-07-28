import React, { useEffect, useState } from "react";
import sheets from "../axios/axios";
import CardTodo from "../components/CardTodo";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    sheets.todos()
      .then(response => setTodos(response.data))
      .catch(error => console.error("Erro ao buscar tarefas:", error));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Lista de Tarefas</h2>
      {todos.map(todo => (
        <CardTodo
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
};

export default Todos;
