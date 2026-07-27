import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, HelpCircle, Send } from 'lucide-react'
import heroBg from '../assets/hero.png'

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    proposedClass: 'JSS 1',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `${formData.parentName} (Child: ${formData.studentName} - ${formData.proposedClass})`,
          email: formData.email || 'N/A',
          phone: formData.phone,
          subject: 'Admission Inquiry',
          message: formData.message || `Inquiry for ${formData.studentName} seeking admission into ${formData.proposedClass}.`
        })
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({
          parentName: '',
          phone: '',
          email: '',
          studentName: '',
          proposedClass: 'JSS 1',
          message: ''
        })
      } else {
        alert('Failed to submit inquiry. Please try again.')
      }
    } catch (err) {
      alert('Unable to connect to server. Please check your network.')
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
            <span className="text-slate-300">Admissions</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-wider uppercase mb-2">
            Admissions Open
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light">
            Begin your child's journey toward academic brilliance and godly leadership at Radiant Intellectuals' College.
          </p>
        </div>
      </section>

      {/* 2. ADMISSION STEPS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
            HOW TO APPLY
          </span>
          <h2 className="font-serif font-extrabold text-slate-900 text-3xl">
            4 Simple Steps to Join RICO
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm relative">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 font-bold flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Obtain Application Form</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fill out the online inquiry form on this page or visit the school administrative desk to pick up an application packet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm relative">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 font-bold flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Entrance Examination</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prospective students sit for our standard entrance test covering Mathematics, English, and General Knowledge.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm relative">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 font-bold flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Oral Interview</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A brief screening interview with candidate and parents to align expectations, values, and student support needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm relative">
            <div className="w-10 h-10 rounded-full bg-[#062016] text-amber-400 font-bold flex items-center justify-center mb-4">
              4
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base mb-2">Admission & Registration</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Successful applicants receive an official offer letter and access details to pay fees securely via Paystack on our portal.
            </p>
          </div>

        </div>
      </section>

      {/* 3. REQUIREMENTS & APPLICATION FORM GRID */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Entry Requirements */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
              ENTRY REQUIREMENTS
            </span>
            <h2 className="font-serif font-extrabold text-slate-900 text-2xl sm:text-3xl mb-6">
              What You'll Need
            </h2>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f7f5ee] border border-slate-200">
                <CheckCircle2 size={18} className="text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Primary School Testimonial / Result</span>
                  <p>For candidates applying into JSS 1 (Primary 6 / Basic 6 completion certificate).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f7f5ee] border border-slate-200">
                <CheckCircle2 size={18} className="text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Transfer Documents (If applicable)</span>
                  <p>Recent academic transcripts/report cards and transfer certificate from previous secondary school.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f7f5ee] border border-slate-200">
                <CheckCircle2 size={18} className="text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Passport Photographs</span>
                  <p>Two (2) recent colored passport-sized photographs of the applicant.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f7f5ee] border border-slate-200">
                <CheckCircle2 size={18} className="text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Birth Certificate</span>
                  <p>Copy of official birth certificate or sworn declaration of age.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Online Admission Inquiry Form */}
          <div className="lg:col-span-7 bg-[#051810] text-white p-8 rounded-2xl shadow-xl border border-emerald-900">
            <h3 className="font-serif font-bold text-white text-2xl mb-1">
              Start Application Inquiry
            </h3>
            <p className="text-slate-300 text-xs mb-6">
              Submit your information below and our admissions registrar will reach out to schedule your entrance test.
            </p>

            {submitted ? (
              <div className="bg-[#0a2e20] p-6 rounded-xl border border-amber-400 text-center py-8">
                <CheckCircle2 size={40} className="text-amber-400 mx-auto mb-3" />
                <h4 className="font-serif font-bold text-white text-lg">Inquiry Submitted Successfully!</h4>
                <p className="text-slate-300 text-xs mt-2 max-w-md mx-auto">
                  Thank you for your interest in Radiant Intellectuals' College. Our administrative team will call or email you shortly with entrance exam details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-amber-400 underline uppercase tracking-wider font-bold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. John Doe"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

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
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                      Child's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mary Doe"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                      Proposed Class *
                    </label>
                    <select
                      value={formData.proposedClass}
                      onChange={(e) => setFormData({ ...formData, proposedClass: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                    >
                      <option value="JSS 1">JSS 1</option>
                      <option value="JSS 2">JSS 2</option>
                      <option value="JSS 3">JSS 3</option>
                      <option value="SSS 1 (Science)">SSS 1 (Science)</option>
                      <option value="SSS 1 (Commercial)">SSS 1 (Commercial)</option>
                      <option value="SSS 1 (Arts)">SSS 1 (Arts)</option>
                      <option value="SSS 2">SSS 2</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                    Additional Message / Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific questions about fees, boarding facilities, or subjects..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-[#062016] font-bold py-3 rounded text-xs tracking-wider uppercase transition shadow-lg flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                >
                  <Send size={14} /> {loading ? 'SUBMITTING...' : 'SUBMIT APPLICATION INQUIRY'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
            GOT QUESTIONS?
          </span>
          <h2 className="font-serif font-extrabold text-slate-900 text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-serif font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <HelpCircle size={18} className="text-amber-600" /> When do entrance examinations hold?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed pl-6">
              Entrance exams are held in batches between April and August. Specific dates are communicated to parents immediately upon submitting an application form or inquiry.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-serif font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <HelpCircle size={18} className="text-amber-600" /> How do parents pay school fees?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed pl-6">
              All official school fees are managed digitally through our online Parent Portal powered by Paystack. Parents can pay securely via debit card, bank transfer, or USSD and receive instant digital receipts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-serif font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <HelpCircle size={18} className="text-amber-600" /> Do you accept mid-term transfer students?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed pl-6">
              Yes, mid-term transfer students are considered subject to space availability in the target class and satisfactory performance in our placement assessment.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}