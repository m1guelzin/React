import React, { useEffect, useState } from "react";
import sheets from "../axios/axios";
import CardPost from "../components/CardPost";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sheets.posts()
      .then(response => setPosts(response.data))
      .catch(error => console.error("Erro ao buscar posts:", error));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Lista de Posts</h2>
      {posts.map(post => (
        <CardPost key={post.id} title={post.title} body={post.body} />
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

export default Posts;
