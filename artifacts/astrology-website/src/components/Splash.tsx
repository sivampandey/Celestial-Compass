import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash() {
  const [show, setShow] = useState(false);

 useEffect(() => {
  const hasSeenSplash = localStorage.getItem("hasSeenAstrologySplash");

  if (!hasSeenSplash) {
    setShow(true);
    localStorage.setItem("hasSeenAstrologySplash", "true");
  }

  const timer = setTimeout(() => {
    setShow(false);
  }, 5000);

  return () => clearTimeout(timer);
}, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a1a] overflow-hidden"
        >
          {/* Particle background effect */}
          <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-screen" />
          
          {/* Glowing orb */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-8xl md:text-9xl text-primary font-serif mb-8 drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]"
          >
            🕉️
          </motion.div>

          <div className="text-center space-y-4 mb-12">
            {[
              "ॐ भूर्भुवः स्वः",
              "तत्सवितुर्वरेण्यं",
              "भर्गो देवस्य धीमहि।",
              "धियो यो नः प्रचोदयात्॥"
            ].map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.5 }}
                className="text-[clamp(1rem,2.5vw,1.5rem)] font-serif tracking-widest text-primary/90 drop-shadow-md"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="max-w-2xl px-4 text-center font-serif text-[clamp(1.25rem,3vw,1.75rem)] tracking-wide text-foreground"
          >
            Welcome to the Divine Guidance of <br/>
            <span className="text-primary font-semibold mt-2 block">Pandit Vikas Chandra Tripathi Ji</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
