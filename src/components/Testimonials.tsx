
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The most authentic Kaju Katli I've ever tasted! It reminds me of my grandmother's homemade sweets. The quality and taste are absolutely incredible.",
    avatar: "👩🏻"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Ordered for Diwali celebrations and everyone was amazed by the freshness and taste. The packaging was also beautiful. Highly recommended!",
    avatar: "👨🏻"
  },
  {
    id: 3,
    name: "Anjali Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Amazing variety and taste! The Gulab Jamuns were perfectly soft and the rose syrup was just the right sweetness. Will definitely order again.",
    avatar: "👩🏻‍🦱"
  },
  {
    id: 4,
    name: "Sanjay Gupta",
    location: "Bangalore",
    rating: 5,
    text: "Fast delivery and excellent quality. The sweets arrived fresh and perfectly packaged. My family loved every single variety we ordered.",
    avatar: "👨🏻‍💼"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our delighted customers
          </p>
        </motion.div>

        {/* Main Featured Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="max-w-4xl mx-auto rounded-3xl shadow-xl bg-gradient-to-br from-cream-50 to-white border-0">
            <CardContent className="p-12 text-center relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-6 left-6"
              >
                <Quote className="w-12 h-12 text-saffron-200" />
              </motion.div>

              <div className="mb-8">
                <div className="text-6xl mb-4">{testimonials[currentIndex].avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div>
                <div className="font-poppins font-semibold text-lg text-gray-800">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-saffron-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <Card className={`rounded-2xl transition-all duration-300 hover:shadow-lg ${
                index === currentIndex
                  ? "ring-2 ring-saffron-500 bg-saffron-50"
                  : "bg-white hover:bg-gray-50"
              }`}>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{testimonial.avatar}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
