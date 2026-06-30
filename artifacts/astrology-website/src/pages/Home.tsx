import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Star, Award, Users, CheckCircle, Clock, Shield, Globe, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/images/hero.png";

import serviceLove from "@/assets/images/service-love.png";
import serviceCareer from "@/assets/images/service-career.png";
import serviceMoney from "@/assets/images/service-money.png";
import serviceMarriage from "@/assets/images/service-marriage.png";
import serviceBusiness from "@/assets/images/service-business.png";
import serviceEducation from "@/assets/images/service-education.png";
import serviceHealth from "@/assets/images/service-health.png";
import serviceLegal from "@/assets/images/service-legal.png";
import serviceFamily from "@/assets/images/service-family.png";
import servicePeace from "@/assets/images/service-peace.png";

// --- HERO SECTION ---
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background pointer-events-none" />
      
      {/* Glowing Zodiac Wheel bg */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none blur-sm animate-[spin_120s_linear_infinite]">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Zodiac_woodcut.png" alt="" className="w-full h-full object-contain invert brightness-200" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide">
            <Star size={14} className="fill-primary" />
            <span>Varanasi's Most Trusted Astrologer</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            <span className="block text-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">Pandit Vikas Chandra</span>
            Tripathi Ji
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-serif italic leading-relaxed">
            Vedic Astrologer | Marriage Consultant <br className="hidden md:block" />
            Career & Financial Guidance Expert
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-foreground/80">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-4 py-2 rounded-lg">
              <MapPin size={16} className="text-primary" />
              <span>Rashulpur, Badagaon, Varanasi</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-4 py-2 rounded-lg">
              <Award size={16} className="text-primary" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-4 py-2 rounded-lg">
              <Users size={16} className="text-primary" />
              <span>5000+ Consultations</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6">
            <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <a href="#contact" className="w-full h-full flex items-center justify-center">Book Consultation</a>
            </Button>
            <a href="https://wa.me/919918929709?text=Namaste%20Pandit%20Ji,%20I%20need%20astrological%20guidance" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 text-base bg-[#25D366] hover:bg-[#20bd5a] text-white">
                Chat on WhatsApp
              </Button>
            </a>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 sm:h-14 text-base border-primary/50 text-foreground hover:bg-primary/10">
              <a href="tel:+919918929709" className="w-full h-full flex items-center justify-center">Call Now</a>
            </Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 rounded-2xl" />
          <div className="absolute -inset-4 bg-primary/20 blur-[50px] -z-10 rounded-full" />
          <img
            src={heroImage}
            loading="eager"
            decoding="async"
            alt="Pandit Vikas Chandra Tripathi Ji"
            className="w-full h-full object-cover rounded-xl sm:rounded-2xl border border-primary/20 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

// --- SERVICES SECTION ---
const services = [
  {
    id: "love",
    title: "Love & Relationship Consultation",
    desc: "Resolve relationship conflicts, strengthen emotional bonds, and receive guidance for a happy and harmonious love life.",
    img: serviceLove,
    icon: "❤️"
  },
  {
    id: "career",
    title: "Career & Job Guidance",
    desc: "Get expert astrological guidance for career growth, job opportunities, promotions, and professional success.",
    img: serviceCareer,
    icon: "💼"
  },
  {
    id: "money",
    title: "Wealth & Financial Guidance",
    desc: "Overcome financial challenges, attract prosperity, and receive remedies for stable income and business growth.",
    img: serviceMoney,
    icon: "💰"
  },
  {
    id: "marriage",
    title: "Marriage & Matchmaking",
    desc: "Find solutions for delayed marriage, compatibility issues, Manglik Dosha, and marital harmony.",
    img: serviceMarriage,
    icon: "💍"
  },
  {
    id: "business",
    title: "Business Success Consultation",
    desc: "Receive astrological advice to overcome business obstacles, increase profits, and make confident business decisions.",
    img: serviceBusiness,
    icon: "📈"
  },
  {
    id: "education",
    title: "Education & Student Guidance",
    desc: "Improve concentration, academic performance, and career direction with personalized astrological insights.",
    img: serviceEducation,
    icon: "📚"
  },
  {
    id: "health",
    title: "Health & Wellness Guidance",
    desc: "Understand planetary influences on health and receive spiritual remedies for physical and mental well-being.",
    img: serviceHealth,
    icon: "🏥"
  },
  {
    id: "legal",
    title: "Legal & Court Case Guidance",
    desc: "Seek astrological support for legal disputes, court matters, and protection from unnecessary conflicts.",
    img: serviceLegal,
    icon: "⚖️"
  },
  {
    id: "family",
    title: "Family & Child Consultation",
    desc: "Restore peace in family relationships, resolve domestic issues, and receive guidance for child-related concerns.",
    img: serviceFamily,
    icon: "👶"
  },
  {
    id: "peace",
    title: "Mental Peace & Spiritual Healing",
    desc: "Reduce stress, achieve inner peace, and strengthen your spiritual journey through Vedic guidance.",
    img: servicePeace,
    icon: "🧘"
  }
];

function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-card/30 relative">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Problems We Help Solve</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg">
            Ancient Vedic wisdom tailored for modern challenges. Find clarity, purpose, and solutions to your life's deepest problems.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={service.id} 
              className={`flex flex-col lg:flex-row gap-10 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-border/50 aspect-[4/3] sm:aspect-video shadow-xl">
                  <img loading="lazy" decoding="async" src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div> 
              </div>
              <div className="flex-1 space-y-6">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold">{service.title}</h3>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{service.desc}</p>
                <a href={`https://wa.me/919918929709?text=Namaste%20Pandit%20Ji,%20I%20need%20guidance%20regarding%20${encodeURIComponent(service.title)}`} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground gap-2 ">
                    Consult for this <ChevronRight size={16} />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- WHY CHOOSE US ---
function WhyChooseUs() {
  const features = [
    { icon: <Clock className="w-8 h-8 text-primary" />, title: "15+ Years Experience", desc: "Decades of deep study and practice in authentic Vedic Astrology." },
    { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: "Personalized Solutions", desc: "No generic advice. Remedies tailored strictly to your unique Kundli." },
    { icon: <Shield className="w-8 h-8 text-primary" />, title: "Confidential Consultation", desc: "Your identity and personal problems remain 100% secure and private." },
    { icon: <Clock className="w-8 h-8 text-primary" />, title: "Fast Response", desc: "Quick availability for urgent and pressing life matters." },
    { icon: <Globe className="w-8 h-8 text-primary" />, title: "Online Consultation", desc: "Connect from anywhere in the world via phone or WhatsApp." },
    { icon: <Users className="w-8 h-8 text-primary" />, title: "Trusted By Thousands", desc: "Over 5000+ satisfied clients whose lives have been transformed." },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Why Choose Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={i} 
              className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- ABOUT SECTION ---
function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-square max-w-[260px] sm:max-w-sm md:max-w-md mx-auto w-full">
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_60s_linear_infinite] border-dashed" />
            <div className="absolute inset-4 border border-primary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-card shadow-2xl">
              <img
                 src={heroImage}
                 alt="Pandit Ji"
                 className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">About Pandit Ji</h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-6" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Pandit Vikas Chandra Tripathi Ji</span> is a renowned Vedic astrologer based in the holy city of Varanasi, Uttar Pradesh. With over 15 years of dedicated practice in Vedic Astrology, Kundli reading, and spiritual guidance, he has guided more than 5000 individuals and families through life's most challenging moments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              His approach combines deep scriptural knowledge with modern psychological understanding, offering practical, achievable remedies that bring real transformation.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-foreground uppercase tracking-wider">Consultations</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-foreground uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-foreground uppercase tracking-wider">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- TESTIMONIALS ---
const testimonials = [
  { name: "Rahul Sharma", city: "Delhi", text: "Pandit Ji's guidance transformed my career. His predictions were incredibly accurate." },
  { name: "Priya Verma", city: "Mumbai", text: "My marriage was delayed for years. After consulting Pandit Ji, I got married within 6 months." },
  { name: "Amit Singh", city: "Lucknow", text: "Best astrologer in Varanasi. Very knowledgeable and compassionate." },
  { name: "Sunita Devi", city: "Patna", text: "My business problems are solved. Pandit Ji's remedies worked like magic." },
  { name: "Rajesh Kumar", city: "Allahabad", text: "Online consultation was very convenient. Highly recommended." },
  { name: "Meena Gupta", city: "Bhopal", text: "After years of financial struggles, Pandit Ji's guidance brought stability." },
  { name: "Vikram Patel", city: "Ahmedabad", text: "Pandit Ji predicted my career transition accurately. Amazing." },
  { name: "Anjali Mishra", city: "Kanpur", text: "Family harmony restored. Pandit Ji's remedies are genuine and effective." },
  { name: "Suresh Tiwari", city: "Gorakhpur", text: "Health issues resolved after following Pandit Ji's guidance." },
  { name: "Nisha Singh", city: "Varanasi", text: "Court case won with Pandit Ji's guidance. Eternally grateful." },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll effect
  useEffect(() => {
  const timer = setInterval(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, 4000);

  return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">Divine Experiences</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative min-h-[340px] sm:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center bg-card/40 backdrop-blur-lg border border-border p-6 sm:p-8 lg:p-12 rounded-3xl"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl font-serif text-foreground leading-relaxed italic mb-8">
                "{testimonials[activeIndex].text}"
              </p>
              <div>
                <div className="font-bold text-lg text-primary">{testimonials[activeIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[activeIndex].city}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? "bg-primary scale-125" : "bg-border"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---
function FAQ() {
  const faqs = [
    { q: "How does astrology consultation work?", a: "You provide your exact birth details (date, time, and place). Pandit Ji analyzes your Kundli (birth chart) to understand planetary positions and their impacts, offering insights and specific remedies for your problems." },
    { q: "Can consultation be done online?", a: "Yes, we offer complete online consultations via phone calls and WhatsApp. You get the same detailed analysis and remedies as an in-person visit." },
    { q: "How long does consultation take?", a: "A typical detailed consultation takes about 30 to 45 minutes, ensuring all your queries are thoroughly answered." },
    { q: "What details are required for consultation?", a: "We strictly require your full name, exact Date of Birth, Time of Birth (AM/PM), and Place of Birth (City/State) to cast an accurate chart." },
    { q: "How can I contact Pandit Ji directly?", a: "You can book an appointment through this website, directly call at +91 9918929709, or message on WhatsApp." },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// --- CONTACT & FORM ---
function Contact() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("lastConsultationRequest", new Date().toISOString());
    toast({
      title: "Request Submitted Successfully",
      description: "Pandit Ji's team will contact you shortly.",
      variant: "default",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">Seek Divine Guidance</h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-8" />
            <p className="text-lg text-muted-foreground mb-12">
              Fill out the form to request a consultation. Whether it's marriage, career, or peace of mind, the universe has an answer.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Rashulpur, Badagaon, Varanasi<br/>Uttar Pradesh – 221204</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Phone & WhatsApp</h4>
                  <p className="text-muted-foreground">+91 9918929709</p>
                  <p className="text-sm text-green-500 mt-1">Available for Online Consultation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-md border border-border p-6 sm:p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Request Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <Input required placeholder="Your full name" className="bg-background border-border/50 focus-visible:ring-primary" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mobile Number</label>
                  <Input required type="tel" placeholder="+91" className="bg-background border-border/50 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="Optional" className="bg-background border-border/50 focus-visible:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Problem Category</label>
                <Select required>
                  <SelectTrigger className="bg-background border-border/50 focus:ring-primary">
                    <SelectValue placeholder="Select an area of concern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marriage">Marriage & Relationship</SelectItem>
                    <SelectItem value="career">Job & Career</SelectItem>
                    <SelectItem value="finance">Money & Finance</SelectItem>
                    <SelectItem value="health">Health Issues</SelectItem>
                    <SelectItem value="legal">Court & Legal</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Brief Message (Optional)</label>
                <Textarea placeholder="How can Pandit Ji help you?" className="bg-background border-border/50 focus-visible:ring-primary min-h-[100px]" />
              </div>
              <Button type="submit" className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                Request Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
