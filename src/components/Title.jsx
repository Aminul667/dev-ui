const Title = ({ title }) => {
  return (
    <div className="p-2 max-w-sm bg-background rounded-3xl shadow-neo text-center">
      <h1 className="text-2xl font-bold text-text">{title}</h1>
    </div>
  );
};

export default Title;
