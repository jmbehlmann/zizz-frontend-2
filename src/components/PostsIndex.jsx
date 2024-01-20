import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function formatCreatedAt(created_at) {
  const date = new Date(created_at);
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Chicago'
  };
  return date.toLocaleString('en-US', options);
}

export function PostsIndex({ userId, posts, setPosts }) {


  const getPosts = () => {
    const url = userId ? `http://localhost:3000/users/${userId}/posts.json?user_id=${userId}` : `http://localhost:3000/posts.json`;
    axios.get(url)
    .then((response) => {
      // console.log(response.data)
      setPosts(response.data)
    })
  }

  useEffect(() => {
    getPosts();
  }, [posts, userId]);

  return (
    <div>
      <p>PostsIndex</p>
      {/* <button onClick={getPosts}>get posts</button> */}
      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.username} - </h4>
          <Link to={`./users/${post.user_id}`}>profile</Link>
          <p>{post.text}</p>
          <p>{formatCreatedAt(post.created_at)}</p>
          <p>----------------------------------------------------------</p>
        </div>
      ))}
    </div>
  )
}
