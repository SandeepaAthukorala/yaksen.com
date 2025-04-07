import React, { useState, useEffect } from "react"; 
import PackageCard, { PackageData } from "./packages/PackageCard";
import RequirementFormPopup from "./RequirementFormPopup";
import packagesData from "../data/packages.json";

export default function Packages() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
  const [packages, setPackages] = useState<PackageData[]>([]);

  useEffect(() => {
    const sortedPackages = (packagesData.packages as PackageData[]).sort((a, b) => a.order - b.order);
    setPackages(sortedPackages);
  }, []);

  const handleOpenPopup = (packageData: PackageData) => {
    setSelectedPackage(packageData);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedPackage(null);
  };

  const categorizedPackages = packages.reduce((acc: { [key: string]: PackageData[] }, pkg) => {
    if (!acc[pkg.category]) acc[pkg.category] = [];
    acc[pkg.category].push(pkg);
    return acc;
  }, {});

  return (
    <section id="packages" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Our Packages! 🚀
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Pick the perfect plan to boost your presence and drive growth! Limited time offers! ✨
          </p>
        </div>

        {Object.entries(categorizedPackages).map(([category, pkgs]) => (
          <div key={category} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-10 capitalize">
              {category.replace(/-/g, " ")} Packages
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {pkgs.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  packageData={pkg}
                  onGetStartedClick={handleOpenPopup}
                />
              ))}
            </div>
          </div>
        ))}

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

      <RequirementFormPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        packageData={selectedPackage}
      />
    </section>
  );
}
