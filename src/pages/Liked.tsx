import { motion } from "framer-motion";
import ProductsCard from "@/components/ui/ProductsCard";
import { useContext } from "react";
import { WholeAppContext } from "@/context/store";
import { Heart, Sparkles, Star } from "lucide-react";

const LikedSection = () => {
    const { likedProducts } = useContext(WholeAppContext);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-20"
        >
            {/* Enhanced Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-100 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-xl"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-xl"></div>
                </div>
                
                {/* Floating Icons */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-32 left-1/4 text-rose-400"
                >
                    <Heart size={32} fill="currentColor" />
                </motion.div>
                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-24 right-1/3 text-amber-500"
                >
                    <Sparkles size={28} />
                </motion.div>
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-32 right-1/4 text-orange-400"
                >
                    <Star size={24} fill="currentColor" />
                </motion.div>

                <div className="relative max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-rose-200 mb-8 shadow-lg"
                    >
                        <Heart size={16} className="text-rose-500" fill="currentColor" />
                        <span className="text-sm font-medium text-gray-700">Your Favorites</span>
                        <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">{likedProducts.length}</span>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-lobster font-bold mb-6 leading-tight"
                    >
                        Your{" "}
                        <span className="relative">
                            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent font-lobster">
                                Liked
                            </span>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 1 }}
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full"
                            />
                        </span>{" "}
                        Collection
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 mt-16"
                    >
                        Curated with love, your personal collection of authentic Indian sweets 
                        crafted with traditional recipes and the finest ingredients.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-8 text-center mt-12"
                    >
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                                {likedProducts.length}
                            </div>
                            <div className="text-sm text-gray-500 font-medium">Favorites</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                100%
                            </div>
                            <div className="text-sm text-gray-500 font-medium">Authentic</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                                ⭐ 4.9
                            </div>
                            <div className="text-sm text-gray-500 font-medium">Rating</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Products Section */}
            {likedProducts.length === 0 ? (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full flex flex-col justify-center items-center mt-40 px-4"
                >
                    <div className="text-center max-w-md">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-rose-100 to-orange-100 rounded-full flex items-center justify-center">
                            <Heart size={40} className="text-rose-400" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2">No favorites yet</h3>
                        <p className="text-gray-500">Start exploring our delicious sweets and add your favorites here!</p>
                    </div>
                </motion.div>
            ) : (
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-100">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                        >
                            {likedProducts.map((product, index) => (
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
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}
        </motion.div>
    );
};

export default LikedSection;