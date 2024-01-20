import axios from 'axios'
import { useState } from 'react'

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

  return (
    <div>
      <p>UsersIndex</p>
      <button onClick={getUsers}>Get Users</button>
      {users.map(user => (
        <div key={user.id}>
          <h4>{user.name} - </h4>
          <p>{user.email}</p>
          <p>----------------------------------------------------------</p>
        </div>
      ))}
    </div>
  )
}

