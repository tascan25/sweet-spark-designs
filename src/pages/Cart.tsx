import React from 'react'
import { useContext } from 'react'
import { WholeAppContext } from '@/context/store'
import { motion } from 'framer-motion'
import CartList from '@/components/ui/CartList'

function Cart() {
    const { cart, totalPrice } = useContext(WholeAppContext)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-20"
        >

            {/* cart Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>

                    {cart.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    ) : (
                        <>
                            <motion.ul layout className="flex flex-col gap-6">
                                {cart.map(product => (
                                    <CartList
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        image={product.image}
                                        price={product.price}
                                        quantity={product.quantity}
                                    />
                                ))}
                            </motion.ul>
                            <div className="text-right text-2xl font-bold mt-20">
                                Total: ₹{totalPrice.toFixed(2)}
                            </div>
                        </>

                    )}

                </div>
            </section>

        </motion.div>
    )
}

export default Cart
