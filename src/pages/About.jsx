import { useEffect, useState } from 'react'
import { ArrowRight, BookOpen, ShieldCheck, Heart, Lightbulb, Target, Compass, Award, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import heroBg from '../assets/hero.png'

const API_BASE = import.meta.env.VITE_API_BASE_URL || ''

export default function About() {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/api/home-settings`)
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error('Error loading settings on About page:', err))
  }, [])

  const whatsappNumber = settings?.whatsappNumber || '2348000000000'
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20Radiant%20Intellectuals'%20College.`

  return (
    <div className="bg-[#f7f5ee] min-h-screen text-slate-800 font-sans relative overflow-x-hidden">
      
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
            <span className="text-slate-300">About Us</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-wider uppercase mb-2">
            About Our College
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light">
            Discover the heritage, values, and commitment to excellence that define Radiant Intellectuals' College.
          </p>
        </div>
      </section>

      {/* 2. PRINCIPAL'S WELCOME & ABOUT SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Principal's Portrait Placeholder / Featured Image Container */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl bg-[#d5dcde] border-4 border-white shadow-xl overflow-hidden relative flex items-center justify-center">
                {settings?.aboutImageUrl ? (
                  <img 
                    src={settings.aboutImageUrl} 
                    alt="Principal / School Management" 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-300/40 flex flex-col items-center justify-center text-slate-600 p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center mb-4 shadow-lg">
                      <Award size={36} />
                    </div>
                    <span className="font-serif font-bold text-slate-900 text-xl">Principal's Portrait</span>
                    <span className="text-xs text-slate-600 mt-1 font-medium">Radiant Intellectuals' College</span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#051810] text-white p-4 rounded-lg shadow-lg border border-amber-400/40 hidden sm:block z-10">
                <p className="font-serif font-bold text-amber-400 text-sm">EMMANUEL, EXCELLENCE.</p>
                <p className="text-[10px] text-slate-300 uppercase tracking-wider">Our Guiding Light</p>
              </div>
            </div>
          </div>

          {/* Dynamic About Text Content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              WELCOME TO RICO
            </span>
            <h2 className="font-serif font-extrabold text-slate-900 text-2xl sm:text-4xl leading-tight mb-6 break-words">
              {settings?.aboutTitle || 'Building a Legacy of Intellectual & Character Excellence'}
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed break-words whitespace-pre-line">
              <p>
                {settings?.aboutDescription || "At Radiant Intellectuals' College, we believe that true education reaches beyond academic scores. It shapes the mind, strengthens moral character, and equips young individuals to lead purposefully in an evolving world."}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
              <img src={logo} alt="RICO Crest" className="h-12 w-auto object-contain mix-blend-multiply" />
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm">School Management</h4>
                <p className="text-xs text-slate-500">Radiant Intellectuals' College</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="bg-[#051810] text-white py-16 border-y-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          
          <div className="bg-[#0a2e20] p-8 rounded-xl border border-emerald-800/60 shadow-lg relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="font-serif font-bold text-amber-400 text-2xl mb-3 tracking-wide">
              OUR MISSION
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To deliver holistic, high-quality education rooted in moral integrity, academic discipline, and modern innovation—empowering students to excel in higher education and contribute meaningfully to society.
            </p>
          </div>

          <div className="bg-[#0a2e20] p-8 rounded-xl border border-emerald-800/60 shadow-lg relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 flex items-center justify-center mb-6">
              <Compass size={24} />
            </div>
            <h3 className="font-serif font-bold text-amber-400 text-2xl mb-3 tracking-wide">
              OUR VISION
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To be a premier educational institution recognized globally for raising intellectual leaders with strong ethical foundations, creativity, and a lifelong commitment to excellence.
            </p>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
            WHAT GUIDES US
          </span>
          <h2 className="font-serif font-extrabold text-slate-900 text-3xl">
            Our Core Pillars
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center mb-4">
              <BookOpen size={20} />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Academic Excellence</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fostering intellectual rigor, continuous improvement, and outstanding performance across all subjects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center mb-4">
              <Heart size={20} />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Faith & Godliness</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instilling deep respect for divine principles, compassion, and sound moral judgment in daily life.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Integrity & Character</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Promoting honesty, self-discipline, and accountability in both academic and personal conduct.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center mb-4">
              <Lightbulb size={20} />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Leadership & Innovation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Encouraging critical thinking, problem-solving, and digital competence for future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BAR */}
      <section className="bg-[#062016] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-2xl text-white mb-1">Ready to join RICO?</h3>
            <p className="text-xs text-slate-300">Applications are currently open for the 2026/2027 academic session.</p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/admissions"
              className="bg-amber-400 hover:bg-amber-500 text-[#062016] font-bold px-6 py-3 rounded text-xs tracking-wider uppercase transition shadow-md flex items-center gap-2"
            >
              ENROLL NOW <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FLOATING WHATSAPP SUPPORT BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-5 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={22} className="fill-current" />
        <span className="text-xs uppercase tracking-wider">Chat with us</span>
      </a>

    </div>
  )
}