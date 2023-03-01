import React from "react";
import Post from "./Post";
import "../App.css";

const PostList = ({ posts, removePost }) => {
  return (
    <div className="postList">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Список постов
      </h1>
      {posts.map((post, index) => (
        <Post post={post} key={post.id} removePost={removePost} index={index} />
      ))}
    </div>
  );
};

export default PostList;
