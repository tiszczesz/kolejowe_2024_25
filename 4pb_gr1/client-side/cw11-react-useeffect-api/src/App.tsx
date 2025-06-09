import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
       {posts.length === 0 && <p>Loading posts...</p>}
      {posts.length > 0 && <p>Total posts: {posts.length}</p>}
      <button className="btn btn-secondary m-2" onClick={() => setPosts([])}>
        Clear Posts
      </button>
      <button
        className="btn btn-secondary m-2"
        onClick={() => window.location.reload()}
      >
        Reload Posts
      </button>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2 className="text-center">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
     
    </div>
  );
}

export default App;
