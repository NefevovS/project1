import "./App.css";
import { useEffect, useRef, useState } from "react";
import PostList from "./components/PostList";
import axios, { defaults } from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPost();
  }, []);
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const fetchPost = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };
  const [selectedSort, setSelectedSort] = useState("defaultValue");
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts(
      [...posts].sort((a, b) =>
        a[sort].toLowerCase().localeCompare(b[sort].toLowerCase())
      )
    );
  };

  return (
    <div className="app">
      <div className="container">
        <select
          value={selectedSort}
          onChange={(event) => sortPosts(event.target.value)}
        >
          <option value="defaultValue" disabled={true}>
            Сортировка
          </option>
          <option value="body">По посту</option>
          <option value="title">По заголовку</option>
        </select>
        <PostList posts={posts} removePost={removePost} />
      </div>
    </div>
  );
}

export default App;
