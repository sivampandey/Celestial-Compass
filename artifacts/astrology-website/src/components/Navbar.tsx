import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-3xl text-primary group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all">🕉️</span>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-foreground leading-tight tracking-wide">Pandit Vikas Chandra</span>
              <span className="font-serif text-sm text-primary leading-none tracking-widest">Tripathi Ji</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <a href="https://wa.me/919918929709?text=Namaste%20Pandit%20Ji,%20I%20need%20astrological%20guidance" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_15px_rgba(37,211,102,0.3)]">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                  className="text-base font-medium text-foreground/90 hover:text-primary block py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <a href="https://wa.me/919918929709?text=Namaste%20Pandit%20Ji,%20I%20need%20astrological%20guidance" target="_blank" rel="noopener noreferrer">
              <Button className="w-full justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
