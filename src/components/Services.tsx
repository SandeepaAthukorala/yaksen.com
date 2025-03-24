import { useEffect, useState } from "react";
import ServiceCard from "./services/ServiceCard";
import { getServices } from "../apiCalls/ApiCalls";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa"


interface ServiceData {
  _id: string;
  service_title: string;
  service_desc: string;
  service_icon_type: string;
  service_category: string;
  sub_services: {
    sub_title: string;
    sub_desc: string;
    benefits: { bene_title: string; bene_desc: string }[];
    key_features: { keyfeature_title: string; keyfeature_desc: string }[];
    our_process: { process_title: string; process_desc: string }[];
  };
}

export default function Services() {
  const [servicesData, setServicesData] = useState<ServiceData[]>([]);
  const [yakiraPhotos, setYakiraPhotos] = useState<string[]>([]);

  // Predefined list of Yakira image URLs
  const yakiraImageUrls = [
    "https://res.cloudinary.com/das8wrfd1/image/upload/v1742826539/056_kqoe9s.png",
    "https://res.cloudinary.com/das8wrfd1/image/upload/v1742826603/057_gpnkg0.png",
    "https://res.cloudinary.com/das8wrfd1/image/upload/v1742826607/151_nxcgn0.png",
    "https://res.cloudinary.com/das8wrfd1/image/upload/v1742826607/446_wa7vcg.png",
    "https://res.cloudinary.com/das8wrfd1/image/upload/v1742826608/043_ddlyxj.png",
    "https://res.cloudinary.com/das8wrfd1/image/upload/v1742826615/053_qewhrz.png",
    "https://res.cloudinary.com/das8wrfd1/image/upload/v1742826620/448_gu5pgy.png",
    "https://res.cloudinary.com/das8wrfd1/image/upload/v1742826645/008_dxgkha.png",
    "https://res.cloudinary.com/das8wrfd1/image/upload/v1742826648/005_oys1kn.png",

];


  const getServicesData = async () => {
    try {
      const res = await getServices();
      setServicesData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServicesData();
    setYakiraPhotos(yakiraImageUrls);
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Services 💼
          </h2>
        </div>

        <div className="mt-20 flex justify-center flex-wrap gap-4">
          {servicesData.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Meet Yakira 🤖
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our virtual AI influencer bringing your brand to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {yakiraPhotos.map((img, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={img}
                  alt={`Yakira ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
          <Link
    to="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
  >
    <FaInstagram className="mr-2 text-lg" /> See More Photos
  </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
