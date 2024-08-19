const Home = () => {
  return (
    <>
      <div>
        <div className="p-6 max-w-sm bg-background rounded-3xl shadow-neo text-center">
          <h1 className="text-4xl font-bold text-text mb-4">Metropulse</h1>
          <p className="text-2xl text-highlight">5/4 Time Signature</p>
          <div className="mt-6">
            <div className="p-4 bg-background rounded-full shadow-neo mb-4">
              <span className="text-6xl text-text">75</span>
            </div>
            <button className="bg-highlight text-background py-2 px-6 rounded-full shadow-neo hover:bg-light">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
