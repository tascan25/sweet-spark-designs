import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Users, HeartHandshake, Star } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  // Click handlers for interactive elements
  const handleCallClick = () => {
    window.location.href = "tel:+919310000073";
  };

  const handleAddressClick = () => {
    const address = "moti sweets, delhi";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleDirectionsClick = () => {
    const address = "moti sweets, delhi";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["17 Main Market,", "Malviya Nagar, New Delhi, Delhi 110017", "India"],
      color: "text-blue-500",
      onClick: handleAddressClick,
      clickable: true
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9310000073", "Mon-Sat: 8AM-11PM"],
      color: "text-green-500",
      onClick: handleCallClick,
      clickable: true
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["Motisweets@yahoo.com", "Response within 24hrs"],
      color: "text-saffron-500",
      onClick: () => window.location.href = "mailto:Motisweets@yahoo.com",
      clickable: true
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Sunday: 8AM - 11PM", "Sunday: 9AM - 12PM", "Festivals: Extended hours"],
      color: "text-rose-500",
      clickable: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-400/10 to-purple-400/5"></div>
          
          {/* Floating Contact Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-2xl opacity-20 flex items-center justify-center"
          >
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full opacity-25"
          />
          
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 flex items-center justify-center"
          >
            <HeartHandshake className="w-10 h-10 text-purple-600" />
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg">
              <Star className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Trusted by 10,000+ Happy Customers</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gray-800 font-lobster">Let's</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-lobster">
                Connect
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12"
          >
            Your sweet journey starts with a conversation. 
            <span className="text-indigo-600 font-medium"> We're here to make every interaction as delightful as our sweets.</span>
          </motion.p>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={handleCallClick}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Call</h3>
              <p className="text-sm text-gray-600">Instant support & order assistance</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-indigo-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Send Message</h3>
              <p className="text-sm text-gray-600">Detailed inquiries & custom orders</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={handleAddressClick}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Store</h3>
              <p className="text-sm text-gray-600">Experience our sweets in person</p>
            </motion.div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-center"
          >
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-800">24/7</span>
              <span className="text-gray-600">Support</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <HeartHandshake className="w-5 h-5 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-800">99%</span>
              <span className="text-gray-600">Satisfaction</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-800">&lt;2hr</span>
              <span className="text-gray-600">Response</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-cream-50"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={info.clickable ? info.onClick : undefined}
                className={info.clickable ? "cursor-pointer" : ""}
              >
                <Card className="h-full rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-cream-50">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 mb-6"
                    >
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </motion.div>
                    
                    <h3 className="text-xl font-poppins font-semibold mb-4 text-gray-800">
                      {info.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>

                    {info.clickable && (
                      <div className="mt-4 text-xs text-gray-500">
                        Click to {info.title === "Call Us" ? "call" : info.title === "Visit Our Store" ? "get directions" : "email"}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="rounded-3xl shadow-xl bg-gradient-to-br from-white to-cream-50">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-poppins font-bold mb-6 text-center">
                    Send Us a <span className="text-gradient">Message</span>
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-green-600 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            name="name"
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="rounded-2xl border-2 border-gray-200 focus:border-saffron-500 transition-all duration-300 h-12"
                          />
                        </motion.div>
                        
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            name="email"
                            type="email"
                            placeholder="Your Email *"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="rounded-2xl border-2 border-gray-200 focus:border-saffron-500 transition-all duration-300 h-12"
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="rounded-2xl border-2 border-gray-200 focus:border-saffron-500 transition-all duration-300 h-12"
                          />
                        </motion.div>
                        
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="rounded-2xl border-2 border-gray-200 focus:border-saffron-500 transition-all duration-300 h-12"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Textarea
                          name="message"
                          placeholder="Your Message *"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="rounded-2xl border-2 border-gray-200 focus:border-saffron-500 transition-all duration-300 resize-none"
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-saffron-500 hover:bg-saffron-600 text-white py-6 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                          ) : (
                            <Send className="w-5 h-5 mr-2" />
                          )}
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                      </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full"
            >
              <Card className="h-full rounded-3xl shadow-xl overflow-hidden">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full min-h-[500px] bg-gradient-to-br from-saffron-100 to-rose-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-saffron-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-poppins font-semibold mb-2">
                        Visit Our Store
                      </h3>
                      <p className="text-gray-600 mb-4">
                        17 Main Market, Malviya Nagar<br />
                        New Delhi, Delhi 110017
                      </p>
                      <Button
                        variant="outline"
                        className="border-saffron-500 text-saffron-600 hover:bg-saffron-50 rounded-full"
                        onClick={handleDirectionsClick}
                      >
                        Get Directions
                      </Button>
                    </div>
                    
                    {/* Decorative Elements */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-10 left-10 w-8 h-8 bg-saffron-300 rounded-full opacity-60"
                    />
                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="absolute bottom-10 right-10 w-12 h-12 bg-rose-300 rounded-full opacity-60"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
