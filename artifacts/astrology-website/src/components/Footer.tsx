import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#05050f] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          
          <div className="space-y-4 sm:col-span-2 xl:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-3xl text-primary">🕉️</span>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-foreground leading-tight">Pandit Vikas Chandra</span>
                <span className="font-serif text-xs text-primary leading-none tracking-widest">Tripathi Ji</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-center text-xs text-muted-foreground md:text-left">
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
