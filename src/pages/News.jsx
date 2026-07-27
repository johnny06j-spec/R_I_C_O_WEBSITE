import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight, RefreshCw, Bell } from 'lucide-react'
import heroBg from '../assets/hero.png'

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const sampleNews = [
  {
    _id: '1',
    title: 'Resumption Date for 2026/2027 Academic Session Announced',
    category: 'Announcement',
    date: 'SEP 08, 2026',
    summary: 'The management of Radiant Intellectuals\' College wishes to notify all parents and guardians that the 1st Term 2026/2027 academic session officially commences on Monday, September 8th.',
    isUpcomingEvent: true,
    eventLocation: 'Main Campus Hall',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '2',
    title: 'RICO Science Club Wins Regional JET Competition',
    category: 'Academic',
    date: 'AUG 12, 2026',
    summary: 'Our senior secondary science delegates secured 1st place in the regional Junior Engineers, Technicians, and Scientists (JET) competition held this weekend.',
    isUpcomingEvent: false,
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '3',
    title: 'Annual Inter-House Sports Festival 2026',
    category: 'Sports',
    date: 'OCT 24, 2026',
    summary: 'Get ready for an exciting display of athletic excellence! Students across all four houses will compete in track events, football, basketball, and gymnastics.',
    isUpcomingEvent: true,
    eventLocation: 'RICO Sports Complex',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80'
  }
]

export default function News() {
  const [news, setNews] = useState([])
  const [activeTab, setActiveTab] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/news`)
      if (res.ok) {
        const data = await res.json()
        setNews(data.length > 0 ? data : sampleNews)
      } else {
        setNews(sampleNews)
      }
    } catch (err) {
      setNews(sampleNews)
    } finally {
      setLoading(false)
    }
  }

  const filteredNews = activeTab === 'All'
    ? news
    : news.filter(item => item.category.toLowerCase() === activeTab.toLowerCase() || (activeTab === 'Events' && item.isUpcomingEvent))

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
            <span className="text-slate-300">News & Events</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-wider uppercase mb-2">
            News & Announcements
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light">
            Stay updated with official school notices, academic achievements, term schedules, and upcoming campus events.
          </p>
        </div>
      </section>

      {/* 2. TAB FILTERS */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {['All', 'Announcement', 'Academic', 'Sports', 'Events'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition ${
                  activeTab === tab
                    ? 'bg-[#062016] text-amber-400 shadow'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={fetchNews}
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-800 transition"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
        </div>
      </section>

      {/* 3. NEWS CARDS GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-20 text-slate-500">
            <RefreshCw size={32} className="animate-spin mx-auto mb-3 text-emerald-800" />
            <p className="text-xs uppercase tracking-wider font-semibold">Fetching Latest News...</p>
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
            <Bell size={40} className="mx-auto mb-3 text-slate-400" />
            <p className="font-serif font-bold text-slate-700 text-lg">No posts in this category yet</p>
            <p className="text-xs text-slate-500 mt-1">Check back later for official announcements.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div 
                key={item._id}
                className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  {item.imageUrl && (
                    <div className="h-48 bg-slate-200 overflow-hidden relative">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-[#062016]/90 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-amber-400/30">
                        {item.category}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[11px] text-slate-500 mb-3">
                      <span className="flex items-center gap-1 font-semibold text-emerald-800">
                        <Calendar size={13} /> {item.date}
                      </span>
                      {item.eventLocation && (
                        <span className="flex items-center gap-1">
                          <MapPin size={13} /> {item.eventLocation}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-slate-900 text-lg leading-snug mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-auto">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider inline-flex items-center gap-1 mt-4">
                    READ FULL NOTICE <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  )
}