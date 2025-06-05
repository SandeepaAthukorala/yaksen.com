import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Users, TrendingUp } from "lucide-react";
import InfiniteTestimonials from "./testimonials/InfiniteTestimonials";

interface Testimonial {
  _id: string;
  testimonial_name: string;
  testimonial_position: string;
  testimonial_company: string;
  testimonial_content: string;
  testimonial_rating: number;
  testimonial_image_link: string;
  order: number;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Fetch testimonials from API
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://yaksen-backend.vercel.app/api/testimonials"
        );
        if (response.ok) {
          const data = await response.json();
          // Sort testimonials by order
          const sortedTestimonials = data.sort(
            (a: Testimonial, b: Testimonial) => a.order - b.order
          );
          setTestimonials(sortedTestimonials);
        } else {
          console.error("Failed to fetch testimonials");
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const stats = [
    {
      icon: Users,
      value: "30+",
      label: "Happy Clients",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      value: "5",
      label: "Average Rating",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "Success Rate",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Quote,
      value: "1K+",
      label: "Contents",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about working with us and the <span className="text-primary-500 font-semibold">transformative results</span> they've achieved.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card card-hover p-6 text-center">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.gradient} p-2.5 mx-auto mb-4`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-neutral-600 dark:text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5 rounded-3xl" />
          
          <div className="relative">
            <InfiniteTestimonials testimonials={testimonials} />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card p-8 lg:p-12 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-neutral-900 dark:text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Start Your Journey
              <TrendingUp className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
