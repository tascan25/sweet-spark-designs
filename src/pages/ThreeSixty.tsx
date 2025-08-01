import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { restimages } from "../data/ResturantImage";
import compname from "@/assets/compname.png";
import motibg from "@/assets/motibg.mp4";

const Restaurant360Showcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 pt-96">
      <div className="fixed inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source
            src={motibg}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 p-4 md:p-8 pt-96">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 mt-32"
        >
          <h1 className="text-5xl md:text-9xl font-semibold mb-6 flex flex-row justify-center items-center flex-wrap">
            <span className="text-gradient font-lobster moti-text">
              <img src={compname} className="w-40 md:w-96" />
            </span>{" "}
            <span className="text-gray-100 font-lobster moti-text">Sweets</span>
          </h1>
          <p className="text-gray-200 font-lobster text-lg">Restaurant Gallery</p>
        </motion.div>

        {/* Photo Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {restimages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <h4 className="text-white font-semibold text-xl">
                    {selectedImage.title}
                  </h4>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Restaurant360Showcase;
