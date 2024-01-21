import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { PostsIndex } from "./PostsIndex"
import { RelationshipController } from "./RelationshipController"


export function ProfileShow() {
  const [posts, setPosts] = useState([])
  const { userId } = useParams();
  let profileToggle = true

  return (
    <div>
      <p>ProfileShow</p>
      <p>Username:</p>
      < RelationshipController />
      <p>ProfilePostsIndex</p>
      < PostsIndex userId={userId} posts={posts} setPosts={setPosts} profileToggle={profileToggle}/>
      <p>ProfileShow</p>
    </div>
  )
}
