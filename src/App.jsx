import Home from "./components/Home";
import Navigation from "./components/Navigation";


function App() {

  return (
    <div className="max-w-96 h-screen m-auto p-4 rounded-md bg-background flex items-center justify-center">
      <Home></Home>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
