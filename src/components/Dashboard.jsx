import { useState } from 'react'
import { PostsIndex } from './PostsIndex'
import { PostsCreate } from './PostsCreate'

export function Dashboard() {
  const [posts, setPosts] = useState([])

  const handlePostCreate = (newPost) => {
    setPosts([newPost, ...posts])
  }


  return (
    <div>
      <h1>Dashboard</h1>
      < PostsCreate onPostCreate={handlePostCreate}/>
      < PostsIndex posts={posts} setPosts={setPosts}/>
      <p>Following List</p>
    </div>
  )
}

