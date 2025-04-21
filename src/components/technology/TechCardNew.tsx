import { ReactNode } from "react";

interface TechCardNewProps {
  icon: ReactNode;
  className?: string; 
}

const TechCardNew = ({ icon, className }: TechCardNewProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-700 w-[100px] h-[100px] flex items-center justify-center p-5 rounded-lg ${className}`}
    >
      {icon}
    </div>
  );
};

export default TechCardNew;
