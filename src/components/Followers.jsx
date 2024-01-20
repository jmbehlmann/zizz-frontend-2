import { RelationshipsIndex } from './RelationshipsIndex'

export function Followers() {

  const followerToggle = true;

  return (
    <div>
      <p>FollowersIndex</p>
      < RelationshipsIndex followerToggle={followerToggle}/>
    </div>
  )
}
