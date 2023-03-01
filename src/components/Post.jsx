import React from "react";
import "../App.css";
import MyButton from "../UI/MyButton/MyButton";

const Post = ({ post, removePost, index }) => {
  return (
    <div className="postItem">
      <div>
        <div style={{ marginBottom: "20px" }}>
          <strong style={{ marginRight: "20px" }}>{index + 1}</strong>
          {post.title}
        </div>
        <div> {post.body}</div>
      </div>

      <MyButton remove={removePost} post={post}>
        Удалить
      </MyButton>
    </div>
  );
};

export default Post;
