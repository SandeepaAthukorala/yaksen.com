import { Link } from "react-router-dom";
    import { services_icons } from "../../resources/icons.tsx";

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

    export default function ServiceCard({ service }: { service: ServiceData }) {
      // Find the icon corresponding to the service_icon_type
      const serviceIcon = services_icons.find(
        (item) => item.type === service.service_icon_type
      )?.icon;

      return (
        <Link to={`/services/${service._id}`} className="relative group">
          <div className="h-[350px] w-[350px] bg-white dark:bg-gray-700 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 hover:scale-105">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
            <div className="relative flex flex-col items-center justify-center text-center h-full">
              {/* Flexbox container to align elements */}
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                {serviceIcon} {/* Render the appropriate icon */}
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {service.service_title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {service.service_desc.split(" ").slice(0, 30).join(" ")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      );
    }
