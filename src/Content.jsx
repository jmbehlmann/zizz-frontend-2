import { Navbar } from './components/Navbar'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'

export function Content() {



  return (
    <main>
      <div>
        <Navbar />
        <Signup />
        <Login />
        <Dashboard />
      </div>
    </main>
  )
}
