import Title from "./Title";

const Home = () => {
  return (
    <div>
      <div>
        <Title title="Home"></Title>
      </div>
      {/* active medication */}
      <div className="my-4 h-[60vh]">
        <h2 className="text-xl text-highlight text-center">
          Active Medication
        </h2>
        <div className="w-80">
          <div className="border-l-2 border-highlight pl-2 text-text mt-3">
            <p className="text-base">Maxpro</p>
            <p className="text-sm">1 Morning, 1 Dinner</p>
          </div>
          <div className="border-l-2 border-highlight pl-2 text-text mt-3">
            <p className="text-base">Fimoxil</p>
            <p className="text-sm">1 Morning</p>
          </div>
          <div className="border-l-2 border-highlight pl-2 text-text mt-3">
            <p className="text-base">Napa</p>
            <p className="text-sm">2 Morning</p>
          </div>
        </div>
      </div>

      <button className="bg-highlight text-background py-2 px-6 ml-4 rounded-full shadow-neo hover:bg-light relative -bottom-16 left-60">
        Add
      </button>
    </div>
  );
};

export default Home;
