import React from "react";
import styled from "styled-components";
import { TotalItem } from "../config/TotlaItem";

const Pagination = ({ page, setPage, Post, isLoading }) => {
  const totalPages = Math.ceil(Post.length / TotalItem);

  return (
    <PaginationContainer>
      <Button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1 || isLoading}
      >
        Prev
      </Button>
      <Button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === totalPages || isLoading}
      >
        Next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
