import { motion } from "framer-motion";
import { Heart, Star, Award, Users, Clock, Sparkles, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      year: "1962",
      title: "Sweet Origins",
      description:
        "MOTI SWEETS is born in Malviya Nagar—our family's very first step in a journey of handcrafted mithai. Four generations later, those original recipes still form the heart of everything we do.",
      icon: Heart,
    },
    {
      year: "1998",
      title: "Next‑Gen Leadership",
      description:
        "The fourth generation officially takes the reins, expanding our range to 310+ traditional recipes and setting the stage for future growth.",
      icon: Star,
    },
    {
      year: "2005",
      title: "Flagship Store",
      description:
        "Opened our first boutique outlet in Malviya Nagar. Word spread fast as the community fell in love with our authentic sweets and warm, personal service.",
      icon: Award,
    },
    {
      year: "2015",
      title: "Digital Sweet Experience",
      description:
        "Launched our e‑commerce platform—now anyone, anywhere in India can order fresh, handcrafted mithai with just a few clicks.",
      icon: Users,
    },
    {
      year: "2023",
      title: "Modern Innovation",
      description:
        "Celebrating 60+ years of tradition by blending time‑honored recipes with sleek new packaging and ultra‑fast delivery for today's digitally‑savvy sweet‑lovers.",
      icon: Clock,
    },
  ];

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Enhanced Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating decorative elements */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 text-6xl opacity-20"
          >
            🍬
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute top-32 right-16 text-5xl opacity-20"
          >
            🧁
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
            className="absolute bottom-32 left-20 text-7xl opacity-20"
          >
            🎂
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "1s" }}
            className="absolute bottom-20 right-10 text-5xl opacity-20"
          >
            🍯
          </motion.div>

          {/* Sparkle effects */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              variants={sparkleVariants}
              animate="animate"
              style={{
                animationDelay: `${i * 0.5}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              className="absolute"
            >
              <Sparkles className="w-4 h-4 text-amber-400 opacity-60" />
            </motion.div>
          ))}

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-amber-200"
          >
            <ChefHat className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-medium">Since 1962 • Four Generations of Excellence</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-lobster"
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent font-lobster">
                Sweet
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-2 left-0 h-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"
              />
            </span>
            <br />
            <span className="text-gray-800 font-lobster">Story</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 font-light"
          >
            For over{" "}
            <span className="font-semibold text-amber-700">three decades</span>, we've been crafting
            <span className="font-semibold text-rose-600"> authentic Indian sweets</span> with the same passion
            and traditional recipes that started our journey. Every sweet tells a story of{" "}
            <span className="font-semibold text-orange-600">heritage, quality, and love</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {[
              { number: "60+", label: "Years of Tradition" },
              { number: "310+", label: "Unique Recipes" },
              { number: "4", label: "Generations" },
              { number: "1000+", label: "Happy Customers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to={"/products"}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Our Collection
              </motion.button>
            </Link>

            <motion.a href="#story">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-amber-200 hover:border-amber-400 transition-all duration-300"

              >
                Learn Our Story
              </motion.button>
            </motion.a>

          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a href="#story">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-amber-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.a>

      </section>

      {/* Timeline Section */}
      <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-poppins font-bold text-center mb-16"
          >
            Our Journey Through <span className="text-gradient">Time</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-saffron-500 to-rose-500 rounded-full" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <item.icon className="w-8 h-8 text-saffron-500 mr-3" />
                      <span className="text-3xl font-bold text-saffron-600">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-poppins font-semibold mb-3 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-saffron-500 rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-rose-50 via-amber-50 to-amber-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-poppins font-bold mb-16"
          >
            Our <span className="text-gradient">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "Every recipe is traditional, passed down through generations",
                emoji: "🏺"
              },
              {
                title: "Quality",
                description: "We use only the finest ingredients for the best taste",
                emoji: "⭐"
              },
              {
                title: "Love",
                description: "Each sweet is made with care and attention to detail",
                emoji: "❤️"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-6xl mb-6">{value.emoji}</div>
                <h3 className="text-2xl font-poppins font-semibold mb-4 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;