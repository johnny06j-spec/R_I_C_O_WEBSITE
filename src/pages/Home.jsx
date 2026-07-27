import { ArrowRight, User, GraduationCap, Users, Trophy, Building2, BookOpen, ShieldCheck, Lightbulb, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero.png' // Make sure your aerial RICO image is here
import logo from '../assets/logo.png'   // Make sure your clean logo crest is here


export default function Home() {
  return (
    <div className="bg-[#f7f5ee] min-h-screen text-slate-800 font-sans">
      
      {/* 1. HERO SECTION WITH VIBRANT FULL-BLEED BACKGROUND */}
      <section className="relative min-h-[640px] flex items-center overflow-hidden border-b border-emerald-900/30">
        
        {/* Full Image Background (Vibrant & Clear) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Soft gradient fade on the left to keep text ultra-readable without darkening the right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062016]/90 via-[#062016]/65 to-transparent md:to-[#062016]/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="max-w-xl">
            
            
{/* Main Brand Header inside Hero */}
<div className="flex items-center gap-3 mb-6">
  <img src={logo} alt="RICO Crest" className="h-16 sm:h-20 w-auto object-contain mix-blend-screen" />
  <div>
    <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-wider leading-none">
      RADIANT
    </h2>
    <p className="text-amber-400 font-serif font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mt-1">
      INTELLECTUALS' COLLEGE
    </p>
    <p className="text-[10px] text-amber-300 italic tracking-widest uppercase mt-1">
      EMMANUEL, EXCELLENCE.
    </p>
  </div>
</div>
            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-3 drop-shadow">
              Excellence in Learning, <br />
              <span className="text-amber-400">Character for Life.</span>
            </h1>

            <p className="text-slate-100 text-sm sm:text-base font-normal leading-relaxed mb-8 drop-shadow max-w-lg">
              Nurturing future leaders through quality education, strong values and a commitment to excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/admissions"
                className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#062016] font-bold px-7 py-3.5 rounded text-xs tracking-wider uppercase transition shadow-lg"
              >
                ENROLL NOW <ArrowRight size={16} />
              </Link>
              <a
                href="https://app.radiantintellectuals.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#062016]/80 hover:bg-[#062016] text-white border border-slate-300/40 font-semibold px-5 py-2.5 rounded text-xs tracking-wider transition backdrop-blur-sm"
              >
                <div className="w-7 h-7 rounded-full bg-slate-700/80 flex items-center justify-center text-amber-400">
                  <User size={14} />
                </div>
                <div className="text-left leading-tight">
                  <span className="block font-bold text-white uppercase text-[11px]">PARENT PORTAL</span>
                  <span className="block text-[9px] text-slate-300 font-normal">Access the Portal</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-[#051810] text-white py-6 border-b-4 border-amber-400 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-amber-400/80 flex items-center justify-center text-amber-400 bg-[#0a2e20] shrink-0">
              <GraduationCap size={22} />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-white">700+</p>
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">STUDENTS</p>
              <p className="text-[10px] text-slate-400">Future leaders in the making</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-amber-400/80 flex items-center justify-center text-amber-400 bg-[#0a2e20] shrink-0">
              <Users size={22} />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-white">45+</p>
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">QUALIFIED TEACHERS</p>
              <p className="text-[10px] text-slate-400">Dedicated and experienced</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-amber-400/80 flex items-center justify-center text-amber-400 bg-[#0a2e20] shrink-0">
              <Trophy size={22} />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-white">98%</p>
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">SUCCESS RATE</p>
              <p className="text-[10px] text-slate-400">Consistent academic excellence</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-amber-400/80 flex items-center justify-center text-amber-400 bg-[#0a2e20] shrink-0">
              <Building2 size={22} />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-white">15+</p>
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">YEARS OF EXCELLENCE</p>
              <p className="text-[10px] text-slate-400">A legacy of impact</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THREE-COLUMN SECTION CARDS */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Card 1: About Our School (Wide 5-cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 gap-4 items-center">
              <div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-1">
                  ABOUT OUR SCHOOL
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-xl leading-snug mb-3">
                  Nurturing Minds. <br />
                  Building Leaders.
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  At Radiant Intellectuals' College, we are committed to raising a generation of learners who excel academically, demonstrate strong moral values and become purposeful leaders in their communities and the world.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#062016] text-white text-xs font-semibold px-4 py-2 rounded hover:bg-emerald-900 transition uppercase tracking-wider"
                >
                  LEARN MORE <ArrowRight size={14} />
                </Link>
              </div>
              <div className="h-48 sm:h-full rounded-lg bg-slate-200 overflow-hidden relative">
                {/* Classroom Image Placeholder */}
                <div className="absolute inset-0 bg-emerald-950/20 flex items-center justify-center text-xs text-slate-600 font-semibold text-center p-2">
                  Students Learning
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Academics (4-cols) */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-1">
                ACADEMICS
              </span>
              <h3 className="font-serif font-bold text-slate-900 text-xl leading-snug mb-3">
                A Holistic <br />
                Learning Experience
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                From foundational learning to advanced studies, we provide a balanced curriculum that develops intellect, character, creativity and leadership.
              </p>
            </div>
            <div>
              <Link
                to="/academics"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 text-xs font-bold uppercase tracking-wider"
              >
                <BookOpen size={16} /> EXPLORE ACADEMICS <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 3: Admissions Dark Callout (3-cols) */}
          <div className="lg:col-span-3 bg-[#051810] text-white p-6 rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                ADMISSIONS
              </span>
              <h3 className="font-serif font-bold text-white text-xl leading-snug mb-3">
                Join the RICO Family
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                We welcome passionate learners and supportive families. Begin your child's journey of excellence with us today.
              </p>
            </div>
            <div className="relative z-10">
              <Link
                to="/admissions"
                className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#062016] font-bold px-4 py-3 rounded text-xs tracking-wider uppercase transition w-full"
              >
                APPLY FOR ADMISSION <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOUR CORE VALUE PILLARS AT THE BOTTOM */}
      <section className="border-t border-slate-200/80 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center shrink-0">
              <Heart size={18} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-slate-900 text-xs uppercase tracking-wider">FAITH & VALUES</h4>
              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Building strong moral and spiritual foundation.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-slate-900 text-xs uppercase tracking-wider">DISCIPLINE & CHARACTER</h4>
              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Instilling discipline, integrity and responsibility.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center shrink-0">
              <Lightbulb size={18} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-slate-900 text-xs uppercase tracking-wider">INNOVATION & CREATIVITY</h4>
              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Encouraging creativity, critical thinking and innovation.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 flex items-center justify-center shrink-0">
              <Building2 size={18} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-slate-900 text-xs uppercase tracking-wider">SAFE & CONDUCIVE ENVIRONMENT</h4>
              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Providing a secure, inclusive learning environment.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}