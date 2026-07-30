import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin,
  Star,
  Award,
  Users,
  CheckCircle,
  Clock,
  Shield,
  Globe,
  ChevronRight,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/images/hero.png";

import numerologyImage from "@/assets/images/numerology.png";
import vastuImage from "@/assets/images/vastuImage.png";
import faceReadingImage from "@/assets/images/faceReadingImage.png";
import palmistryImage from "@/assets/images/palmistryImage.png";
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

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

// --- HERO SECTION ---
function Hero() {
  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background pointer-events-none" />

      {/* Glowing Zodiac Wheel bg */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 pointer-events-none blur-sm animate-[spin_120s_linear_infinite]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Zodiac_woodcut.png"
          alt=""
          className="w-full h-full object-contain mix-blend-multiply opacity-30"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-screen-xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wide">
            <Star size={13} className="fill-primary" />
            <span>Varanasi's Most Trusted Astrologer</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            <span className="block text-primary drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
              Pandit Vikas Chandra
            </span>
            Tripathi Ji
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-serif italic leading-relaxed">
            Vedic Astrologer | Marriage Consultant{" "}
            <br className="hidden md:block" />
            Career & Financial Guidance Expert
          </p>

          <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-foreground/80 sm:grid-cols-2 xl:grid-cols-3">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-3 py-1.5 rounded-lg">
              <MapPin size={15} className="text-primary shrink-0" />
              <span className="truncate">Rashulpur, Badagaon, Varanasi</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-3 py-1.5 rounded-lg">
              <Award size={15} className="text-primary shrink-0" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-3 py-1.5 rounded-lg">
              <Users size={15} className="text-primary shrink-0" />
              <span>5000+ Consultations</span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-2.5 pt-3 sm:flex-row sm:flex-wrap lg:justify-start">
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                size="default"
                className="w-full sm:w-auto h-10 text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold hover:brightness-110 shadow-[0_0_15px_rgba(212,175,55,0.4)] border-0 px-5"
              >
                Book Consultation
              </Button>
            </a>
            <a
              href="https://wa.me/919918929709?text=Namaste%20Pandit%20Ji,%20I%20need%20astrological%20guidance"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="default"
                className="w-full sm:w-auto h-10 text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5"
              >
                Chat on WhatsApp
              </Button>
            </a>
            <a href="tel:+919918929709" className="w-full sm:w-auto">
              <Button
                size="default"
                variant="outline"
                className="w-full sm:w-auto h-10 text-xs sm:text-sm border-primary/50 text-foreground hover:bg-primary/10 px-5"
              >
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[14rem] sm:max-w-[17rem] md:max-w-[20rem] lg:max-w-[22rem] aspect-[3/4]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 rounded-2xl" />
          <div className="absolute -inset-4 bg-primary/20 blur-[40px] -z-10 rounded-full" />
          <img
            src={heroImage}
            loading="eager"
            decoding="async"
            alt="Pandit Vikas Chandra Tripathi Ji"
            className="w-full h-full object-cover object-[center_15%] rounded-xl sm:rounded-2xl border border-primary/20 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

// --- SERVICES SECTION ---

const specialServices = [
  {
    id: 1,
    title: "Numerology",
    icon: "🔢",
    img: numerologyImage,
    desc: "Detailed analysis of personality, career, marriage, wealth and future based on date of birth and name numbers.",
    cardBg: "from-amber-500/15 via-card to-orange-500/10 border-amber-500/40 hover:border-amber-600 shadow-md",
    titleColor: "text-amber-800 font-bold",
  },

  {
    id: 2,
    title: "Vastu Shastra",
    icon: "🏡",
    img: vastuImage,
    desc: "Get positive energy and prosperity by solving Vastu defects in your home, office and business place.",
    cardBg: "from-emerald-500/15 via-card to-teal-500/10 border-emerald-500/40 hover:border-emerald-600 shadow-md",
    titleColor: "text-emerald-800 font-bold",
  },

  {
    id: 3,
    title: "Face Reading",
    icon: "😊",
    img: faceReadingImage,
    desc: "In-depth study of nature, destiny and direction of life based on facial structure and expressions.",
    cardBg: "from-purple-500/15 via-card to-pink-500/10 border-purple-500/40 hover:border-purple-600 shadow-md",
    titleColor: "text-purple-800 font-bold",
  },

  {
    id: 4,
    title: "Palmistry",
    icon: "✋",
    img: palmistryImage,
    desc: "Know important signs of health, career, marriage and future from palm lines.",
    cardBg: "from-rose-500/15 via-card to-orange-500/10 border-rose-500/40 hover:border-rose-600 shadow-md",
    titleColor: "text-rose-800 font-bold",
  },
];

const services = [
  {
    id: "love",
    title: "Love & Relationship Consultation",
    desc: "Resolve relationship conflicts, strengthen emotional bonds, and receive guidance for a happy and harmonious love life.",
    img: serviceLove,
    icon: "❤️",
    color: "border-rose-400/40 hover:border-rose-500 text-rose-900 bg-rose-500/5 shadow-sm",
  },
  {
    id: "career",
    title: "Career & Job Guidance",
    desc: "Get expert astrological guidance for career growth, job opportunities, promotions, and professional success.",
    img: serviceCareer,
    icon: "💼",
    color: "border-blue-400/40 hover:border-blue-500 text-blue-900 bg-blue-500/5 shadow-sm",
  },
  {
    id: "money",
    title: "Wealth & Financial Guidance",
    desc: "Overcome financial challenges, attract prosperity, and receive remedies for stable income and business growth.",
    img: serviceMoney,
    icon: "💰",
    color: "border-amber-400/40 hover:border-amber-500 text-amber-900 bg-amber-500/5 shadow-sm",
  },
  {
    id: "marriage",
    title: "Marriage & Matchmaking",
    desc: "Find solutions for delayed marriage, compatibility issues, Manglik Dosha, and marital harmony.",
    img: serviceMarriage,
    icon: "💍",
    color: "border-purple-400/40 hover:border-purple-500 text-purple-900 bg-purple-500/5 shadow-sm",
  },
  {
    id: "business",
    title: "Business Success Consultation",
    desc: "Receive astrological advice to overcome business obstacles, increase profits, and make confident business decisions.",
    img: serviceBusiness,
    icon: "📈",
    color: "border-emerald-400/40 hover:border-emerald-500 text-emerald-900 bg-emerald-500/5 shadow-sm",
  },
  {
    id: "education",
    title: "Education & Student Guidance",
    desc: "Improve concentration, academic performance, and career direction with personalized astrological insights.",
    img: serviceEducation,
    icon: "📚",
    color: "border-cyan-400/40 hover:border-cyan-500 text-cyan-900 bg-cyan-500/5 shadow-sm",
  },
  {
    id: "health",
    title: "Health & Wellness Guidance",
    desc: "Understand planetary influences on health and receive spiritual remedies for physical and mental well-being.",
    img: serviceHealth,
    icon: "🏥",
    color: "border-teal-400/40 hover:border-teal-500 text-teal-900 bg-teal-500/5 shadow-sm",
  },
  {
    id: "legal",
    title: "Legal & Court Case Guidance",
    desc: "Seek astrological support for legal disputes, court matters, and protection from unnecessary conflicts.",
    img: serviceLegal,
    icon: "⚖️",
    color: "border-indigo-400/40 hover:border-indigo-500 text-indigo-900 bg-indigo-500/5 shadow-sm",
  },
  {
    id: "family",
    title: "Family & Child Consultation",
    desc: "Restore peace in family relationships, resolve domestic issues, and receive guidance for child-related concerns.",
    img: serviceFamily,
    icon: "👶",
    color: "border-pink-400/40 hover:border-pink-500 text-pink-900 bg-pink-500/5 shadow-sm",
  },
  {
    id: "peace",
    title: "Mental Peace & Spiritual Healing",
    desc: "Reduce stress, achieve inner peace, and strengthen your spiritual journey through Vedic guidance.",
    img: servicePeace,
    icon: "🧘",
    color: "border-violet-400/40 hover:border-violet-500 text-violet-900 bg-violet-500/5 shadow-sm",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 bg-card/30 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="absolute top-32 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
        {/* ===== Special Consultation Services ===== */}

        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Our Special Consultancy Services
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-emerald-500 mx-auto rounded-full mb-3" />

          <p className="text-muted-foreground text-sm sm:text-base">
            In-depth analysis of every important aspect of life through ancient Indian wisdom.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 mb-10 sm:mb-20">
          {specialServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-xl border bg-gradient-to-br backdrop-blur-md transition-all duration-300 group flex flex-col justify-between p-2.5 sm:p-4 ${service.cardBg}`}
            >
              <div className="space-y-1.5 sm:space-y-3">
                <div className="relative aspect-[16/9.5] w-full overflow-hidden rounded-lg border border-primary/20 bg-background/80">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-1.5 right-1.5 flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-primary/40 bg-background/90 backdrop-blur-md shadow-md">
                    <span className="text-[10px] sm:text-xs">{service.icon}</span>
                  </div>
                </div>

                <h3 className={`text-xs sm:text-lg font-serif font-bold truncate ${service.titleColor}`}>
                  {service.title}
                </h3>

                <p className="text-[10px] sm:text-xs leading-tight text-muted-foreground line-clamp-2 sm:line-clamp-3">
                  {service.desc}
                </p>

                <div className="hidden sm:grid grid-cols-1 gap-1 text-[11px] pt-0.5 text-foreground/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Personalized Remedies</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4 mt-auto">
                <a
                  href={`https://wa.me/919918929709?text=नमस्ते पंडित जी, मुझे ${encodeURIComponent(service.title)} के बारे में परामर्श चाहिए।`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="default"
                    className="w-full rounded-md sm:rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-[10px] sm:text-xs shadow-sm hover:brightness-110 border-0 h-7 sm:h-9 px-1 sm:px-3 flex items-center justify-center gap-1 sm:gap-1.5"
                  >
                    ✨ Consult Now
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-2.5 sm:mb-3">
            Problems We Help Solve
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-blue-500 mx-auto rounded-full mb-2.5 sm:mb-3" />
          <p className="text-muted-foreground text-xs sm:text-base">
            Ancient Vedic wisdom tailored for modern challenges. Find clarity,
            purpose, and solutions to your life's deepest problems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 mb-10 sm:mb-16">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-xl border bg-card/70 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between ${service.color}`}
            >
              <div>
                <div className="relative overflow-hidden aspect-[16/9.5] w-full bg-background/80">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-1.5 right-1.5 bg-background/90 backdrop-blur-md px-1 sm:px-2 py-0.5 rounded-full border border-primary/30 text-[10px] sm:text-xs shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-2 sm:p-4 space-y-1 sm:space-y-1.5">
                  <h3 className="text-xs sm:text-base font-serif font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs leading-tight text-muted-foreground line-clamp-2">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="p-2 sm:p-4 pt-0 mt-auto">
                <a
                  href={`https://wa.me/919918929709?text=Namaste%20Pandit%20Ji,%20I%20need%20guidance%20regarding%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className="w-full rounded-md sm:rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-[10px] sm:text-xs hover:brightness-110 shadow-sm border-0 h-7 sm:h-8 px-1 flex items-center justify-center gap-1"
                  >
                    ✨ Consult Now <ChevronRight size={12} />
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
    {
      icon: <Clock className="w-4 h-4 sm:w-8 sm:h-8 text-amber-400" />,
      bg: "bg-amber-500/20 border-amber-500/30",
      title: "15+ Years Experience",
      desc: "Decades of deep study and practice in authentic Vedic Astrology.",
    },
    {
      icon: <CheckCircle className="w-4 h-4 sm:w-8 sm:h-8 text-emerald-400" />,
      bg: "bg-emerald-500/20 border-emerald-500/30",
      title: "Personalized Solutions",
      desc: "No generic advice. Remedies tailored strictly to your unique Kundli.",
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-8 sm:h-8 text-purple-400" />,
      bg: "bg-purple-500/20 border-purple-500/30",
      title: "Confidential Consultation",
      desc: "Your identity and personal problems remain 100% secure and private.",
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-8 sm:h-8 text-blue-400" />,
      bg: "bg-blue-500/20 border-blue-500/30",
      title: "Fast Response",
      desc: "Quick availability for urgent and pressing life matters.",
    },
    {
      icon: <Globe className="w-4 h-4 sm:w-8 sm:h-8 text-rose-400" />,
      bg: "bg-rose-500/20 border-rose-500/30",
      title: "Online Consultation",
      desc: "Connect from anywhere in the world via phone or WhatsApp.",
    },
    {
      icon: <Users className="w-4 h-4 sm:w-8 sm:h-8 text-cyan-400" />,
      bg: "bg-cyan-500/20 border-cyan-500/30",
      title: "Trusted By Thousands",
      desc: "Over 5000+ satisfied clients whose lives have been transformed.",
    },
  ];

  return (
    <section className="py-10 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-6">
            Why Choose Us
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              key={i}
              className="group rounded-xl border border-border/80 bg-card/60 p-3 sm:p-8 backdrop-blur-sm transition-colors hover:border-primary/50"
            >
              <div className={`w-8 h-8 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl border flex items-center justify-center mb-2.5 sm:mb-6 group-hover:scale-110 transition-transform ${feature.bg}`}>
                {feature.icon}
              </div>
              <h3 className="text-xs sm:text-xl font-bold text-foreground mb-1 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-[10px] sm:text-base text-muted-foreground line-clamp-2 sm:line-clamp-none">{feature.desc}</p>
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
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-card/30 border-y border-border/50"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square max-w-[210px] sm:max-w-[260px] md:max-w-[300px] mx-auto w-full">
            <div className="absolute inset-0 border-2 border-primary/40 rounded-full animate-[spin_60s_linear_infinite] border-dashed" />
            <div className="absolute inset-3 border border-primary/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-card shadow-2xl bg-card">
              <img
                src={heroImage}
                alt="Pandit Ji"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                About Pandit Ji
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-6" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">
                Pandit Vikas Chandra Tripathi Ji
              </span>{" "}
              is a renowned Vedic astrologer based in the holy city of Varanasi,
              Uttar Pradesh. With over 15 years of dedicated practice in Vedic
              Astrology, Kundli reading, and spiritual guidance, he has guided
              more than 5000 individuals and families through life's most
              challenging moments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              His approach combines deep scriptural knowledge with modern
              psychological understanding, offering practical, achievable
              remedies that bring real transformation.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4 sm:gap-6">
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">
                  5000+
                </div>
                <div className="text-sm text-foreground uppercase tracking-wider">
                  Consultations
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">
                  15+
                </div>
                <div className="text-sm text-foreground uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">
                  98%
                </div>
                <div className="text-sm text-foreground uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">
                  1000+
                </div>
                <div className="text-sm text-foreground uppercase tracking-wider">
                  Success Stories
                </div>
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
  {
    name: "Rahul Sharma",
    city: "Delhi",
    text: "Pandit Ji's guidance transformed my career. His predictions were incredibly accurate.",
  },
  {
    name: "Priya Verma",
    city: "Mumbai",
    text: "My marriage was delayed for years. After consulting Pandit Ji, I got married within 6 months.",
  },
  {
    name: "Amit Singh",
    city: "Lucknow",
    text: "Best astrologer in Varanasi. Very knowledgeable and compassionate.",
  },
  {
    name: "Sunita Devi",
    city: "Patna",
    text: "My business problems are solved. Pandit Ji's remedies worked like magic.",
  },
  {
    name: "Rajesh Kumar",
    city: "Allahabad",
    text: "Online consultation was very convenient. Highly recommended.",
  },
  {
    name: "Meena Gupta",
    city: "Bhopal",
    text: "After years of financial struggles, Pandit Ji's guidance brought stability.",
  },
  {
    name: "Vikram Patel",
    city: "Ahmedabad",
    text: "Pandit Ji predicted my career transition accurately. Amazing.",
  },
  {
    name: "Anjali Mishra",
    city: "Kanpur",
    text: "Family harmony restored. Pandit Ji's remedies are genuine and effective.",
  },
  {
    name: "Suresh Tiwari",
    city: "Gorakhpur",
    text: "Health issues resolved after following Pandit Ji's guidance.",
  },
  {
    name: "Nisha Singh",
    city: "Varanasi",
    text: "Court case won with Pandit Ji's guidance. Eternally grateful.",
  },
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
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Divine Experiences
          </h2>
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
              className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-border bg-card/40 p-6 text-center backdrop-blur-lg sm:p-8 lg:p-12"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={24} />
                ))}
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl font-serif text-foreground leading-relaxed italic mb-8">
                "{testimonials[activeIndex].text}"
              </p>
              <div>
                <div className="font-bold text-lg text-primary">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].city}
                </div>
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
    {
      q: "How does astrology consultation work?",
      a: "You provide your exact birth details (date, time, and place). Pandit Ji analyzes your Kundli (birth chart) to understand planetary positions and their impacts, offering insights and specific remedies for your problems.",
    },
    {
      q: "Can consultation be done online?",
      a: "Yes, we offer complete online consultations via phone calls and WhatsApp. You get the same detailed analysis and remedies as an in-person visit.",
    },
    {
      q: "How long does consultation take?",
      a: "A typical detailed consultation takes about 30 to 45 minutes, ensuring all your queries are thoroughly answered.",
    },
    {
      q: "What details are required for consultation?",
      a: "We strictly require your full name, exact Date of Birth, Time of Birth (AM/PM), and Place of Birth (City/State) to cast an accurate chart.",
    },
    {
      q: "How can I contact Pandit Ji directly?",
      a: "You can book an appointment through this website, directly call at +91 9918929709, or message on WhatsApp.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-24 bg-card/30 border-y border-border/50"
    >
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border/50"
            >
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

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Attempt background backend save (non-blocking)
      fetch(`${API_URL}/api/consultations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch(() => {});

      // Format WhatsApp message for Pandit Ji (+91 9918929709)
      const categoryMap: Record<string, string> = {
        marriage: "Marriage & Relationship (विवाह व संबंध)",
        career: "Job & Career (नौकरी व करियर)",
        finance: "Money & Finance (धन व संपत्ति)",
        health: "Health Issues (स्वास्थ्य समस्या)",
        legal: "Court & Legal (कोर्ट व कानूनी मामले)",
        other: "Other Guidance (अन्य परामर्श)",
      };

      const categoryText = categoryMap[formData.category] || formData.category || "General Consultation";

      const waMessage = `*नमस्ते पंडित जी!* 🙏\n*नया परामर्श अनुरोध (New Consultation Booking):*\n\n👤 *नाम (Name):* ${formData.name}\n📞 *फोन (Phone):* ${formData.phone}\n${formData.email ? `📧 *ईमेल (Email):* ${formData.email}\n` : ""}🏷️ *विषय (Category):* ${categoryText}\n📝 *संदेश (Message):* ${formData.message || "No details provided"}\n\nकृपया मुझे परामर्श का समय और मार्गदर्शन प्रदान करें।`;

      const whatsappUrl = `https://wa.me/919918929709?text=${encodeURIComponent(waMessage)}`;

      toast({
        title: "Redirecting to WhatsApp...",
        description: "Opening WhatsApp to send your consultation request directly to Pandit Ji (+91 9918929709)...",
      });

      // Open WhatsApp directly in new tab or app
      window.open(whatsappUrl, "_blank");

      setFormData({
        name: "",
        phone: "",
        email: "",
        category: "",
        message: "",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description:
          err instanceof Error ? err.message : "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Seek Divine Guidance
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-8" />
            <p className="text-lg text-muted-foreground mb-12">
              Fill out the form to request a consultation. Whether it's
              marriage, career, or peace of mind, the universe has an answer.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    Location
                  </h4>
                  <p className="text-muted-foreground">
                    Rashulpur, Badagaon, Varanasi
                    <br />
                    Uttar Pradesh – 221204
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    Phone & WhatsApp
                  </h4>
                  <p className="text-muted-foreground">+91 9918929709</p>
                  <p className="text-sm text-green-500 mt-1">
                    Available for Online Consultation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/50 p-6 shadow-xl backdrop-blur-md sm:p-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Request Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your full name"
                  className="bg-background border-border/50 focus-visible:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Mobile Number
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 99189XXXXX"
                    className="bg-background border-border/50 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Optional"
                    className="bg-background border-border/50 focus-visible:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Problem Category
                </label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleChange("category", value)}
                >
                  <SelectTrigger className="bg-background border-border/50 focus:ring-primary">
                    <SelectValue placeholder="Select an area of concern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marriage">
                      Marriage & Relationship
                    </SelectItem>
                    <SelectItem value="career">Job & Career</SelectItem>
                    <SelectItem value="finance">Money & Finance</SelectItem>
                    <SelectItem value="health">Health Issues</SelectItem>
                    <SelectItem value="legal">Court & Legal</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Brief Message (Optional)
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="How can Pandit Ji help you?"
                  className="bg-background border-border/50 focus-visible:ring-primary min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold hover:brightness-110 shadow-md border-0 h-11"
              >
                {loading ? "Redirecting..." : "✨ Submit & Send to WhatsApp"}
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
