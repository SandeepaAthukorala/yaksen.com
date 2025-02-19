import SocialLinks from "../SocialLinks";
import FooterLinks from "./FooterLinks";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div
              className="flex items-center mb-4 cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="w-[45px]">
                <img src={LogoImg} alt="logo" />
              </div>
              <span className="ml-2 text-2xl font-bold">YAKSEN</span>
            </div>
            <p className="text-gray-400 mb-6">
              Pioneering the future of AI-driven business solutions with
              innovative technology and exceptional service.
            </p>
            <SocialLinks />
          </div>
          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} YAKSEN. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Crafted with passion by the YAKSEN Team ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
