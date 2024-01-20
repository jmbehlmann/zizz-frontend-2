import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { ProfileShow } from './components/ProfileShow'
import { Following } from './components/Following'
import { Followers } from './components/Followers'
import { UsersIndex } from './components/UsersIndex'

export function Content() {



  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/users/:userId" element={<ProfileShow />} />
          <Route path="/following" element={<Following />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/users" element={<UsersIndex />} />
        </Routes>
      </div>
  )
}
