import Home from "./components/pages/Home/Home";
import Shop from "./components/pages/Shop/Shop";
import Contact from "./components/pages/Contact/Contact";
import Illustrator from "./components/pages/Portfolios/Illustrator";
import Resume from "./components/pages/Resume/Resume";
import Muralist from "./components/pages/Portfolios/Muralist";
import WebDesigner from "./components/pages/Portfolios/WebDesigner";
import { Routes, Route } from "react-router-dom";
import images from "./images.json";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home imageData={images.illustrator} />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route
          exact
          path="/illustrator"
          element={<Illustrator imageData={images.illustrator.graphic} />}
        />
        <Route
          exact
          path="/muralist"
          element={<Muralist imageData={images.muralist} />}
        />
        <Route
          exact
          path="/designer"
          element={<WebDesigner imageData={images.webdeveloper} />}
        />
        <Route
          exact
          path="/resume"
          element={<Resume imageData={images.resume} />}
        />
      </Routes>
    </div>
  );
}

export default App;
