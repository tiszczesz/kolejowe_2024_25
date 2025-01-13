import { Post } from "./Post";

export default async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  }