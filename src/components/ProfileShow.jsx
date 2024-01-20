import { PostsIndex } from "./PostsIndex"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


export function ProfileShow() {
  const [posts, setPosts] = useState([])
  const { userId } = useParams();
  let profileToggle = true

  return (
    <div>
      <p>ProfileShow</p>
      <p>Username:</p>
      <button>Follow/Unfollow</button>
      <p>ProfilePostsIndex</p>
      < PostsIndex userId={userId} posts={posts} setPosts={setPosts} profileToggle={profileToggle}/>
      <p>ProfileShow</p>
    </div>
  )
}
