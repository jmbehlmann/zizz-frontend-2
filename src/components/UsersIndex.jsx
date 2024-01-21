import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function UsersIndex() {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    console.log('getUsers')
    axios
      .get("http://localhost:3000/users.json")
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      })
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <p>UsersIndex</p>
      {users.map(user => (
        <div key={user.id}>
          <h4>{user.name} - </h4>
          <p>{user.email}</p>
          <Link to={`./${user.id}`}>profile</Link>
          <p>----------------------------------------------------------</p>
        </div>
      ))}
    </div>
  )
}

