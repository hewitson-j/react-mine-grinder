import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";
import SiteHeader from "./SiteHeader";
import AnimationButton from "./AnimationButton";
import TheGrinder from "./TheGrinder";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Navbar />
      <AnimationButton />
      <TheGrinder />
    </div>
  );
}

export default App;
