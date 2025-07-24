
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
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
  const { cartCount } = useContext(WholeAppContext)
  const location = useLocation();

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    // { name: "Contact", path: "/contact" },
    // { name: "Liked", path: "/liked" },
    {name:"360°",path:"/"}

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
                  {/* <span>
                    Sweets
                  </span> */}
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
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item.path)
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
            ))}

            {/* CART BUTTON  */}
            {/* <Button
              variant="ghost"
              size="sm"
              className="p-2 relative"
            >
              <Link to={"/cart"}>{cartCount===0?<IoCartOutline/>:<FaShoppingCart/>}</Link>
              <span className="absolute bottom-5 right-0 text-gradient">{cartCount}</span>
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <Button
              variant="ghost"
              size="sm"
              className="p-2 relative"
            >
              <Link to={"/cart"}>{cartCount===0?<IoCartOutline color="black"/>:<FaShoppingCart/>}</Link>
              <span className="absolute bottom-5 right-0 text-gradient">{cartCount}</span>
            </Button> */}
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
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path)
                  ? "text-saffron-500 bg-saffron-50"
                  : "text-gray-700 hover:text-saffron-500 hover:bg-gray-50"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
