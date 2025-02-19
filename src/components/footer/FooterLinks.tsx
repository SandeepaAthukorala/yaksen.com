import { Link } from "react-router-dom";
import { scrollToSection } from "../../utils/scroll";

// Define the type for links
const links: {
  title: string;
  items: { label: string; path: string; section?: string }[]; // section is now optional
}[] = [
  {
    title: "Company",
    items: [
      { label: "About Us", path: "/", section: "about" },
      { label: "Services", path: "/", section: "services" },
      { label: "Projects", path: "/", section: "projects" },
      { label: "Contact", path: "/", section: "contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", path: "/privacy" },
     // { label: "Terms & Conditions", path: "/terms" },
      //{ label: "Refund Policy", path: "/refund" },
    ],
  },
  {
    title: "Support",
    items: [{ label: "Contact Support", path: "/", section: "contact" }],
  },
];

export default function FooterLinks() {
  // Function to handle scrolling
  const handleClick = (path: string, section?: string) => {
    if (section && path === "/") {
      scrollToSection(section);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
      {links.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold text-white mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => handleClick(item.path, item.section)}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
