
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Kaju Katli",
      description: "Premium cashew fudge with silver leaf",
      price: "₹450/kg",
      rating: 4.9,
      image: "🥜",
      badge: "Bestseller",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 2,
      name: "Gulab Jamun",
      description: "Soft milk dumplings in rose syrup",
      price: "₹320/kg",
      rating: 4.8,
      image: "🍯",
      badge: "Traditional",
      color: "from-rose-400 to-rose-600"
    },
    {
      id: 3,
      name: "Rasgulla",
      description: "Spongy cottage cheese balls in sugar syrup",
      price: "₹280/kg",
      rating: 4.7,
      image: "🤍",
      badge: "Popular",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 4,
      name: "Soan Papdi",
      description: "Flaky, crispy layers with nuts",
      price: "₹380/kg",
      rating: 4.6,
      image: "🧈",
      badge: "Festival Special",
      color: "from-orange-400 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="feature_product" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Featured <span className="text-gradient">Delights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved sweets, crafted with love and tradition
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-cream-50">
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
                    
                    <Badge 
                      className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} text-white border-0`}
                    >
                      {product.badge}
                    </Badge>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/20 flex items-center justify-center"
                    >
                      <Button
                        size="sm"
                        className="bg-white text-gray-800 hover:bg-gray-100 rounded-full"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-poppins font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-saffron-600">
                        {product.price}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-saffron-500 text-saffron-600 hover:bg-saffron-50 rounded-full"
                        >
                          Order Now
                        </Button>
                      </motion.div>
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

export default FeaturedProducts;
