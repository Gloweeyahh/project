import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  if (!user) return <div className="p-8">Please login to view your dashboard.</div>

  async function handleUpload() {
    if (!file) return alert('Select a file')
    setUploading(true)
    try {
      const res = await fetch('/.netlify/functions/api-upload-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, contentType: file.type || 'application/octet-stream' }),
      })
      if (!res.ok) throw new Error(await res.text())
      const { url } = await res.json()
      await fetch(url, { method: 'PUT', body: file, headers: { 'Content-Type': file.type } })
      alert('Uploaded')
    } catch (err) {
      alert(String(err))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Welcome, {user.email}</h2>
      <p className="mb-4">This dashboard will track courses and progress.</p>

      <div className="mb-4">
        <label className="block mb-2">Upload a file (course asset)</label>
        <input type="file" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} />
        <div className="mt-2">
          <button onClick={handleUpload} disabled={uploading} className="px-4 py-2 bg-blue-600 text-white">
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>
    </div>
  )
}
