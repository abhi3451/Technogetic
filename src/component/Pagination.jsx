import React, { useEffect } from "react";
import styled from "styled-components";
import { TotalItem } from "../config/TotlaItem";

const Pagination = ({ page, setPage, posts, isLoading }) => {
  const totalPages = Math.ceil(posts.length / TotalItem);

  const handlePage = (selectedpage) => {
    setPage(selectedpage);
    sessionStorage.setItem("page", selectedpage.toString());
  };

  {
    /* Added session storage to store page number*/
  }

  return (
    <PaginationContainer>
      <Button
        onClick={() => handlePage(page - 1)}
        disabled={page === 1 || isLoading}
      >
        Prev
      </Button>
      <PaginationContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PageNumber
            key={index + 1}
            onClick={() => handlePage(index + 1)}
            isActive={index + 1 === page}
          >
            {index + 1}
          </PageNumber>
        ))}
      </PaginationContainer>
      <Button
        onClick={() => handlePage(page + 1)}
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 6px;
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

const PageNumber = styled.div`
  padding: 8px 12px;
  margin: 0 3px;
  margin-bottom: 15px;
  background-color: ${({ isActive }) => (isActive ? "#5a67d8" : "transparent")};
  color: ${({ isActive }) => (isActive ? "white" : "#6b7280")};
  border: 1px solid #d1d5db;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#5a67d8" : "#e5e7eb")};
    color: ${({ isActive }) => (isActive ? "white" : "#111827")};
  }
`;
