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

export default function OurServices() {
  const [servicesData, setServicesData] = useState<ServiceData[]>([]);

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
  }, []);

  return (
    <div className="mb-20">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Our Services 💼
        </h2>
      </div>

      <div className="mt-12 flex justify-center flex-wrap gap-4">
        {servicesData.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}
