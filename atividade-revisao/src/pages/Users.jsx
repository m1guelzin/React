import React, { useEffect, useState } from "react";
import sheets from "../axios/axios";
import CardUser from "../components/CardUser";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    sheets.users()
      .then(response => setUsers(response.data))
      .catch(error => console.error("Erro ao buscar usuários:", error));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Lista de Usuários</h2>
      {users.map(user => (
        <CardUser
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
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

export default Users;
