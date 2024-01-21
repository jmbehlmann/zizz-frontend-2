import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


export function RelationshipController() {
  const userId = useParams();
  const [isFollowing, setIsFollowing] = useState(false)
  const [relationshipId, setRelationshipId] = useState({})

  const getRelationshipId = () => {
    console.log("getRelationshipId")
    axios
      .get(`http://localhost:3000/relationships.json?leader_id=${userId.userId}`)
      .then((response) => {
        // console.log(response.data[0].id)
        if (response.data[0]) {
          setRelationshipId(response.data[0].id)
          setIsFollowing(true);
        } else {
          setIsFollowing(false);
        }
      })
  }

  const createRelationship = () => {
    console.log("createRelationship")
    axios
      .post("http://localhost:3000/relationships.json", {
        leader_id: (userId.userId),
      })
      .then((response) => {
        console.log("youre following")
        setIsFollowing(true);
        window.location.reload();
      })
  }

  const destroyRelationship = () => {
    console.log("destroy Relationship")
    axios.delete(`http://localhost:3000/relationships/${relationshipId}.json`)
    .then(() => {
      console.log("you unfollowed them")
      setIsFollowing(false);
      window.location.reload();
    })
  }

  useEffect(() => {
    getRelationshipId();
  }, [setRelationshipId, setIsFollowing]);

  let button
  if (isFollowing == true) {
    button = <button onClick={destroyRelationship}>destroyRelationship</button>;
  } else {
    button = <button onClick={createRelationship}>createRelationship</button>

  }

  console.log(relationshipId)
  console.log(isFollowing)

  return (
    <div>
      <p>RelationshipController</p>
      {button}
    </div>
  )
}


