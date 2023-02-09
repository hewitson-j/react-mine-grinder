import "./App.css";
import Navbar from "./Navbar.js";
import SiteHeader from "./SiteHeader";
import AnimationButton from "./AnimationButton";
import TheGrinder from "./TheGrinder";
import Sections from "./Sections";
import ConceptArt from "./ConceptArt";
import AboutAuthor from "./AboutAuthor";
import Copyright from "./Copyright";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Navbar />
      <AnimationButton />
      <TheGrinder />
      <Sections
        id="#home"
        header={"Watch your back..."}
        text={
          "Mine Grinder is a thriller that hooks you and take you on a trip with a group of college kids out for one last scare hurrah. Horror fans will love this daunting deadly misadventure into a forbidden mining town’s secret. It is inspired and a reverent nod to the 80’s horror movie genre and it will unnerve you to no end if you open it up. Lives converge in the underground mine known as Abismo de la Plata, Silver Abyss as it was called. Surrounded by darkness, they only have themselves to rely on as a murderer tries to snuff out their lives, one by one. They are taken on a wild ride riddled with their insecurities and inner demons, exploited by the cold hands of a machine that is as maniacal as any killer or villain in any story that came before, and a campfire legend uses them as its muse. It is a story of pain and graphic death that spirals into the weaved web of a historically insane genius from the mine’s past. What secrets does the darkness of Abismo de la Plata hold and can they find their way out before they become buried in the legend of the Silver Abyss?"
        }
      ></Sections>
      <AboutAuthor id="#about-author" />
      <ConceptArt id="#art" />
      <Sections
        id="#buy-book"
        header={"Reviews and Purchase"}
        text={
          "The author is currently working on getting the book ready for publishing. It should be available on Amazon within the next few weeks. Other links to purchase the book will be included here as well.\nReviews will be included here once the book has been reviewed and critiqued."
        }
      ></Sections>
      <Copyright />
    </div>

    //TODO Anchor tags don't work still, need to add in animation script
    //Done: Moved images to be accessible from public, fixed anchor tags to other HTML files.
  );
}

export default App;
