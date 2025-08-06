import React, { useState } from "react";
import { motion } from "framer-motion";

import image1 from "@/assets/global/image1.jpeg";
import image2 from "@/assets/global/image2.jpeg";
import image3 from "@/assets/global/image3.jpeg";
import image4 from "@/assets/global/image4.jpeg";
import image5 from "@/assets/global/image5.jpeg";
import image6 from "@/assets/global/image6.jpeg";
import image7 from "@/assets/global/image7.gif"

const ForeignSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const globalImages = [image1, image2, image3, image4, image5, image6,image7];

  return (
    <section
      id="feature_product"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-200"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Global <span className="text-gradient">Deliveries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beloved Sweets, Loved Worldwide—Handcrafted with Heart and Heritage.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {globalImages.map((src, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={src}
                  alt={`Global delivery ${idx + 1}`}
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedImage && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">You selected:</h3>
            <img src={selectedImage} alt="Selected item" className="mt-4 max-h-96" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ForeignSection;
