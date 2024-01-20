import { PostsIndex } from "./PostsIndex"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


export function ProfileShow() {
  const [posts, setPosts] = useState([])
  const { userId } = useParams();


  return (
    <div>
      <p>ProfileShow</p>
      <p>Username:</p>
      <p>ProfilePostsIndex</p>
      < PostsIndex userId={userId} posts={posts} setPosts={setPosts}/>
      <p>ProfileShow</p>
    </div>
  )
}
