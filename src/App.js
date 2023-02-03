import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";
import SiteHeader from "./SiteHeader";
import AnimationButton from "./AnimationButton";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Navbar />
      <AnimationButton />
    </div>
  );
}

export default App;
