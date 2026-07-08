import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6 sm:gap-4">
      <a
        href="tel:+919918929709"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-background text-primary shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground sm:h-14 sm:w-14"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
      
      <a
        href="https://wa.me/919918929709?text=Namaste%20Pandit%20Ji,%20I%20need%20astrological%20guidance"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 sm:h-14 sm:w-14"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping" />
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
