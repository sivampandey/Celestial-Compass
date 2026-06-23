import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="tel:+919918929709"
        className="w-14 h-14 bg-background border border-primary/50 text-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
      
      <a
        href="https://wa.me/919918929709?text=Namaste%20Pandit%20Ji,%20I%20need%20astrological%20guidance"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 relative"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping" />
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
