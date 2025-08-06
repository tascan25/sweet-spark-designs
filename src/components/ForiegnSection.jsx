// import React, { useState } from "react";
// import { motion } from "framer-motion";

// import image1 from "@/assets/global/image1.jpeg";
// import image2 from "@/assets/global/image2.jpeg";
// import image3 from "@/assets/global/image3.jpeg";
// import image4 from "@/assets/global/image4.jpeg";
// import image5 from "@/assets/global/image5.jpeg";
// import image6 from "@/assets/global/image6.jpeg";
// import image7 from "@/assets/global/image7.gif"

// const ForeignSection = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const globalImages = [image1, image2, image3, image4, image5, image6,image7];

//   const globalImage=[
//     {
//       country: "Dubai",
//       image: image1,
//     },
//     {
//       country: "USA",
//       image: image2,
//     },
//     {
//       country: "London",
//       image: image3,
//     },
//     {
//       country: "Turkey",
//       image: image4,
//     },
//     {
//       country: "Italy",
//       image: image5,
//     },
//     {
//       country: "Switzerland",
//       image: image6,
//     },
//     {
//       country: "London",
//       image: image7,
//     }
//   ]

//   return (
//     <section
//       id="feature_product"
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-200"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
//             Global <span className="text-gradient">Deliveries</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Beloved Sweets, Loved Worldwide—Handcrafted with Heart and Heritage.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {globalImages.map((src, idx) => (
//             <motion.div
//               key={idx}
//               variants={itemVariants}
//               whileHover={{ scale: 1.05, y: -10 }}
//               className="group relative cursor-pointer"
//               onClick={() => setSelectedImage(src)}
//             >
//               <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//                 <img
//                   src={src}
//                   alt={`Global delivery ${idx + 1}`}
//                   className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {selectedImage && (
//           <div className="mt-8">
//             <h3 className="text-2xl font-semibold">You selected:</h3>
//             <img src={selectedImage} alt="Selected item" className="mt-4 max-h-96" />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ForeignSection;








import React, { useState } from "react";

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

  const globalImages = [
    {
      country: "Dubai",
      flag: "🇦🇪",
      image: image1
    },
    {
      country: "USA",
      flag: "🇺🇸",
      image: image2
    },
    {
      country: "London",
      flag: "🇬🇧",
      image: image3
    },
    {
      country: "Turkey",
      flag: "🇹🇷",
      image: image4
    },
    {
      country: "Italy",
      flag: "🇮🇹",
      image: image5
    },
    {
      country: "Switzerland",
      flag: "🇨🇭",
      image: image6
    },
    {
      country: "London",
      flag: "🇬🇧",
      image: image7
    }
  ];

  return (
    <section
      id="feature_product"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
            Global <span className="text-amber-600">Deliveries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beloved Sweets, Loved Worldwide—Handcrafted with Heart and Heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {globalImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer opacity-0 animate-fade-in-up"
              style={{animationDelay: `${0.3 + idx * 0.1}s`, animationFillMode: 'forwards'}}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={`Global delivery to ${item.country}`}
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Country info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{item.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold">{item.country}</h3>
                      {/* <p className="text-sm text-gray-200">Sweet Deliveries</p>s */}
                    </div>
                  </div>
                </div>

                {/* Top corner flag badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl">{item.flag}</span>
                </div>
              </div>
              
              {/* Country name below image */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">{item.flag}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{item.country}</h3>
                </div>
                <p className="text-sm text-gray-500 mt-1">Premium Sweet Delivery</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="mt-12 text-center bg-white rounded-2xl shadow-xl p-8 max-w-2xl animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl">{selectedImage.flag}</span>
              <h3 className="text-3xl font-bold text-gray-800">Delivering to {selectedImage.country}</h3>
            </div>
            <img 
              src={selectedImage.image} 
              alt={`Selected delivery location: ${selectedImage.country}`} 
              className="mx-auto max-h-96 rounded-xl shadow-lg"
            />
            <p className="text-gray-600 mt-4">Experience our authentic sweets delivered fresh to your doorstep!</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ForeignSection;