import { useState, useEffect } from 'react'
import { Lock, LogOut, Image, Newspaper, Mail, Plus, Trash2, CheckCircle2, ShieldAlert, Upload } from 'lucide-react'

// Dynamic API Base URL from environment variable or local fallback
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem('rico_admin_token') || '')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState('gallery') // 'gallery' | 'news' | 'inquiries'

  // Data states
  const [galleryList, setGalleryList] = useState([])
  const [newsList, setNewsList] = useState([])
  const [contactList, setContactList] = useState([])

  // Gallery Form States
  const [galleryTitle, setGalleryTitle] = useState('')
  const [galleryCategory, setGalleryCategory] = useState('Events')
  const [galleryCaption, setGalleryCaption] = useState('')
  const [galleryFile, setGalleryFile] = useState(null)

  // News Form States
  const [newsTitle, setNewsTitle] = useState('')
  const [newsCategory, setNewsCategory] = useState('Announcement')
  const [newsDate, setNewsDate] = useState('')
  const [newsSummary, setNewsSummary] = useState('')
  const [newsFile, setNewsFile] = useState(null)

  const [statusMsg, setStatusMsg] = useState('')

  useEffect(() => {
    if (token) {
      fetchAdminData()
    }
  }, [token])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError('')

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()
      if (res.ok) {
        localStorage.setItem('rico_admin_token', data.token)
        setToken(data.token)
        setUsername('')
        setPassword('')
      } else {
        setLoginError(data.error || 'Login failed')
      }
    } catch (err) {
      setLoginError('Unable to connect to backend server.')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('rico_admin_token')
    setToken('')
  }

  const fetchAdminData = async () => {
    try {
      const [galRes, newsRes, conRes] = await Promise.all([
        fetch(`${API_URL}/api/gallery`),
        fetch(`${API_URL}/api/news`),
        fetch(`${API_URL}/api/contact`)
      ])

      if (galRes.ok) setGalleryList(await galRes.json())
      if (newsRes.ok) setNewsList(await newsRes.json())
      if (conRes.ok) setContactList(await conRes.json())
    } catch (err) {
      console.log('Error fetching admin data')
    }
  }

  // --- Add Gallery Photo with Device Upload ---
  const handleAddGallery = async (e) => {
    e.preventDefault()
    if (!galleryFile) {
      alert('Please select an image file from your device!')
      return
    }

    const formData = new FormData()
    formData.append('title', galleryTitle)
    formData.append('category', galleryCategory)
    formData.append('caption', galleryCaption)
    formData.append('image', galleryFile)

    try {
      const res = await fetch(`${API_URL}/api/gallery`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      if (res.ok) {
        setStatusMsg('Photo uploaded and published to Gallery!')
        setGalleryTitle('')
        setGalleryCaption('')
        setGalleryFile(null)
        // Reset file input element
        e.target.reset()
        fetchAdminData()
      } else {
        setStatusMsg('Failed to upload photo')
      }
    } catch (err) {
      setStatusMsg('Failed to upload photo')
    }
  }

  // --- Delete Gallery Photo ---
  const handleDeleteGallery = async (id) => {
    if (!confirm('Are you sure you want to delete this photo?')) return
    try {
      const res = await fetch(`${API_URL}/api/gallery/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (res.ok) fetchAdminData()
    } catch (err) {
      console.log('Error deleting item')
    }
  }

  // --- Add News Post with Optional Image Upload ---
  const handleAddNews = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', newsTitle)
    formData.append('category', newsCategory)
    formData.append('date', newsDate)
    formData.append('summary', newsSummary)
    if (newsFile) {
      formData.append('image', newsFile)
    }

    try {
      const res = await fetch(`${API_URL}/api/news`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      if (res.ok) {
        setStatusMsg('News post published successfully!')
        setNewsTitle('')
        setNewsDate('')
        setNewsSummary('')
        setNewsFile(null)
        e.target.reset()
        fetchAdminData()
      } else {
        setStatusMsg('Failed to publish news')
      }
    } catch (err) {
      setStatusMsg('Failed to publish news')
    }
  }

  // --- Delete News Post ---
  const handleDeleteNews = async (id) => {
    if (!confirm('Delete this news post?')) return
    try {
      const res = await fetch(`${API_URL}/api/news/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (res.ok) fetchAdminData()
    } catch (err) {
      console.log('Error deleting news')
    }
  }

  // UNAUTHENTICATED: LOGIN VIEW
  if (!token) {
    return (
      <div className="min-h-screen bg-[#051810] flex items-center justify-center p-4">
        <div className="bg-[#0a2e20] text-white p-8 rounded-2xl border border-emerald-800 shadow-2xl max-w-md w-full">
          <div className="w-12 h-12 bg-amber-400/10 border border-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-400">
            <Lock size={22} />
          </div>
          <h2 className="font-serif font-extrabold text-center text-2xl mb-1">Website Admin Portal</h2>
          <p className="text-center text-xs text-slate-300 mb-6">Manage gallery photos, news, and inquiries.</p>

          {loginError && (
            <div className="p-3 bg-rose-900/50 border border-rose-500 text-rose-200 text-xs rounded mb-4 flex items-center gap-2">
              <ShieldAlert size={16} /> {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-slate-800">
            <div>
              <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                Username
              </label>
              <input
                type="text"
                required
                placeholder="Enter admin username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-[#062016] font-bold py-3 rounded text-xs tracking-wider uppercase transition shadow-lg mt-2"
            >
              LOG IN TO DASHBOARD
            </button>
          </form>
        </div>
      </div>
    )
  }

  // AUTHENTICATED: DASHBOARD VIEW
  return (
    <div className="bg-[#f7f5ee] min-h-screen text-slate-800 font-sans pb-16">
      
      {/* Header */}
      <header className="bg-[#062016] text-white py-6 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">ADMIN PANEL</span>
            <h1 className="font-serif font-extrabold text-2xl text-white">Website Content Management</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 border border-rose-400/60 text-rose-300 hover:bg-rose-900/40 px-3.5 py-2 rounded text-xs font-bold uppercase transition"
          >
            <LogOut size={14} /> LOG OUT
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-4">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition ${
              activeTab === 'gallery' ? 'bg-[#062016] text-amber-400' : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Image size={15} /> Gallery ({galleryList.length})
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition ${
              activeTab === 'news' ? 'bg-[#062016] text-amber-400' : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Newspaper size={15} /> News & Events ({newsList.length})
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition ${
              activeTab === 'inquiries' ? 'bg-[#062016] text-amber-400' : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Mail size={15} /> Messages ({contactList.length})
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {statusMsg && (
          <div className="mb-6 p-3 bg-emerald-900 text-amber-300 text-xs rounded border border-emerald-700 flex items-center gap-2">
            <CheckCircle2 size={16} /> {statusMsg}
          </div>
        )}

        {/* 1. GALLERY MANAGEMENT */}
        {activeTab === 'gallery' && (
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
              <h3 className="font-serif font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <Upload size={18} className="text-amber-600" /> Upload New Gallery Photo
              </h3>
              <form onSubmit={handleAddGallery} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold mb-1">Photo Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Science Fair 2026"
                    value={galleryTitle}
                    onChange={(e) => setGalleryTitle(e.target.value)}
                    className="w-full border border-slate-300 rounded p-2.5"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Category *</label>
                  <select
                    value={galleryCategory}
                    onChange={(e) => setGalleryCategory(e.target.value)}
                    className="w-full border border-slate-300 rounded p-2.5"
                  >
                    <option value="Academic">Academic</option>
                    <option value="Sports">Sports</option>
                    <option value="Events">Events</option>
                    <option value="Campus">Campus</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold mb-1">Select Photo from Device *</label>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) => setGalleryFile(e.target.files[0])}
                    className="w-full border border-slate-300 rounded p-2 bg-slate-50 text-slate-700 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Caption / Description</label>
                  <input
                    type="text"
                    placeholder="Short description..."
                    value={galleryCaption}
                    onChange={(e) => setGalleryCaption(e.target.value)}
                    className="w-full border border-slate-300 rounded p-2.5"
                  />
                </div>
                <button type="submit" className="w-full bg-[#062016] text-amber-400 font-bold py-3 rounded uppercase tracking-wider hover:bg-emerald-950 transition">
                  UPLOAD & PUBLISH PHOTO
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
              <h3 className="font-serif font-bold text-slate-900 text-lg mb-4">Live Gallery Photos</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {galleryList.map((item) => (
                  <div key={item._id} className="border border-slate-200 rounded p-2 flex gap-3 relative">
                    <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-grow pr-6">
                      <p className="font-bold text-xs leading-snug">{item.title}</p>
                      <span className="text-[10px] text-amber-600 uppercase font-bold">{item.category}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteGallery(item._id)}
                      className="absolute top-2 right-2 text-rose-600 hover:text-rose-800"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. NEWS MANAGEMENT */}
        {activeTab === 'news' && (
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
              <h3 className="font-serif font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <Plus size={18} className="text-amber-600" /> Post News / Event Notice
              </h3>
              <form onSubmit={handleAddNews} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold mb-1">Headline Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Resumption Date Announced"
                    value={newsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                    className="w-full border border-slate-300 rounded p-2.5"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold mb-1">Category *</label>
                    <select
                      value={newsCategory}
                      onChange={(e) => setNewsCategory(e.target.value)}
                      className="w-full border border-slate-300 rounded p-2.5"
                    >
                      <option value="Announcement">Announcement</option>
                      <option value="Academic">Academic</option>
                      <option value="Sports">Sports</option>
                      <option value="Event">Event</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Display Date *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SEP 08, 2026"
                      value={newsDate}
                      onChange={(e) => setNewsDate(e.target.value)}
                      className="w-full border border-slate-300 rounded p-2.5"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-bold mb-1">Summary *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Notice details..."
                    value={newsSummary}
                    onChange={(e) => setNewsSummary(e.target.value)}
                    className="w-full border border-slate-300 rounded p-2.5"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Attach Photo from Device (Optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewsFile(e.target.files[0])}
                    className="w-full border border-slate-300 rounded p-2 bg-slate-50 text-slate-700 cursor-pointer"
                  />
                </div>
                <button type="submit" className="w-full bg-[#062016] text-amber-400 font-bold py-3 rounded uppercase tracking-wider hover:bg-emerald-950 transition">
                  PUBLISH NEWS NOTICE
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-slate-900 text-lg mb-4">Published News Notices</h3>
              {newsList.map((item) => (
                <div key={item._id} className="border border-slate-200 rounded p-3 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-amber-600 font-bold uppercase">{item.category} • {item.date}</span>
                    <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{item.summary}</p>
                  </div>
                  <button onClick={() => handleDeleteNews(item._id)} className="text-rose-600 hover:text-rose-800 ml-4">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. INQUIRIES & MESSAGES */}
        {activeTab === 'inquiries' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-slate-900 text-lg mb-4">Incoming Contact & Admission Messages</h3>
            {contactList.length === 0 ? (
              <p className="text-xs text-slate-500">No contact messages received yet.</p>
            ) : (
              contactList.map((msg) => (
                <div key={msg._id} className="p-4 bg-[#f7f5ee] rounded-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900 text-xs">{msg.fullName} ({msg.phone})</span>
                    <span className="text-[10px] text-slate-500">{new Date(msg.createdAt).toLocaleDateString()}</span>
                  </div>
                  <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold uppercase">{msg.subject}</span>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed">{msg.message}</p>
                  <p className="text-[10px] text-slate-500 mt-1">Email: {msg.email}</p>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  )
}