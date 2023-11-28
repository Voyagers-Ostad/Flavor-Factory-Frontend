import faqs from "./data/faq.js";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "./components/accordion/Accordion.jsx";
import About from "./components/aboutContents/About.jsx";
import AboutCoverPicture from "./components/aboutCoverPicture/AboutCoverPicture.jsx";

const App = () => {
  return (
    <div>
      <AboutCoverPicture />
      <About />
      <Accordion data={faqs} />
    </div>
  );
};

export default App;
