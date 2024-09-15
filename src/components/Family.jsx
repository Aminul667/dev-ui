import Title from "./Title";

const Family = () => {
  return (
    <div>
      <div>
        <Title title="Family Members"></Title>
      </div>

      <div className="my-4 h-[60vh]">
        <h2 className="text-xl text-highlight text-center">No Family Member Added</h2>
      </div>

      <button className="bg-highlight text-background py-2 px-6 ml-4 rounded-full shadow-neo hover:bg-light relative -bottom-16 left-60">
        Add
      </button>
    </div>
  );
};

export default Family;
