import "./App.css";
import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [sortedAndSeachPosts, setSortedAndSeachPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("defaultValue");
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

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    setQuery("");
  };
  const searchPosts = (query) => {
    setSortedAndSeachPosts();
  };
  return (
    <div className="app">
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <input
            type="text"
            value={query}
            placeholder="Поиск..."
            onChange={(e) => setQuery(e.target.value)}
          />
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
        </div>

        <PostList posts={posts} removePost={removePost} />
      </div>
    </div>
  );
}

export default App;
