import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'

const API_BASE = import.meta.env.VITE_API_BASE_URL || ''

export default function WhatsAppWidget() {
  const [whatsappNumber, setWhatsappNumber] = useState('2348000000000')

  useEffect(() => {
    fetch(`${API_BASE}/api/home-settings`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.whatsappNumber) {
          setWhatsappNumber(data.whatsappNumber)
        }
      })
      .catch((err) => console.log('Error loading WhatsApp number:', err))
  }, [])

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20Radiant%20Intellectuals'%20College.`

  return (
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
  )
}