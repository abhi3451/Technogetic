import React from "react";
import styled from "styled-components";
import Loading from "./Loading";

const PostList = ({ Post, startIndex, lastIndex }) => {
  return (
    <ResponsiveTableWrapper>
      <ResponsiveTable>
        <thead>
          <tr>
            <ResponsiveTh>ID</ResponsiveTh>
            <ResponsiveTh>Title</ResponsiveTh>
            <ResponsiveTh>Body</ResponsiveTh>
          </tr>
        </thead>

        <tbody>
          {Post.slice(startIndex, lastIndex).map((post) => (
            <tr key={post.id}>
              <ResponsiveTd>{post.id}</ResponsiveTd>
              <ResponsiveTd>{post.title}</ResponsiveTd>
              <ResponsiveTd>{post.body}</ResponsiveTd>
            </tr>
          ))}
        </tbody>
      </ResponsiveTable>
    </ResponsiveTableWrapper>
  );
};

export default PostList;

const ResponsiveTableWrapper = styled.div`
  display: flex;
  width: 100%;

  color: white;
  overflow-x: auto;
`;

const ResponsiveTable = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
`;

const ResponsiveTh = styled.th`
  margin: 0 auto;
  padding: 8px;
  text-align: center;
`;

const ResponsiveTd = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;
