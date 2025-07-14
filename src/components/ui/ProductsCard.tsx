import React from 'react'
import { motion } from "framer-motion";
import { useState,useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Filter } from "lucide-react";
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { WholeAppContext } from '@/context/store';

function ProductsCard({id,image,badges,originalPrice, price,name,rating,description,reviews,index,quantity}) {

    const { likedProducts,handleSetLikedProduct,handleDeleteLikedProduct,handleCartCount,handleAddToCart, handleDeleteFromCart } = useContext(WholeAppContext)

    const likedProduct  = likedProducts.some((item)=>item.id===id)

const handleLikeProductToggle = () => {
  const likedItem = {
    id,
    image,
    badges,
    originalPrice,
    price,
    name,
    rating,
    description,
    reviews,
    index
  };

  if (!likedProduct) {
    handleSetLikedProduct(likedItem);
  } else {
    handleDeleteLikedProduct(id);
  }

};


function handleCart(){
    handleCartCount()

    const cartItem={
        image:image,
        price:price,
        id:id,
        name:name,
        quantity:quantity
    };

    handleAddToCart(cartItem);
}

  return (
     <motion.div
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
                        {image}
                      </motion.div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {badges.map((badge, i) => (
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

                      {/* Discount
                      {originalPrice && (
                        <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                          Save ₹{parseInt(originalPrice.replace(/[^\d]/g, '')) - parseInt(price.replace(/[^\d]/g, ''))}
                        </Badge>
                      )} */}

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/20 flex items-center justify-center"
                      >
                        <Button
                          size="sm"
                          className="bg-white text-gray-800 hover:bg-gray-100 rounded-full shadow-lg"
                          onClick={handleLikeProductToggle}
                        >
                          {likedProduct?<FaHeart color='red'/>:<FaRegHeart />}
                        </Button>
                      </motion.div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-poppins font-semibold text-gray-800 leading-tight">
                          {name}
                        </h3>
                        <div className="flex items-center space-x-1 ml-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-saffron-600">
                           ₹  {price} /kg
                          </span>
                          {/* {originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                            {originalPrice}
                            </span>
                          )} */}
                        </div>
                        <span className="text-xs text-gray-500">
                          {reviews} reviews
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-saffron-500 hover:bg-saffron-600 text-white rounded-full"
                          size="sm"
                          onClick={handleCart}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-saffron-500 text-saffron-600 hover:bg-saffron-50 rounded-full px-4 md:hidden"
                        onClick={handleLikeProductToggle}
                        >
                           {likedProduct?"Remove":"Whishlist"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
  )
}

export default ProductsCard
