import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function MeetYakira() {
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

  useEffect(() => {
    // In a real scenario, you might fetch these dynamically
    setYakiraPhotos(yakiraImageUrls);
  }, []);

  return (
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
          to="https://www.instagram.com/hey.yakira/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <FaInstagram className="mr-2 text-lg" /> See More Photos
        </Link>
      </div>
    </div>
  );
}
