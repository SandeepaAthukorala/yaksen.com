import { useState } from "react";
    import { motion } from "framer-motion";
    import { toast } from "react-toastify";
    import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from "lucide-react";

    export default function Contact() {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
          const response = await fetch("https://formspree.io/f/xdkogqpz", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            toast.success("Message sent successfully! We'll get back to you soon.");
            setFormData({ name: "", email: "", subject: "", message: "" });
          } else {
            toast.error("Failed to send message. Please try again.");
          }
        } catch (error) {
          toast.error("An error occurred. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
      };

      const contactInfo = [
        {
          icon: Mail,
          title: "Email",
          value: "hello@yaksen.com",
          description: "Send us an email anytime",
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          icon: Phone,
          title: "Phone",
          value: "+94 77 699 3097",
          description: "Mon-Fri from 8am to 5pm",
          gradient: "from-green-500 to-emerald-500"
        },
        {
          icon: MapPin,
          title: "Location",
          value: "Kurunegala, Sri Lanka",
          description: "Come say hello at our office",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          icon: Clock,
          title: "Response Time",
          value: "< 24 hours",
          description: "We respond quickly",
          gradient: "from-orange-500 to-red-500"
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
        <section id="contact" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
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
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                Ready to start your project? Let's discuss how we can help you 
                <span className="text-primary-500 font-semibold"> achieve your goals</span> and 
                <span className="text-secondary-500 font-semibold">transform your business</span>.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="card card-hover p-6 text-center h-full">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.gradient} p-2.5 mx-auto mb-4`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-2">
                        {info.title}
                      </h3>
                      <p className="text-neutral-900 dark:text-white font-semibold mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="card p-8">
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-neutral-900 dark:text-white mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                    We're here to help you transform your ideas into reality. Reach out to us through any of the following channels and let's start building something amazing together.
                  </p>

                  {/* Why Choose Us */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white">Free Consultation</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">Get expert advice tailored to your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-secondary-500 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white">Quick Response</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">We respond within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white">Personalized Solutions</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">Custom strategies for your business</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-8 border-t border-neutral-200 dark:border-neutral-700 mt-8">
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                      Follow Our Journey
                    </h4>
                    <div className="flex space-x-4">
  {/* Facebook */}
  <motion.a
    href="https://web.facebook.com/yaksen"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="sr-only">Facebook</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 10-11.62 9.88v-7H8v-3h2.38V9.5c0-2.35 1.4-3.64 3.54-3.64 1.03 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46V12H18l-.38 3h-2.38v7A10 10 0 0022 12z" />
    </svg>
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    href="https://www.linkedin.com/company/yaksen"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="sr-only">LinkedIn</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
    </svg>
  </motion.a>
</div>


                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                className="card p-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white">
                    Send us a Message
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-600"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-600"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-600"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white transition-all duration-200 resize-none hover:border-primary-300 dark:hover:border-primary-600"
                      placeholder="Tell us about your project, goals, and how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      );
    }
