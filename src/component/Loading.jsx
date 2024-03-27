import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 20%;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 70px;
  height: 70px;

  border: 4px solid white;
  border-left-color: #333;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
