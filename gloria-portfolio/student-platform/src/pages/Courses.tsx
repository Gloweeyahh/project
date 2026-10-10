import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Courses() {
  const [courses, setCourses] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    fetch('/.netlify/functions/api-courses-list')
      .then(r => r.json())
      .then(setCourses)
      .catch(console.error)
  }, [])

  async function create() {
    if (!user?.token) return alert('Login required')
    const res = await fetch('/.netlify/functions/api-courses-create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
      body: JSON.stringify({ title, description: desc }),
    })
    if (!res.ok) return alert(await res.text())
    setTitle('')
    setDesc('')
    const jo = await res.json()
    setCourses(prev => [{ id: jo.id, title, description: desc, created_at: new Date().toISOString() }, ...prev])
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl mb-4">Courses</h2>
      <div className="mb-6">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border mb-2" />
        <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" className="w-full p-2 border mb-2" />
        <button onClick={create} className="px-4 py-2 bg-blue-600 text-white">Create course</button>
      </div>

      <ul>
        {courses.map(c => (
          <li key={c.id} className="mb-4 border p-3">
            <strong>{c.title}</strong>
            <p>{c.description}</p>
            <small>{new Date(c.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
