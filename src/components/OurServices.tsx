import { useEffect, useState } from "react";
    import ServiceCard from "./services/ServiceCard";
    import { getServices } from "../apiCalls/ApiCalls";
    import servicesData from "../data/services.json"; // Import the local JSON data

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
      order: number;
    }

    export default function OurServices() {
      const [services, setServices] = useState<ServiceData[]>([]);

      useEffect(() => {
        // Load the service data from the local JSON file and sort by order
        const sortedServices = (servicesData as ServiceData[]).sort((a, b) => a.order - b.order);
        setServices(sortedServices);
      }, []);

      return (
        <div className="mb-20 mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Services 💼
            </h2>
          </div>

          <div className="mt-12 flex justify-center flex-wrap gap-4">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      );
    }
