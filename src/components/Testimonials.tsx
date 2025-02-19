import { useEffect, useState } from "react";
import InfiniteTestimonials from "./testimonials/InfiniteTestimonials";
import { getTestimonials } from "../apiCalls/ApiCalls";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonialData = async () => {
    try {
      const res = await getTestimonials();
      setTestimonials(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestimonialData();
  }, []);

  return (
    <div>
      {testimonials.length > 0 ? (
        <section
          id="testimonials"
          className="py-20 bg-gray-50 dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Customer Feedback
              </h2>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                See what our clients say about our services
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10" />
              <div className="relative overflow-hidden">
                <InfiniteTestimonials testimonials={testimonials} />
              </div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10" />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}
