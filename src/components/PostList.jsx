import React from "react";

const PostList = ({ remove, posts }) => {
  return (
    <div className="postList">
      {posts.map((post) => {
        return (
          <div className="postItem" key={post.id}>
            <div>
              <strong>{post.title}</strong>
              <div>{post.body}</div>
            </div>
            <div>
              <button onClick={() => remove(post)}>Удалить</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
