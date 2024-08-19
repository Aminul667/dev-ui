import { FaHome, FaStickyNote, FaBell } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="bg-background shadow-neo w-full bottom-0 p-3 flex justify-between items-center absolute rounded-t-3xl">
      <button className="text-text hover:text-highlight flex flex-col items-center">
        <FaHome size={24} />
        <span className="mt-1 text-sm">Home</span>
      </button>
      <button className="text-text hover:text-highlight flex flex-col items-center">
        <FaStickyNote size={24} />
        <span className="mt-1 text-sm">Notes</span>
      </button>
      <button className="text-text hover:text-highlight flex flex-col items-center">
        <FaBell size={24} />
        <span className="mt-1 text-sm">Notifications</span>
      </button>
    </nav>
  );
};

export default Navigation;
