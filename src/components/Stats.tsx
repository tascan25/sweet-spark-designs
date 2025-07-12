
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Award, Clock, Heart } from "lucide-react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: "+",
      label: "Happy Customers",
      color: "text-saffron-500"
    },
    {
      icon: Award,
      value: 25,
      suffix: "+",
      label: "Years of Excellence",
      color: "text-rose-500"
    },
    {
      icon: Clock,
      value: 100,
      suffix: "+",
      label: "Traditional Recipes",
      color: "text-blue-500"
    },
    {
      icon: Heart,
      value: 99,
      suffix: "%",
      label: "Customer Satisfaction",
      color: "text-green-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-saffron-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Our <span className="text-gradient">Journey</span> in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating decades of sweetening lives with authentic Indian flavors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isInView={isInView}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, isInView, delay }: { stat: any; isInView: boolean; delay: number }) => {
  const [count, setCount] = useState(0);
  const { icon: Icon, value, suffix, label, color } = stat;

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;

      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += stepValue;
        if (currentCount >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 mb-6 group-hover:shadow-lg transition-all duration-300`}
        >
          <Icon className={`w-8 h-8 ${color}`} />
        </motion.div>
        
        <motion.div
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 font-poppins"
        >
          {count.toLocaleString()}{suffix}
        </motion.div>
        
        <p className="text-gray-600 font-medium">{label}</p>
      </motion.div>
    </motion.div>
  );
};

export default Stats;
