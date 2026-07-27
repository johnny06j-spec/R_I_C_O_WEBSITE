import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Settings, User } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'ACADEMICS', path: '/academics' },
    { name: 'ADMISSIONS', path: '/admissions' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'NEWS & EVENTS', path: '/news' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (
    <header className="bg-[#062016] text-white sticky top-0 z-50 shadow-md border-b border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="RICO Logo" 
              className="h-12 w-auto object-contain mix-blend-screen"
            />
            <div>
              <h1 className="font-serif font-extrabold text-lg sm:text-xl text-white tracking-wider leading-none">
                RADIANT
              </h1>
              <p className="text-amber-400 font-serif font-semibold text-[10px] tracking-[0.18em] uppercase mt-0.5">
                INTELLECTUALS' COLLEGE
              </p>
              <p className="text-[9px] text-amber-300/80 italic tracking-widest uppercase">
                EMMANUEL, EXCELLENCE.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold tracking-wider">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-amber-400 border-b-2 border-amber-400'
                      : 'text-slate-200 hover:text-amber-400'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Action Buttons: Parent Portal & Admin */}
          <div className="hidden lg:flex items-center gap-3">
            {/* External Portal App Link (When ready) */}
            <a
              href="https://app.radiantintellectuals.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 border border-amber-400/60 hover:bg-emerald-900/50 text-amber-400 px-3.5 py-2 rounded text-[11px] font-bold uppercase tracking-wider transition"
            >
              <User size={14} /> PARENT/STUDENT PORTAL
            </a>

            {/* Local Route Link to Website Admin Panel */}
            <Link
              to="/admin"
              className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-[#062016] px-3.5 py-2 rounded text-[11px] font-bold uppercase tracking-wider transition shadow"
            >
              <Settings size={14} /> ADMIN
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-amber-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#051810] border-t border-emerald-900 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-xs font-bold tracking-wider text-slate-200 hover:text-amber-400 py-2 border-b border-emerald-900/40"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://app.radiantintellectuals.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-amber-400/60 text-amber-400 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              <User size={14} /> PARENT/STUDENT PORTAL
            </a>
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-amber-400 text-[#062016] py-2.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              <Settings size={14} /> ADMIN
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}