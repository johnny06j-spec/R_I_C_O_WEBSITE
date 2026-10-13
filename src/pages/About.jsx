import { ArrowRight, BookOpen, ShieldCheck, Heart, Lightbulb, Target, Compass, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png' // Clean crest logo
import heroBg from '../assets/hero.png' // Campus background image

export default function About() {
  return (
    <div className="bg-[#f7f5ee] min-h-screen text-slate-800 font-sans">
      
      {/* 1. HEADER BREEZE BANNER */}
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

      {/* 2. PRINCIPAL'S WELCOME */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Image / Portrait Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl bg-slate-200 border-4 border-white shadow-xl overflow-hidden relative">
                {/* Swap with real portrait image in assets later */}
                <div className="absolute inset-0 bg-[#062016]/10 flex flex-col items-center justify-center text-slate-500 p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center mb-4">
                    <Award size={36} />
                  </div>
                  <span className="font-serif font-bold text-slate-800 text-lg">Principal's Portrait</span>
                  <span className="text-xs text-slate-500 mt-1">Radiant Intellectuals' College</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#051810] text-white p-4 rounded-lg shadow-lg border border-amber-400/40 hidden sm:block">
                <p className="font-serif font-bold text-amber-400 text-sm">EMMANUEL, EXCELLENCE.</p>
                <p className="text-[10px] text-slate-300 uppercase tracking-wider">Our Guiding Light</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              WELCOME TO RICO
            </span>
            <h2 className="font-serif font-extrabold text-slate-900 text-2xl sm:text-4xl leading-tight mb-6">
              Building a Legacy of Intellectual & Character Excellence
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                At Radiant Intellectuals' College, we believe that true education reaches beyond academic scores. It shapes the mind, strengthens moral character, and equips young individuals to lead purposefully in an evolving world.
              </p>
              <p>
                Founded on unwavering ethical principles and a dedication to world-class learning, our institution provides a secure, modern, and supportive environment where every student is inspired to discover their potential.
              </p>
              <p>
                Whether in our state-of-the-art classrooms, science laboratories, or sports grounds, our dedicated educators nurture curiosity, critical thinking, and godliness in all learners.
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
          
          {/* Mission Card */}
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

          {/* Vision Card */}
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

      {/* 5. SCHOOL ANTHEM / MOTTO SECTION */}
      <section className="bg-white py-14 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img src={logo} alt="RICO Crest" className="h-16 w-auto mx-auto mb-4 object-contain mix-blend-multiply" />
          <h3 className="font-serif font-extrabold text-2xl text-slate-900 mb-1">SCHOOL MOTTO</h3>
          <p className="text-amber-600 font-serif font-bold text-lg tracking-widest uppercase mb-6">
            "EMMANUEL, EXCELLENCE."
          </p>
          <div className="p-6 bg-[#f7f5ee] rounded-xl border border-amber-200/60 shadow-inner">
            <p className="text-xs text-slate-600 italic leading-relaxed max-w-xl mx-auto">
              God with us in all our endeavors, driving our pursuit of intellectual, moral, and social leadership.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BAR */}
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

    </div>
  )
}