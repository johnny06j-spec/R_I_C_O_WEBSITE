import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Image as ImageIcon, RefreshCw } from 'lucide-react'
import heroBg from '../assets/hero.png'

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

// Fallback images if database is empty initially
const sampleGallery = [
  { _id: '1', title: 'Interactive Learning in Science Lab', category: 'Academic', imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80' },
  { _id: '2', title: 'Inter-House Sports Competition', category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80' },
  { _id: '3', title: 'Graduation & Prize Giving Ceremony', category: 'Events', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80' },
  { _id: '4', title: 'Serene Campus Grounds', category: 'Campus', imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80' },
  { _id: '5', title: 'Debate & Public Speaking Finals', category: 'Academic', imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' },
  { _id: '6', title: 'Annual Cultural Festival', category: 'Events', imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
]

export default function Gallery() {
  const [items, setItems] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGallery()
  }, [])

  const fetchGallery = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/gallery`)
      if (res.ok) {
        const data = await res.json()
        if (data.length > 0) {
          setItems(data)
        } else {
          setItems(sampleGallery) // Use fallback if DB is empty
        }
      } else {
        setItems(sampleGallery)
      }
    } catch (error) {
      console.log('Using sample gallery data...')
      setItems(sampleGallery)
    } finally {
      setLoading(false)
    }
  }

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <div className="bg-[#f7f5ee] min-h-screen text-slate-800 font-sans">
      
      {/* 1. HEADER BANNER */}
      <section className="relative bg-[#062016] text-white py-16 overflow-hidden border-b border-emerald-900/40">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062016] via-[#062016]/90 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Gallery</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-wider uppercase mb-2">
            Campus Life & Events
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light">
            A visual showcase of academic activities, sports competitions, cultural celebrations, and campus achievements at RICO.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {['All', 'Academic', 'Sports', 'Events', 'Campus'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition ${
                  activeCategory === category
                    ? 'bg-[#062016] text-amber-400 shadow'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            onClick={fetchGallery}
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-800 transition"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
        </div>
      </section>

      {/* 3. PHOTO GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-20 text-slate-500">
            <RefreshCw size={32} className="animate-spin mx-auto mb-3 text-emerald-800" />
            <p className="text-xs uppercase tracking-wider font-semibold">Loading Gallery Photos...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
            <ImageIcon size={40} className="mx-auto mb-3 text-slate-400" />
            <p className="font-serif font-bold text-slate-700 text-lg">No photos found in this category</p>
            <p className="text-xs text-slate-500 mt-1">Admin will upload new photos to this section shortly.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item._id} 
                className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden group hover:shadow-md transition"
              >
                <div className="h-56 bg-slate-200 overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#062016]/80 backdrop-blur-sm text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-amber-400/30">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-slate-900 text-sm leading-snug">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs text-slate-500 mt-1">{item.caption}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  )
}