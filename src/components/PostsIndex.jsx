import { useState } from 'react'
import axios from 'axios'


export function PostsIndex() {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    console.log("in get posts")
    axios.get(`http://localhost:3000/posts.json`)
    .then((response) => {
      console.log(response.data)
      setPosts(response.data)
    })
  }

  return (
    <div>
      <p>PostsIndex</p>
      <button onClick={getPosts}>get posts</button>
      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.user_id} - </h4>
          {/* <Link to={`./users/${post.user_id}`}>profile</Link> */}
          <p>{post.text}</p>
          {/* <h6>{formatCreatedAt(post.created_at)}</h6> */}
          {/* <button onClick={() => props.onShowPost(post)}>More nonsense</button> */}
        </div>
      ))}
    </div>
  )
}
