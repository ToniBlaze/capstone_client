import React, { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SinglePost from "./SinglePost";

export default function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const token = localStorage.getItem("userLogin");

  const getPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/posts?page=${page}`, {
        headers: {
          authorization: token,
        },
      });

      const fetchedPosts = response.data;
      if (fetchedPosts.length === 0) {
        setHasMorePosts(false);
        if (posts.length === 0) {
          setError("There aren't any posts!");
        }
      } else {
        setPosts([...posts, ...fetchedPosts]);
        setError(null);
        setPage(page + 1);
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data || "An error occurred");
      setTimeout(() => {
        navigate("/login");
      }, 1300);
    }
  };

  useEffect(() => {
    getPosts();
  }, [navigate, token]);

  return (
    <Container>
      <Row className="justify-content-center">
        {error ? (
          <Alert key={"danger"} variant={"danger"}>
            {error}
          </Alert>
        ) : (
          <InfiniteScroll
            dataLength={posts.length}
            next={getPosts}
            hasMore={hasMorePosts}
            loader={<h4 className="text-light">Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b className="text-primary">You have seen all posts!</b>
              </p>
            }
          >
            {posts.map((post) => (
              <SinglePost post={post} key={post._id} />
            ))}
          </InfiniteScroll>
        )}
      </Row>
    </Container>
  );
}
