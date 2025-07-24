import React, { useState,useContext } from 'react';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { WholeAppContext } from '@/context/store';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function ProductsCard({
  id,
  image,
  badges,
  originalPrice,
  price,
  name,
  rating,
  description,
  reviews,
  index,
  quantity
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    likedProducts,
    handleSetLikedProduct,
    handleDeleteLikedProduct,
  } = useContext(WholeAppContext);

  const likedProduct = likedProducts.some((product)=>product.id===id);

  const handleLikeProductToggle = () => {
    const likedItem = { id, image, badges, originalPrice, price, name, rating, description, reviews, index };
    if (!likedProduct) {
      handleSetLikedProduct(likedItem);
    } else {
      handleDeleteLikedProduct(id);
    }
  };
  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>

      <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 ${isHovered ? 'scale-105 shadow-2xl' : 'shadow-lg'
        }`}>

        {/* Product Image Area - Enhanced for visual appeal */}
        <div className="relative h-64 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 flex items-center justify-center overflow-hidden">
          {/* Multi-layered background effects */}
          <div className="absolute inset-0">
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-yellow-200/30 via-orange-200/20 to-transparent"></div>

            {/* Animated floating elements */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-8 left-12 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-16 right-16 w-2 h-2 bg-orange-300 rounded-full animate-ping shadow-md"></div>
              <div className="absolute bottom-12 left-8 w-2.5 h-2.5 bg-amber-300 rounded-full animate-bounce shadow-md"></div>
              <div className="absolute top-20 left-1/3 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-20 right-8 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-700"></div>
            </div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, #f59e0b 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          {/* Enhanced product image with multiple effects */}
          <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
            {/* Glow effect behind image */}
            <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-xl opacity-0 transition-all duration-700 ${isHovered ? 'opacity-30 scale-150' : 'opacity-0 scale-100'
              }`}>
              
            </div>

            {/* Main image container with overflow hidden */}
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              <img
                src={image}
                alt="product image"
                className={`w-full h-full object-cover transform transition-all duration-700 filter ${isHovered
                    ? 'scale-110 rotate-12 drop-shadow-2xl'
                    : 'scale-100 rotate-0 drop-shadow-lg'
                  }`}
              />
            </div>
          </div>

          {/* Enhanced Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
            {badges.map((badge, i) => (
              <div
                key={i}
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg transform transition-all duration-300 ${badge === 'Bestseller'
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-600 animate-pulse'
                    : badge === 'Premium'
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600'
                      : badge === 'Festival Special'
                        ? 'bg-gradient-to-r from-orange-500 to-red-600'
                        : badge === 'Limited'
                          ? 'bg-gradient-to-r from-red-500 to-pink-600 animate-bounce'
                          : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                  } hover:scale-110`}
              >
                {badge}
              </div>
            ))}
          </div>

          {/* Quick Action Buttons */}
          {/* <div className={`absolute top-4 right-4 flex flex-col gap-2 z-20 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
            <button
              onClick={handleLikeProductToggle}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
            >
               {likedProduct ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
          </div> */}


        </div>

        {/* Product Info with enhanced styling */}
        <div className="p-6 bg-gradient-to-b from-white to-gray-50">
          {/* Header with rating */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-orange-600 transition-colors duration-300">
              {name}
            </h3>
            <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-700">{rating}</span>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="mb-4">
            <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-2' : ''
              }`}>
              {description}
            </p>
            <button
              onClick={toggleDescription}
              className="text-orange-600 hover:text-orange-700 text-xs font-medium mt-1 hover:underline transition-colors duration-200"
            >
              {isExpanded ? '↑ Show less' : '↓ Read more'}
            </button>
          </div>

          {/* Reviews only */}
          <div className="text-center mb-4">
            <span className="text-sm text-gray-500 bg-blue-50 px-3 py-2 rounded-full font-medium">
              {reviews} happy customers
            </span>
          </div>
        </div>

        {/* Subtle bottom accent */}
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
      </div>
    </div>
  );
}