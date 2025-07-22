
import { motion } from "framer-motion";
import { Heart, Star, Award, Users, Clock } from "lucide-react";


const About = () => {
  const timeline = [
  {
    year: "1962",
    title: "Sweet Origins",
    description:
      "MOTI SWEETS is born in Malviya Nagar—our family’s very first step in a journey of handcrafted mithai. Four generations later, those original recipes still form the heart of everything we do.",
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
      "Opened our first boutique outlet in Malviya Nagar. Word spread fast as the community fell in love with our authentic sweets and warm, personal service.",
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
      "Celebrating 60+ years of tradition by blending time‑honored recipes with sleek new packaging and ultra‑fast delivery for today’s digitally‑savvy sweet‑lovers.",
    icon: Clock,
  },
];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-lobster font-bold mb-6"
          >
            Our <span className="text-gradient">Sweet</span> Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            For over three decades, we've been crafting authentic Indian sweets with the same passion 
            and traditional recipes that started our journey. Every sweet tells a story of heritage, 
            quality, and the love that goes into making each piece perfect.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-100">
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
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
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
