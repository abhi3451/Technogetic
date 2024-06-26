import React, { useEffect, useState } from "react";
import PostList from "./component/PostList";
import axios from "axios";
import { TotalItem, storedPage } from "./config/TotlaItem";
import Pagination from "./component/Pagination";
import styled from "styled-components";
import Loading from "./component/Loading";

const App = () => {
  const [Post, setPost] = useState([]);
  const [page, setPage] = useState(storedPage || 1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startIndex = (page - 1) * TotalItem;
  const lastIndex = startIndex + TotalItem;

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setIsLoading(false);
      if (res.status === 200) {
        setPost(res.data);

        setError(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setIsLoading(false);
      setError("Failed to fetch data. Please try again.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const retryFetch = () => {
    fetchPosts();
  };

  {
    /* Error handling in Parent Component */
  }

  if (error) {
    return (
      <ErrorContainer>
        <p>Error: {error}</p> {/*show error if api request fails*/}
        <Button onClick={() => retryFetch()}>Try Again</Button>
        {/* Try again but to re-fetch the API data*/}
      </ErrorContainer>
    );
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PostList Post={Post} startIndex={startIndex} lastIndex={lastIndex} />
          <Pagination
            page={page}
            setPage={setPage}
            posts={Post}
            isLoading={isLoading}
          />
        </>
      )}
    </>
  );
};

export default App;

const ErrorContainer = styled.td`
  padding: 8px;
  color: white;
  border-bottom: 1px solid #ddd;
`;
const Button = styled.button`
  cursor: pointer;
`;
