import { useEffect, useState } from "react";
import ServiceCard from "./services/ServiceCard";
import { getServices } from "../apiCalls/ApiCalls";

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
  const [servicesData, setServicesdata] = useState<ServiceData[]>([]);

  const getServicesData = async () => {
    try {
      const res = await getServices();
      setServicesdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServicesData();
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
      </div>
    </section>
  );
}
