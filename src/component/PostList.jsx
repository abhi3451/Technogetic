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
  width: 100%;
  overflow-x: auto;
  padding: auto;
`;

const ResponsiveTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
`;

const ResponsiveTh = styled.th`
  padding: 12px;
  text-align: center;
  background-color: #f2f2f2;

  border-bottom: 2px solid #ddd;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
`;

const ResponsiveTd = styled.td`
  padding: 12px;
  text-align: center;

  border-bottom: 1px solid #ddd;
  color: #d3d3d3;
`;
