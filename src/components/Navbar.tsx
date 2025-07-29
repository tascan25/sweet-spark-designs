import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { WholeAppContext } from "@/context/store";
import { IoCartOutline } from "react-icons/io5";
import compname from "@/assets/compname.png";
import path from "path";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showMobileProductsDropdown, setShowMobileProductsDropdown] = useState(false);
  const { cartCount } = useContext(WholeAppContext);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Product categories
  const productCategories = [
    { name: "Sweets", path: "/products?category=sweets" },
    { name: "Namkeen", path: "/products?category=namkeen" },
    { name: "Packed", path: "/products?category=packed" },
    { name: "Cake", path: "/products?category=cake" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle mouse enter for dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowProductsDropdown(true);
  };

  // Handle mouse leave for dropdown
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowProductsDropdown(false);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products", hasDropdown: true },
    { name: "360°", path: "/" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
        : "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-row justify-center items-center gap-4"
            >
              <img src='./company_logo.png' alt="company_logo" className="w-10 h-10 rounded-md object-fill" />
              <span className="flex flex-row justify-center items-center">
                <img src={compname} className="w-24 md:w-28" />
                <span className="text-4xl font-lobster font-bold text-gradient moti-text flex flex-col justify-start items-center mt-3">
                  <span className="text-sm">
                    Since 1962
                  </span>
                </span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.hasDropdown ? dropdownRef : null}
                onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
              >
                {item.hasDropdown ? (
                  <button
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                      isActive(item.path) || location.pathname.includes('/products')
                        ? "text-saffron-500"
                        : "text-gray-400 hover:text-saffron-500"
                    }`}
                  >
                    {item.name}
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        showProductsDropdown ? 'rotate-180' : ''
                      }`} 
                    />
                    {(isActive(item.path) || location.pathname.includes('/products')) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron-500"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-saffron-500"
                        : "text-gray-400 hover:text-saffron-500"
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron-500"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.hasDropdown && showProductsDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-gray-200/50 py-2"
                    >
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="block px-4 py-2 text-sm text-gray-200 hover:text-saffron-500  transition-colors duration-200"
                          onClick={() => setShowProductsDropdown(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setShowMobileProductsDropdown(!showMobileProductsDropdown)}
                      className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive(item.path) || location.pathname.includes('/products')
                          ? "text-saffron-500 bg-saffron-50"
                          : "text-gray-700 hover:text-saffron-500 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          showMobileProductsDropdown ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <AnimatePresence>
                      {showMobileProductsDropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-1 space-y-1"
                        >
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.path}
                              onClick={() => {
                                setIsOpen(false);
                                setShowMobileProductsDropdown(false);
                              }}
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-saffron-500 hover:bg-gray-50 transition-colors duration-200"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-saffron-500 bg-saffron-50"
                        : "text-gray-700 hover:text-saffron-500 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;