import { createContext } from "react";
import { useState, useEffect } from "react";

export const WholeAppContext = createContext({});



function WholeAppContextProvider({ children }) {
    const [likedProducts, setLikeProducts] = useState(() => {
        const json = localStorage.getItem("likedProducts");
        return json ? JSON.parse(json) : [];
    })

    const [cart, setCart] = useState(() => {
        const json = localStorage.getItem("cart");
        return json ? JSON.parse(json) : [];
    })

    const [cartCount, setCartCount] = useState(() => {
        const stored = localStorage.getItem("cartcount");
        return stored ? parseInt(stored, 10) : 0;
    });

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(sum);
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("cartcount", cartCount.toString());
    }, [cartCount]);


    useEffect(() => {
        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    }, [likedProducts]);

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart]);


    const handleSetLikedProduct = (newProd) => {
        setLikeProducts(prev =>
            prev.some(p => p.id === newProd.id) ? prev : [...prev, newProd]
        );
    };


    const handleDeleteLikedProduct = (id) => {
        setLikeProducts((prev) => prev.filter((item) => item.id !== id));
    }

    const handleCartCount = () => {
        setCartCount((prev) => prev = prev + 1)
    }

    const handleAddToCart = (cartItem) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === cartItem.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === cartItem.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            price: item.price + cartItem.price
                        }
                        : item
                );
            } else {
                return [...prevCart, { ...cartItem, quantity: 1 }];
            }
        });
    };

    const handleDeleteFromCart = (id) => {
        setCartCount(prev => prev = prev - 1);
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === id);

            if (!existingItem) return prevCart;

            if (existingItem.quantity > 1) {
                const pricePerItem = existingItem.price / existingItem.quantity;

                return prevCart.map(item =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                            price: item.price - pricePerItem
                        }
                        : item
                );
            } else {
                // If quantity is 1, remove the item
                return prevCart.filter(item => item.id !== id);
            }
        });
    };


    return (
        <WholeAppContext.Provider value={{ likedProducts, handleSetLikedProduct, handleDeleteLikedProduct, handleCartCount, cartCount, handleAddToCart, handleDeleteFromCart, cart,totalPrice }}>

            {children}

        </WholeAppContext.Provider>
    )
}

export default WholeAppContextProvider

