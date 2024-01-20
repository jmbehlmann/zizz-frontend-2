import { PostsIndex } from './PostsIndex'

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>New Post</p>
      <p>Posts by user and leaders(PostsIndex)</p>
      < PostsIndex />
      <p>Following List</p>
    </div>
  )
}

