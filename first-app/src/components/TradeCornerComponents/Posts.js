import React from "react";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

// COMPONENTS
import SinglePost from "./SinglePost";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err));
  }, []);

  function deletePost(id) {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPosts(posts.filter((p) => p._id !== id));
      })
      .catch((err) => console.log(err));
  }
  // const dataArray = Object.values(data);
  return (
    <Container>
      <Row>
        {posts &&
          posts.map((post) => (
            <SinglePost post={post} key={post._id} deletePost={deletePost} />
          ))}
      </Row>
    </Container>
  );
}
