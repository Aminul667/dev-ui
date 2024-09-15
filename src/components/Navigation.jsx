import { MdMedication } from "react-icons/md";
import { CiAlignBottom } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (toRoute) => {
    navigate(toRoute);
  };

  return (
    <nav className="bg-background shadow-neo w-full bottom-0 p-3 flex justify-between items-center absolute rounded-t-3xl">
      <button
        onClick={() => handleNavigation("/")}
        className="text-text hover:text-highlight flex flex-col items-center"
      >
        {/* <FaHome size={24} /> */}
        <MdMedication size={35} />
        {/* <span className="mt-1 text-sm">Home</span> */}
      </button>
      <button
        onClick={() => handleNavigation("/recent-incident")}
        className="text-text hover:text-highlight flex flex-col items-center"
      >
        <CiAlignBottom size={35} />
        {/* <span className="mt-1 text-sm">Notes</span> */}
      </button>
      <button
        onClick={() => handleNavigation("/doctor-visit")}
        className="text-text hover:text-highlight flex flex-col items-center"
      >
        {/* <FaBell size={24} /> */}
        <FaUserDoctor size={35} />
        {/* <span className="mt-1 text-sm">Notifications</span> */}
      </button>
      <button
        onClick={() => handleNavigation("/family")}
        className="text-text hover:text-highlight flex flex-col items-center"
      >
        {/* <FaBell size={24} /> */}
        <MdFamilyRestroom size={35} />
        {/* <span className="mt-1 text-sm">Notifications</span> */}
      </button>
    </nav>
  );
};

export default Navigation;
