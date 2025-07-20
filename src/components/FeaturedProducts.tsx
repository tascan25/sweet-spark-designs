
import { motion } from "framer-motion";
import ProductsCard from "./ui/ProductsCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import kajuBasketBurji from "@/assets/sweets/kaju_basket_burji.JPG";
import kajuFruitTray from "@/assets/sweets/kaju_fruit_tray.JPG";
import rasmmalaicake from '@/assets/cake/ras_malai_cake.JPG';
import beetrootcheetos from "@/assets/packed/beetrootcheetos.JPG";

const FeaturedProducts = () => {

  const products = [
    {
      id: 1,
      name: "Kaju Katli",
      description: "Premium cashew fudge with silver leaf",
      price: 450,
      rating: 4.9,
      reviews: 234,
      image: kajuBasketBurji,
      category: "premium",
      badges: ["Bestseller", "Premium"]
    },
    {
      id: 2,
      name: "Ras Malai Cake",
      description: "Soft paneer dumplings in sweetened milk",
      price: 420,
      rating: 4.8,
      reviews: 176,
      image: rasmmalaicake,
      category: "cake",
      badges: ["Premium"],
      quantity: 0
    },
    {
      id: 3,
      name: "Rasgulla",
      description: "Spongy cottage cheese balls in sugar syrup",
      price: 280,
      rating: 4.7,
      reviews: 156,
      image: kajuFruitTray,
      category: "traditional",
      badges: ["Popular"]
    },
    {
      id: 4,
      name: "Beetroot Cheetos",
      description: "Soft paneer dumplings in sweetened milk",
      price: 420,
      rating: 4.8,
      reviews: 176,
      image: beetrootcheetos,
      category: "packed",
      badges: ["Premium"],
      quantity: 0
    },
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
    <section id="feature_product" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-200">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center ">
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
              index={0}
            />
          ))}
        </motion.div>

        <Button
          size="lg"
          className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-6 text-lg rounded-2xl shadow-glow transition-all duration-300 hover:scale-105
          mt-14"
        >
          <Link to={"/products"}>View More</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
