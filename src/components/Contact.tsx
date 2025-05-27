import { ChangeEvent, FormEvent, useState } from "react";
    import { Mail } from "lucide-react";
    import { SiZoom, SiGooglemeet } from "react-icons/si";
    import SocialLinks from "./SocialLinks";
    import { ToastContainer, toast } from "react-toastify";
    import "react-toastify/dist/ReactToastify.css";

    export default function Contact() {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        action: "contact_us"
      });
      const [loading, setLoading] = useState(false);

      const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
          const response = await fetch("https://formspree.io/f/xldbyqke", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message
            }),
          });

          if (response.ok) {
            toast.success("Your message was sent successfully!");
          } else {
            toast.error("Failed to send message. Please try again.");
          }
        } catch (error) {
          toast.error("An error occurred. Please try again.");
        } finally {
          setFormData({
            name: "",
            email: "",
            message: "",
            action: "contact_us"
          });
          setLoading(false);
        }
      };

      return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Book Your Exclusive Consultation!
              </h2>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                Ready to transform your business? Our expert team is here to help
                you take the next step—book your{" "}
                <span className="text-green-500 font-bold">FREE</span> consultation
                now!
              </p>
            </div>

            <div className="mt-20 bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                    Let's Chat About Your Vision!
                  </h3>
                  <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                    Fill out the form, and our team will connect with you within{" "}
                    <span className="text-green-500 font-bold">6 HOURS</span>⚡
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-primary" />
                      <a className="ml-3 text-gray-500 dark:text-gray-300 hover:underline">
                        contact@yaksen.com
                      </a>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Stay Connected
                    </h4>
                    <SocialLinks />
                  </div>
                </div>
              </div>
              <div className="py-10 px-6 sm:px-10 lg:col-span-1 xl:p-12">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input
                    type="hidden"
                    name="action"
                    value={formData.action}
                  />
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="Hey, what's your name?"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="Your email?"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md p-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="Tell us what's on your mind, we're all ears!"
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      {loading ? "Sending..." : "Book My Free Consultation"}
                    </button>
                  </div>
                  <div className="mt-4 flex justify-center gap-4">
                    <SiZoom className="h-16 w-16 text-black dark:text-white" />
                    <SiGooglemeet className="h-16 w-6 text-black dark:text-white" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      );
    }
