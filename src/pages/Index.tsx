
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { ToastContainer } from "react-toastify";
import ForiegnSection from "@/components/ForiegnSection"

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <ToastContainer stacked={true} draggable={true}/>
      <Hero />
      <FeaturedProducts />
      <ForiegnSection/>
      <Stats />
      <Testimonials />
    </motion.div>
  );
};

export default Index;
