import Title from "./Title";

const RecentIncident = () => {
  return (
    <div>
      <div>
        <Title title="Recent Incident"></Title>
      </div>

      <div className="my-4 h-[60vh]">
        {/* <h2 className="text-xl text-highlight text-center">Recent Incident</h2> */}
        <div className="w-80">
          <div className="border-l-2 border-highlight pl-3 text-text mt-3">
            <p className="text-base">4 Aug 2024</p>
            <div className="pl-2">
              <p className="text-sm">Headache (Mild)</p>
              <p className="text-sm">Chest Pain (Moderate)</p>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="border-l-2 border-highlight pl-3 text-text mt-3">
            <p className="text-base">6 Aug 2024</p>
            <div className="pl-2">
              <p className="text-sm">Cold (Mild)</p>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="border-l-2 border-highlight pl-3 text-text mt-3">
            <p className="text-base">15 Aug 2024</p>
            <div className="pl-2">
              <p className="text-sm">Back Pain (Mild)</p>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="border-l-2 border-highlight pl-3 text-text mt-3">
            <p className="text-base">20 Aug 2024</p>
            <div className="pl-2">
              <p className="text-sm">Headache (Mild)</p>
              <p className="text-sm">Chest Pain (Moderate)</p>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="border-l-2 border-highlight pl-3 text-text mt-3">
            <p className="text-base">25 Aug 2024</p>
            <div className="pl-2">
              <p className="text-sm">Headache (Mild)</p>
              <p className="text-sm">Chest Pain (Moderate)</p>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-highlight text-background py-2 px-6 ml-4 rounded-full shadow-neo hover:bg-light relative -bottom-16 left-60">
        Add
      </button>
    </div>
  );
};

export default RecentIncident;
