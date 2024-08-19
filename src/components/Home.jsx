import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    // <div className="p-2 max-w-sm bg-background rounded-3xl shadow-neo text-center mt-4 w-full">
    //   <p className="text-2xl text-highlight">Active Medication</p>
    //   <div className="mt-6">
    //     <div className="p-4 bg-background rounded-full shadow-neo mb-4">
    //       <span className="text-6xl text-text">75</span>
    //     </div>
    //     <button className="bg-highlight text-background py-2 px-6 rounded-full shadow-neo hover:bg-light">
    //       Confirm
    //     </button>
    //   </div>
    // </div>
    <div className="my-4">
      <h2 className="text-xl text-highlight">Active Medication</h2>
      <div>
        <div className="bg-highlight p-2 rounded-full shadow-lg h-4 w-4">
          {/* <FaArrowRight size={12} className="text-background" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
