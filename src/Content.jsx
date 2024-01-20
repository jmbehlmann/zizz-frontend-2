import { Navbar } from './components/Navbar'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'

export function Content() {



  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
  )
}
