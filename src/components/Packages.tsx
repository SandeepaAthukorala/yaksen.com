import React from "react";
import PackageCard from "./packages/PackageCard";
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { Mail, Bot } from "lucide-react";

const packagesData = [
  {
    id: 1,
    title: "Starter Online Presence",
    priceRange: "LKR 3,500 - 5,000",
    description: "For businesses just getting online.",
    features: [
      { text: "Google My Business (GMB) Setup", icon: <FaGoogle className="text-red-500" /> },
      { text: "Facebook Business Page Setup", icon: <FaFacebook className="text-blue-600" /> },
      { text: "Instagram & TikTok Setup (Basic)", icon: <><FaInstagram className="text-pink-500" /><FaTiktok className="text-black dark:text-white" /></> },
      { text: "6 High-Quality Store Photos" },
      { text: "Business Description & Optimization" },
    ],
    bestFor: "New businesses, small shops",
    highlight: false,
  },
  {
    id: 2,
    title: "Social Media Booster",
    priceRange: "LKR 5,500 - 8,000",
    description: "For stores that want more online engagement.",
    features: [
      { text: "Facebook + Instagram Page Setup", icon: <><FaFacebook className="text-blue-600" /><FaInstagram className="text-pink-500" /></> },
      { text: "Profile & Cover Design" },
      { text: "5 Social Media Posts (Editable in Canva)", icon: <SiCanva className="text-blue-400" /> },
      { text: "2 Short TikTok/Reels (Basic Edits)", icon: <FaTiktok className="text-black dark:text-white" /> },
      { text: "Hashtag Research & Content Guide" },
    ],
    bestFor: "Restaurants, boutiques, salons",
    highlight: false,
  },
  {
    id: 3,
    title: "Google Domination",
    priceRange: "LKR 7,500 - 12,000",
    description: "For stores that want more Google visibility.",
    features: [
      { text: "Google My Business (Full Optimization)", icon: <FaGoogle className="text-red-500" /> },
      { text: "10 High-Quality Store Photos" },
      { text: "2 Promotional Posts (Google Updates)", icon: <FaGoogle className="text-red-500" /> },
      { text: "10 Customer Review Templates (Editable)" },
      { text: "Google Maps Ranking Tips", icon: <FaGoogle className="text-red-500" /> },
    ],
    bestFor: "Local shops, grocery stores, service businesses",
    highlight: true, // Highlight this package
  },
  {
    id: 4,
    title: "Business Growth Kit",
    priceRange: "LKR 12,000 - 18,000",
    description: "For businesses that want a landing page + social presence.",
    features: [
      { text: "Google My Business (GMB) Setup", icon: <FaGoogle className="text-red-500" /> },
      { text: "Facebook, Instagram, TikTok Setup", icon: <><FaFacebook className="text-blue-600" /><FaInstagram className="text-pink-500" /><FaTiktok className="text-black dark:text-white" /></> },
      { text: "5 Social Media Posts" },
      { text: "Simple Landing Page (One Page Website)" },
      { text: "1 WhatsApp Auto-Reply Setup", icon: <FaWhatsapp className="text-green-500" /> },
    ],
    bestFor: "Small businesses, event planners, home-based businesses",
    highlight: false,
  },
  {
    id: 5,
    title: "The E-Commerce Starter",
    priceRange: "LKR 20,000 - 30,000",
    description: "For businesses that want online selling.",
    features: [
      { text: "Facebook + Instagram Shop Setup", icon: <><FaFacebook className="text-blue-600" /><FaInstagram className="text-pink-500" /></> },
      { text: "WhatsApp Product Catalog Setup", icon: <FaWhatsapp className="text-green-500" /> },
      { text: "Simple Landing Page with Order Form" },
      { text: "10 High-Quality Product Photos" },
      { text: "Google My Business Setup", icon: <FaGoogle className="text-red-500" /> },
    ],
    bestFor: "Clothing stores, bakeries, gift shops",
    highlight: false,
  },
  {
    id: 6,
    title: "Social Media Automation",
    priceRange: "LKR 18,000 - 25,000",
    description: "For businesses that want content without daily work.",
    features: [
      { text: "Auto-Scheduled Facebook & Instagram Posts (1 Month)", icon: <><FaFacebook className="text-blue-600" /><FaInstagram className="text-pink-500" /></> },
      { text: "Auto-Reply Setup (Messenger & WhatsApp)", icon: <><FaFacebook className="text-blue-600" /><FaWhatsapp className="text-green-500" /></> },
      { text: "AI-Generated Captions & Hashtags" },
      { text: "5 Custom Promo Designs" },
      { text: "GMB Weekly Post Automation", icon: <FaGoogle className="text-red-500" /> },
    ],
    bestFor: "Restaurants, real estate, beauty salons",
    highlight: false,
  },
  {
    id: 7,
    title: "Full Digital Presence",
    priceRange: "LKR 35,000 - 50,000",
    description: "For businesses that want full digital coverage.",
    features: [
      { text: "Google My Business (Fully Optimized)", icon: <FaGoogle className="text-red-500" /> },
      { text: "Landing Page (With Contact Form & WhatsApp Chat)", icon: <FaWhatsapp className="text-green-500" /> },
      { text: "Facebook & Instagram Branding", icon: <><FaFacebook className="text-blue-600" /><FaInstagram className="text-pink-500" /></> },
      { text: "10 Social Media Posts + 5 Short Videos" },
      { text: "Business Email & Basic Chatbot Setup", icon: <><Mail className="text-gray-500" /><Bot className="text-purple-500" /></> },
      { text: "1 Month Social Media Management" },
    ],
    bestFor: "High-end businesses, real estate, hotels, service providers",
    highlight: true, // Highlight this package
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-white dark:bg-gray-900"> {/* Changed background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            🚀 Supercharge Your Business with Our Packages! 🚀
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan to boost your online presence and drive growth.
            Limited time offers available! ✨
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>

         <div className="text-center mt-16">
           <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
             Need something different? 🤔 We offer custom solutions too!
           </p>
           <a
             href="#contact"
             className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/50"
           >
             Get a Custom Quote
           </a>
         </div>
      </div>
    </section>
  );
}
