import { Link, useNavigate, useLocation } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";

const SideBar = ({ items }) => {
  const location = useLocation();
  const nav = useNavigate();

  return (
    <div className="bg-[#242424] text-white h-full min-h-screen w-64 overflow-y-auto pb-4">
      <div className="relative h-full">
        <nav className="w-full">
          <ul className="w-full">
            {items.map((item, index) => (
              <li
                key={index}
                className={`hover:bg-[#3B3B3B] rounded mb-2 w-full ${
                  location.pathname === item.url ? "bg-[#3B3B3B]" : ""
                }`}
              >
                <Link
                  to={item.url}
                  className="flex items-center gap-2 px-8 py-3 text-sm font-semibold w-full text-white"
                >
                  <div className="flex items-center  text-[#7E7F7F]">
                    {item.icon}
                  </div>
                  <h3 className="text-[#7E7F7F]">{item.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full absolute rounded-md bg-red-600 flex gap-2 cursor-pointer py-3 mx-auto px-10 bottom-0">
          <TbLogout2 size={24} className="text-white" />
          <h4 className="text-white">LOG - OUT</h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
