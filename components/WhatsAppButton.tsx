import Icons from './Icons'

export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 w-13 h-13 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-black/20 z-50 hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
      style={{ width: 52, height: 52 }}>
      <Icons.WhatsApp className="w-6 h-6"/>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-[#1f2418] text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat WhatsApp
      </span>
    </a>
  )
}
