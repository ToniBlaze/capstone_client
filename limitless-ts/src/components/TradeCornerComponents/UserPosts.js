import React, { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import jwt_decode from "jwt-decode";

import UserSinglePosts from "./UserSinglePosts";

export default function UserPosts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [error, setError] = useState(null);

  const token = sessionStorage.getItem("userLogin");
  const decodedToken = jwt_decode(token);
  const userId = decodedToken.id;

  async function getUserPost() {
    try {
      const res = await axios.get(
        `http://localhost:3000/posts/user/${userId}?page=${page}`
      );
      const newPosts = res.data;

      if (newPosts.length === 0) {
        setHasMorePosts(false);
        if (posts.length === 0) {
          setError("There aren't any posts!");
        }
      } else {
        setPosts([...posts, ...newPosts]);
        setPage(page + 1);
      }
    } catch (err) {
      console.log(err.response.data.error);
      setError(err.response.data);
    }
  }

  useEffect(() => {
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
      <h3 className="text-light">Ciao {decodedToken.name}!</h3>
      <h4 className="text-dark-emphasis">
        Qua trovi tutte le idee che hai condiviso:
      </h4>
      {error ? (
        <Alert key={"danger"} variant={"danger"}>
          {error}
        </Alert>
      ) : (
        <Row className="justify-content-center">
          <InfiniteScroll
            dataLength={posts.length}
            next={getUserPost}
            hasMore={hasMorePosts}
            loader={<h4 className="text-light">Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b className="text-primary">You have seen all posts!</b>
              </p>
            }>
            {posts &&
              posts.map((post) => (
                <UserSinglePosts
                  post={post}
                  key={post._id}
                  deletePost={deletePost}
                />
              ))}
          </InfiniteScroll>
        </Row>
      )}
    </Container>
  );
}
