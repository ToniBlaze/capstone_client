import React, { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import axios from "axios";

import SinglePost from "./SinglePost";

export default function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/user/${userId}`);
        setPosts(response.data);
      } catch (error) {
        if (error.response) {
          setError(error.response.data);
        } else {
          setError("Internal Server Error");
        }
      }
    };

    if (userId) {
      getUserPosts();
    } else {
      setError("User ID not found");
    }
  }, [userId]);
  

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
          {error.error}
        </Alert>
      ) : (
        <Row>
          {posts &&
            posts.map((post) => (
              <SinglePost post={post} key={post._id} deletePost={deletePost} />
            ))}
        </Row>
      )}
    </Container>
  );
}
