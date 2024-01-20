import axios from 'axios'
import { useState } from 'react'

export function FollowingIndex() {

  const [followings, setFollowings] = useState([])

  const getFollowingIndex = () => {
    console.log('getFollowingIndex')
    axios
      .get('http://localhost:3000/relationships.json')
      .then((response) => {
        console.log(response.data)
        setFollowings(response.data)
      })

  }


  return (
    <div>
      <p>FollowingIndex</p>
      <button onClick={getFollowingIndex}>Get Following</button>
      {followings.map(following => (
        <div key={following.id}>
          <p>{following.leader_id}</p>
          <p>{following.leader_name}</p>
          <p>{following.leader_email}</p>
          <p>----------------------------------------------------------</p>
        </div>
      ))}
    </div>
  )
}
