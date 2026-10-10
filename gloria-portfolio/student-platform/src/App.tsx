import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './context/AuthContext'

export default function App() {
  function Protected({ children }: { children: JSX.Element }) {
    const { user } = useAuth()
    if (!user) return <div className="p-8">Please login to access this page.</div>
    return children
  }

  return (
    <AuthProvider>
      <nav className="p-4 border-b">
        <Link to="/">Home</Link> | <Link to="/signup">Sign up</Link> | <Link to="/login">Login</Link> | <Link to="/courses">Courses</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div className="p-8">Welcome to Student Platform</div>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
      </Routes>
    </AuthProvider>
  )
}
