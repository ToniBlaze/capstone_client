import React, { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SinglePost from "./SinglePost";
import SearchBar from "./SearchBar";

export default function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const token = sessionStorage.getItem("userLogin");


  const filterPosts = (post) => {
    if (query && category) {
      return (
        post.title.toLowerCase().includes(query.toLowerCase()) &&
        post.category.toLowerCase().includes(category.toLowerCase())
      );
    } else if (query) {
      return post.title.toLowerCase().includes(query.toLowerCase());
    } else if (category) {
      return post.category.toLowerCase().includes(category.toLowerCase());
    } else {
      return true;
    }
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/posts?page=${page}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

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
      setError(err.response || "An error occurred");
    }
  };

  useEffect(() => {
    getPosts();
  }, [navigate, token]);

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <SearchBar setQuery={setQuery} setCategory={setCategory} />
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
            }>
            {posts.filter(filterPosts).map((post) => (
              <SinglePost post={post} key={post._id} />
            ))}
          </InfiniteScroll>
        )}
      </Row>
    </Container>
  );
}
