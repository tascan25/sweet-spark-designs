
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["123 Sweet Street", "Mumbai, Maharashtra 400001", "India"],
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109", "Mon-Sat: 9AM-8PM"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["orders@mithaimagic.com", "support@mithaimagic.com", "Response within 24hrs"],
      color: "text-saffron-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9AM - 8PM", "Sunday: 10AM - 6PM", "Festivals: Extended hours"],
      color: "text-rose-500"
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
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-saffron-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-poppins font-bold mb-6"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            We'd love to hear from you! Whether you have questions about our sweets, 
            need help with an order, or want to share feedback, we're here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                    </form>
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
                        123 Sweet Street, Mumbai<br />
                        Maharashtra, India 400001
                      </p>
                      <Button
                        variant="outline"
                        className="border-saffron-500 text-saffron-600 hover:bg-saffron-50 rounded-full"
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
