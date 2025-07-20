
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
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
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-cream-50 via-amber-50 to-amber-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-poppins font-bold mb-6"
          >
            Our <span className="text-gradient">Sweet</span> Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Explore our extensive range of authentic Indian sweets, each crafted with
            traditional recipes and the finest ingredients.
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-100">
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
