import { FaFacebook, FaLinkedin, FaDiscord, FaYoutube } from "react-icons/fa"; 
import SocialLink from "./social/SocialLink";

const socialLinks = [
 
  {
    icon: FaFacebook,
    href: "https://web.facebook.com/YaksenOg",
    label: "Facebook",
  },
  // { icon: FaInstagram, href: 'https://instagram.com/yaksen', label: 'Instagram' },

  { icon: FaDiscord, href: "https://discord.gg/D7hweH5MwW", label: "Discord" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/yaksen-official",
    label: "LinkedIn",
  },
  { icon: FaYoutube, href: 'https://www.youtube.com/@yaksen-official', label: 'YouTube' }
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
}
