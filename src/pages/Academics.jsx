import { ArrowRight, BookOpen, Microchip, Award, FlaskConical, Calculator, Globe, Compass, Trophy, Library } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero.png'

export default function Academics() {
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
            <span className="text-slate-300">Academics</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-wider uppercase mb-2">
            Academic Excellence
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light">
            Providing a balanced, innovative, and rigorous curriculum designed to prepare students for top universities and global opportunities.
          </p>
        </div>
      </section>

      {/* 2. ACADEMIC DIVISIONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
            OUR ACADEMIC STRUCTURE
          </span>
          <h2 className="font-serif font-extrabold text-slate-900 text-3xl">
            Levels of Learning
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Junior Secondary School (JSS) */}
          <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center mb-6">
              <BookOpen size={24} />
            </div>
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-1">
              JSS 1 – JSS 3
            </span>
            <h3 className="font-serif font-bold text-slate-900 text-2xl mb-4">
              Junior Secondary School
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Our junior curriculum focuses on building strong foundational skills across core sciences, humanities, languages, and vocational subjects—preparing students for BECE certification and future specialization.
            </p>
            
            <div className="border-t border-slate-150 pt-4">
              <h4 className="font-serif font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">Key Subjects:</h4>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-700">
                <span className="bg-[#f7f5ee] px-2.5 py-1 rounded font-medium border border-slate-200">Mathematics</span>
                <span className="bg-[#f7f5ee] px-2.5 py-1 rounded font-medium border border-slate-200">English Language</span>
                <span className="bg-[#f7f5ee] px-2.5 py-1 rounded font-medium border border-slate-200">Basic Science & Tech</span>
                <span className="bg-[#f7f5ee] px-2.5 py-1 rounded font-medium border border-slate-200">Social Studies</span>
                <span className="bg-[#f7f5ee] px-2.5 py-1 rounded font-medium border border-slate-200">Business Studies</span>
                <span className="bg-[#f7f5ee] px-2.5 py-1 rounded font-medium border border-slate-200">Civic Education</span>
                <span className="bg-[#f7f5ee] px-2.5 py-1 rounded font-medium border border-slate-200">Agricultural Science</span>
              </div>
            </div>
          </div>

          {/* Senior Secondary School (SSS) */}
          <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-1">
              SSS 1 – SSS 3
            </span>
            <h3 className="font-serif font-bold text-slate-900 text-2xl mb-4">
              Senior Secondary School
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Advanced preparation for WAEC, NECO, and JAMB exams. Students specialize in focused departments supported by experienced teachers and practical laboratory training.
            </p>
            
            <div className="border-t border-slate-150 pt-4 space-y-3">
              <div>
                <span className="font-serif font-bold text-emerald-800 text-xs uppercase tracking-wider block mb-1">🔬 Science Track:</span>
                <p className="text-[11px] text-slate-600">Physics, Chemistry, Biology, Further Mathematics, Agricultural Science.</p>
              </div>
              <div>
                <span className="font-serif font-bold text-emerald-800 text-xs uppercase tracking-wider block mb-1">💼 Commercial Track:</span>
                <p className="text-[11px] text-slate-600">Financial Accounting, Commerce, Economics, Office Practice.</p>
              </div>
              <div>
                <span className="font-serif font-bold text-emerald-800 text-xs uppercase tracking-wider block mb-1">🎨 Arts & Humanities Track:</span>
                <p className="text-[11px] text-slate-600">Literature-in-English, Government, Christian Religious Studies, History.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CURRICULUM HIGHLIGHTS */}
      <section className="bg-[#051810] text-white py-16 border-y-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              WHY OUR ACADEMICS STAND OUT
            </span>
            <h2 className="font-serif font-extrabold text-white text-3xl">
              Curriculum & Learning Environment
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0a2e20] p-6 rounded-xl border border-emerald-800/60">
              <FlaskConical size={28} className="text-amber-400 mb-4" />
              <h3 className="font-serif font-bold text-white text-base mb-2">Practical Laboratories</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fully equipped Physics, Chemistry, and Biology labs for real hands-on practical experiments.
              </p>
            </div>

            <div className="bg-[#0a2e20] p-6 rounded-xl border border-emerald-800/60">
              <Microchip size={28} className="text-amber-400 mb-4" />
              <h3 className="font-serif font-bold text-white text-base mb-2">ICT & Digital Literacy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Computer studies and modern technological tools to prepare students for the digital economy.
              </p>
            </div>

            <div className="bg-[#0a2e20] p-6 rounded-xl border border-emerald-800/60">
              <Calculator size={28} className="text-amber-400 mb-4" />
              <h3 className="font-serif font-bold text-white text-base mb-2">WAEC & NECO Drills</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structured revision programs, past questions analysis, and mock examinations to ensure top pass rates.
              </p>
            </div>

            <div className="bg-[#0a2e20] p-6 rounded-xl border border-emerald-800/60">
              <Library size={28} className="text-amber-400 mb-4" />
              <h3 className="font-serif font-bold text-white text-base mb-2">E-Library & Resource Center</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A rich collection of academic books, journals, and digital research materials for student study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXTRACURRICULAR ACTIVITIES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
            BEYOND THE CLASSROOM
          </span>
          <h2 className="font-serif font-extrabold text-slate-900 text-3xl">
            Co-Curricular & Clubs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <Trophy size={24} className="text-emerald-800 mb-3" />
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Debate & Literary Society</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enhancing public speaking, critical reasoning, and essay writing through regional competitions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <Compass size={24} className="text-emerald-800 mb-3" />
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">JET / Science Club</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Igniting curiosity in robotics, engineering concepts, and scientific invention projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <Globe size={24} className="text-emerald-800 mb-3" />
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Sports & Physical Education</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inter-house sports competitions, football, athletics, and basketball for physical fitness and teamwork.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-[#062016] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-2xl text-white mb-1">Invest in Quality Education</h3>
            <p className="text-xs text-slate-300">Enroll your child at Radiant Intellectuals' College today.</p>
          </div>
          <div>
            <Link
              to="/admissions"
              className="bg-amber-400 hover:bg-amber-500 text-[#062016] font-bold px-6 py-3 rounded text-xs tracking-wider uppercase transition shadow-md flex items-center gap-2"
            >
              APPLY NOW <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}