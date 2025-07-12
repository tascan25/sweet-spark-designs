
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Filter } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Sweets", count: 24 },
    { id: "traditional", name: "Traditional", count: 8 },
    { id: "festival", name: "Festival Special", count: 6 },
    { id: "premium", name: "Premium", count: 10 }
  ];

  const products = [
    {
      id: 1,
      name: "Kaju Katli",
      description: "Premium cashew fudge with silver leaf",
      price: "₹450/kg",
      originalPrice: "₹500/kg",
      rating: 4.9,
      reviews: 234,
      image: "🥜",
      category: "premium",
      badges: ["Bestseller", "Premium"]
    },
    {
      id: 2,
      name: "Gulab Jamun",
      description: "Soft milk dumplings in rose syrup",
      price: "₹320/kg",
      rating: 4.8,
      reviews: 189,
      image: "🍯",
      category: "traditional",
      badges: ["Traditional"]
    },
    {
      id: 3,
      name: "Rasgulla",
      description: "Spongy cottage cheese balls in sugar syrup",
      price: "₹280/kg",
      rating: 4.7,
      reviews: 156,
      image: "🤍",
      category: "traditional",
      badges: ["Popular"]
    },
    {
      id: 4,
      name: "Soan Papdi",
      description: "Flaky, crispy layers with nuts",
      price: "₹380/kg",
      rating: 4.6,
      reviews: 143,
      image: "🧈",
      category: "festival",
      badges: ["Festival Special"]
    },
    {
      id: 5,
      name: "Motichoor Laddu",
      description: "Tiny gram flour pearls formed into sweet balls",
      price: "₹350/kg",
      rating: 4.8,
      reviews: 198,
      image: "🟡",
      category: "festival",
      badges: ["Festival Special"]
    },
    {
      id: 6,
      name: "Badam Halwa",
      description: "Rich almond pudding with cardamom",
      price: "₹520/kg",
      originalPrice: "₹580/kg",
      rating: 4.9,
      reviews: 167,
      image: "🥄",
      category: "premium",
      badges: ["Premium", "Limited"]
    },
    {
      id: 7,
      name: "Jalebi",
      description: "Crispy spirals soaked in sugar syrup",
      price: "₹240/kg",
      rating: 4.5,
      reviews: 289,
      image: "🌀",
      category: "traditional",
      badges: ["Traditional", "Fresh"]
    },
    {
      id: 8,
      name: "Ras Malai",
      description: "Soft paneer dumplings in sweetened milk",
      price: "₹420/kg",
      rating: 4.8,
      reviews: 176,
      image: "🥛",
      category: "premium",
      badges: ["Premium"]
    }
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-saffron-50">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category.id
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
          </motion.div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-cream-50">
                  <CardContent className="p-0">
                    {/* Product Image Area */}
                    <div className="relative h-48 bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="text-6xl"
                      >
                        {product.image}
                      </motion.div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.badges.map((badge, i) => (
                          <Badge 
                            key={i}
                            className={`bg-gradient-to-r ${
                              badge === "Bestseller" ? "from-yellow-400 to-yellow-600" :
                              badge === "Premium" ? "from-purple-400 to-purple-600" :
                              badge === "Festival Special" ? "from-orange-400 to-orange-600" :
                              badge === "Limited" ? "from-red-400 to-red-600" :
                              "from-blue-400 to-blue-600"
                            } text-white border-0`}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      {/* Discount */}
                      {product.originalPrice && (
                        <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                          Save ₹{parseInt(product.originalPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))}
                        </Badge>
                      )}

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/20 flex items-center justify-center"
                      >
                        <Button
                          size="sm"
                          className="bg-white text-gray-800 hover:bg-gray-100 rounded-full shadow-lg"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Quick Add
                        </Button>
                      </motion.div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-poppins font-semibold text-gray-800 leading-tight">
                          {product.name}
                        </h3>
                        <div className="flex items-center space-x-1 ml-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-saffron-600">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          {product.reviews} reviews
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-saffron-500 hover:bg-saffron-600 text-white rounded-full"
                          size="sm"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-saffron-500 text-saffron-600 hover:bg-saffron-50 rounded-full px-4"
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;
