import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type User = { id: string; email: string; token?: string } | null

const AuthContext = createContext<{
  user: User
  setUser: (u: User) => void
}>({ user: null, setUser: () => {} })

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)

  // On mount, if we have a token in localStorage, validate it with the server
  useEffect(() => {
    const raw = localStorage.getItem('student_user')
    if (!raw) return
    try {
      const parsed = JSON.parse(raw)
      // If server sets httpOnly cookie, validate session by calling api-get-user (no Authorization header needed)
      fetch('/.netlify/functions/api-get-user')
        .then(async (res) => {
          if (!res.ok) throw new Error(await res.text())
          const data = await res.json()
          setUser({ id: data.id, email: data.email })
        })
        .catch(() => {
          localStorage.removeItem('student_user')
          setUser(null)
        })
    } catch (e) {
      setUser(null)
    }
  }, [])

  useEffect(() => {
    if (user) localStorage.setItem('student_user', JSON.stringify(user))
    else localStorage.removeItem('student_user')
  }, [user])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
