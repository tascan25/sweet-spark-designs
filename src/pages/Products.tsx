import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Sparkles, Award, Clock } from "lucide-react";
import ProductsCard from "@/components/ui/ProductsCard";
import { products } from '@/data/Products'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Sweets", count: products.length },
    { id: "sweets", name: "Sweets", count: products.filter(p => p.category === "sweets").length },
    { id: "packed", name: "Packed", count: products.filter(p => p.category === "packed").length },
    { id: "cake", name: "Cake", count: products.filter(p => p.category === "cake").length },
    { id: "namkeen", name: "Namkeen", count: products.filter(p => p.category === "namkeen").length },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-400/10 to-red-400/5"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-orange-200 to-red-300 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-br from-red-200 to-pink-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Collection
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="font-bold mb-4 leading-tight flex flex-col ">
              <span className=" text-3xl md:text-8xl lg:text-9xl font-lobster bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Authentic
              </span>
              <br />
              <span className="text-gray-800 text-xl md:text-4xl lg:text-6xl mt-0 font-lobster">Indian Sweets</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Crafted with love using traditional recipes passed down through generations.
            <span className="text-amber-600 font-medium"> Each bite tells a story of heritage and flavor.</span>
          </motion.p>

          {/* Feature Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          >
            <div className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Finest ingredients sourced from trusted suppliers</p>
            </div>

            <div className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Handcrafted</h3>
              <p className="text-gray-600">Made with traditional techniques by skilled artisans</p>
            </div>

            <div className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Prepared fresh every day for optimal taste</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-10">
              <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            href="#products"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Collection
            </Button>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            href="https://www.zomato.com/ncr/moti-sweets-1-malviya-nagar-new-delhi?amp=1"
            target="_blank"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Order now
            </Button>
          </motion.a>
          </div>
        
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-cream-50"></path>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12 items-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${selectedCategory === category.id
                      ? "bg-saffron-500 hover:bg-saffron-600 text-white"
                      : "border-saffron-500 text-saffron-600 hover:bg-saffron-50"
                    }`}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

          </motion.div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductsCard
                key={product.id}
                id={product.id}
                name={product.name}
                badges={product.badges}
                description={product.description}
                image={product.image}
                originalPrice={product.originalPrice}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                index={index}
                quantity={product.quantity}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;
