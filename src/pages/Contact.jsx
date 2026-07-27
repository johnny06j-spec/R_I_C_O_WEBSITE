import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import heroBg from '../assets/hero.png'

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
      } else {
        setError('Failed to send message. Please try again or call us directly.')
      }
    } catch (err) {
      setError('Server unreachable. Please check your internet connection.')
    } finally {
      setLoading(false)
    }
  }

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
            <span className="text-slate-300">Contact</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-wider uppercase mb-2">
            Contact Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light">
            We are here to answer your questions regarding admissions, academics, and school activities. Get in touch with us today.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                GET IN TOUCH
              </span>
              <h2 className="font-serif font-extrabold text-slate-900 text-3xl mb-4">
                We'd Love to Hear From You
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Visit our campus administrative office or reach out through any of our official channels below.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm uppercase tracking-wider">Campus Address</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Radiant Intellectuals' College, School Campus Grounds, Nigeria.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm uppercase tracking-wider">Phone Lines</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Admissions: +234 800 000 0000 <br />
                  Administrative Desk: +234 810 000 0000
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm uppercase tracking-wider">Email Address</h4>
                <p className="text-xs text-slate-600 mt-1">
                  info@radiantintellectuals.com <br />
                  admissions@radiantintellectuals.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm uppercase tracking-wider">Office Hours</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Monday – Friday: 8:00 AM – 4:00 PM <br />
                  Saturday – Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#051810] text-white p-8 rounded-2xl shadow-xl border border-emerald-900 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <MessageSquare size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">SEND A MESSAGE</span>
              </div>
              <h3 className="font-serif font-bold text-white text-2xl mb-2">
                Direct Message Form
              </h3>
              <p className="text-slate-300 text-xs mb-6">
                Fill out the form below and a representative will respond to your email within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-[#0a2e20] p-8 rounded-xl border border-amber-400 text-center py-12">
                  <CheckCircle2 size={48} className="text-amber-400 mx-auto mb-4" />
                  <h4 className="font-serif font-bold text-white text-xl">Thank You for Reaching Out!</h4>
                  <p className="text-slate-300 text-xs mt-2 max-w-md mx-auto leading-relaxed">
                    Your message has been received and saved into our administrative database. We will reply to your email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-amber-400 underline uppercase tracking-wider font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
                  {error && (
                    <div className="p-3 bg-rose-900/50 border border-rose-500 text-rose-200 text-xs rounded">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Admissions & Fees">Admissions & Fees</option>
                        <option value="Academics">Academics</option>
                        <option value="Portal Support">Portal Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-400 hover:bg-amber-500 text-[#062016] font-bold py-3.5 rounded text-xs tracking-wider uppercase transition shadow-lg flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                  >
                    <Send size={14} /> {loading ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}