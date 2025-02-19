import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const AdminNav = () => {
  const links = [
    {
      name: "Services",
      target: "/admin/services",
    },
    {
      name: "Projects",
      target: "/admin/projects",
    },
    {
      name: "Members",
      target: "/admin/members",
    },
    {
      name: "Testimonials",
      target: "/admin/testimonials",
    },
    {
      name: "Users",
      target: "/admin/users",
    },
  ];

  const location = useLocation();

  return (
    <div className="w-full h-full p-6">
      <div className="flex items-center">
        <div className="w-[50px]">
          <img src={Logo} alt="logo" />
        </div>

        <div>
          <span className="text-[25px]">YAKSEN</span>
          <span>Admin</span>
        </div>
      </div>

      {/* links */}
      <div className="flex flex-col gap-3 mt-8 w-full">
        {links.map((item, index) => (
          <div key={index} className="w-full flex">
            <Link
              to={`${item.target}`}
              className={`${
                location.pathname === item.target ? "bg-gray-200" : "bg-white"
              } text-black w-full p-2 hover:bg-gray-200 rounded-md`}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNav;
