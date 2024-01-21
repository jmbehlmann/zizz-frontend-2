import axios from 'axios'
import { useState, useEffect } from 'react'

export function RelationshipsIndex({followerToggle}) {

  const [relationships, setRelationships] = useState([])

  const getRelationshipsIndex = () => {
    console.log('getRelationshipsIndex')
    const url = followerToggle ? `http://localhost:3000/relationships.json?follower_toggle=true` : 'http://localhost:3000/relationships.json'
    axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        setRelationships(response.data)
      })

  }

  useEffect(() => {
    getRelationshipsIndex();
  }, []);

  return (
    <div>
      <p>RelationshipsIndex</p>
      {relationships.map(relationship => (
      <div key={relationship.id}>
        {followerToggle ? (
          <>
            <p>{relationship.follower_id}</p>
            <p>{relationship.follower_name}</p>
            <p>{relationship.follower_email}</p>
          </>
        ) : (
          <>
            <p>{relationship.leader_id}</p>
            <p>{relationship.leader_name}</p>
            <p>{relationship.leader_email}</p>
          </>
        )}
        <p>----------------------------------------------------------</p>
      </div>
      ))}
    </div>
  )
}
