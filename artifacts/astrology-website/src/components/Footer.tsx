import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#05050f] border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl text-primary">🕉️</span>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-foreground leading-tight">Pandit Vikas Chandra</span>
                <span className="font-serif text-xs text-primary leading-none tracking-widest">Tripathi Ji</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Premium Vedic astrology and spiritual guidance to illuminate your path through life's most challenging moments.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/"><span className="hover:text-primary transition-colors cursor-pointer">Home</span></Link></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About Pandit Ji</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Consultation Services</a></li>
              <li><a href="/#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">📍</span>
                <span>Rashulpur, Badagaon, Varanasi, Uttar Pradesh – 221204</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📞</span>
                <a href="tel:+919918929709" className="hover:text-primary transition-colors">+91 9918929709</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📸</span>
                <a href="https://instagram.com/vikaspandit668" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@vikaspandit668</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Sunday</li>
              <li>Online: 24/7 Available</li>
              <li>Offline: By Appointment</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Pandit Vikas Chandra Tripathi Ji. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="cursor-pointer hover:text-primary">Privacy Policy</span>
            <span className="cursor-pointer hover:text-primary">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
