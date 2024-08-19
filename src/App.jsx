import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Title from "./components/Title";

function App() {
  return (
    <div className="w-96 h-screen m-auto p-4 rounded-md bg-background relative">
      <div>
        <Title></Title>
      </div>
      <div className="flex items-center justify-center ">
        <Home></Home>
        <Navigation></Navigation>
      </div>
    </div>
  );
}

export default App;
