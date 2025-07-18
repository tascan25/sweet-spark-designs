
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-amber-100 to-amber-300">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 140, 66, 0.1) 0%, transparent 50%)`,
          }}
          transition={{ type: "tween", duration: 0.3 }}
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-16 h-16 bg-saffron-200 rounded-full blur-xl opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-20 h-20 bg-rose-200 rounded-full blur-xl opacity-40"
        />
      </div>

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
            <Sparkles className="w-12 h-12 text-saffron-500" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            <span className="text-gradient">Moti</span>{" "}
            <span className="text-gray-800">Sweets</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
          <Button
            size="lg"
            className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-6 text-lg rounded-2xl shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Heart className="w-5 h-5 mr-2" />
            <Link to={"/products"}>Explore Our Sweets</Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-saffron-500 text-saffron-600 hover:bg-saffron-50 px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <Link to={"/about"}>Our Story</Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className=" mt-50 absolute  left-1/2 transform -translate-x-1/2"
          href="#feature_product"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-800"
          >
            <span className="text-lg mb-2 font-semibold">Scroll to discover</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
