
import { motion } from "framer-motion";
import ProductsCard from "@/components/ui/ProductsCard";
import { useContext } from "react";
import { WholeAppContext } from "@/context/store";

const Products = () => {

    const { likedProducts } = useContext(WholeAppContext);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-20"
        >
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-200">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-lobster font-bold mb-6"
                    >
                        Your <span className="text-gradient">Liked </span> Collection
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
            {likedProducts.length===0?
            <div className="w-full h-full flex flex-row justify-center items-center mt-40">
                 <span className="text-gradient text-xl font-semibold text-center">Opps!, you haven't like anything yet</span>
            </div>:
           
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-100">
                <div className="max-w-7xl mx-auto">
                    {/* Category Filter */}

                    {/* Products Grid */}
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
            </section>}
        </motion.div>
    );
};

export default Products;
