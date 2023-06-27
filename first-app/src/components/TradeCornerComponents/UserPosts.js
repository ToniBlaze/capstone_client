import React, { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";

import UserSinglePosts from "./UserSinglePosts";

export default function UserPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userLogin");
    async function getUserPost() {
      try {
        const decodedToken = await jwt_decode(token);
        const userId = decodedToken.id;

        axios.get(`http://localhost:3000/posts/user/${userId}`).then((res) => {
          const Posts = res.data;
          if (Posts.length === 0) {
            setError("There aren't any posts!");
          } else {
            setPosts(Posts);
          }
        });
      } catch (err) {
        console.log(err.response.data.error);
        setError(err.response.data);
      }
    }

    getUserPost();
  }, []);

  function deletePost(id) {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPosts(posts.filter((p) => p._id !== id));
      })
      .catch((err) => setError(err.response.data));
  }

  return (
    <Container>
      {error ? (
        <Alert key={"danger"} variant={"danger"}>
          {error}
        </Alert>
      ) : (
        <Row className="justify-content-center">
          {posts &&
            posts.map((post) => (
              <UserSinglePosts post={post} key={post._id} deletePost={deletePost} />
            ))}
        </Row>
      )}
    </Container>
  );
}
