import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import motibg from "@/assets/motibg.mp4";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const taglines = [
    "Authentic Traditional Sweets Since 1947",
    "Made with Love, Served with Pride",
    "Experience the True Taste of India",
    "Fresh Daily • Premium Quality • Pure Ingredients",
    "Your Sweet Memories Start Here",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={motibg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,140,66,0.3) 0%, transparent 50%)`,
          }}
          transition={{ type: "tween", duration: 0.3 }}
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-16 h-16 bg-orange-200 rounded-full blur-xl opacity-30"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-20 w-20 h-20 bg-pink-200 rounded-full blur-xl opacity-30"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-orange-400" />
          </motion.div>

          <h1 className="text-5xl md:text-9xl font-semibold mb-6">
            <span className="text-gradient font-lobster moti-text">Moti</span>{" "}
            <span className="text-gray-100 font-lobster moti-text">Sweets</span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed moti-text">
            Experience the authentic taste of India with our handcrafted sweets,
            made from traditional recipes passed down through generations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link to={"/products"}>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-2xl shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Explore Our Sweets
            </Button>
          </Link>

          <Link to={"/about"}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Our Story
            </Button>
          </Link>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-[95%] bottom-0 left-1/2 transform -translate-x-1/2 z-10"
          href="#feature_product"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-100"
          >
            <span className="text-lg mb-2 font-semibold drop-shadow-md">
              Scroll to discover
            </span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </div>

      {/* 👉  Taglines Marquee at the very bottom  👈 */}
      <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden bg-gradient-to-r from-orange-500/90 via-red-500/90 to-pink-500/90">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="absolute flex items-center h-full whitespace-nowrap animate-scroll"
            style={{
              animationDelay: `${i * 5}s`,
              animationDuration: "10s",
            }}
          >
            <div className="flex items-center space-x-8 text-white font-semibold text-base px-8">
              {taglines.map((t, j) => (
                <span key={j} className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span>{t}</span>
                  <span className="text-yellow-300">•</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/*  CSS for the marquee animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
