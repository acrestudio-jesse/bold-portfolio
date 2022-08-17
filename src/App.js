import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop/Shop";
import Contact from "./components/pages/Contact";
import Illustrator from "./components/pages/Illustrator";
import Muralist from "./components/pages/Muralist";
import WebDesigner from "./components/pages/WebDesigner";
import { Routes, Route } from "react-router-dom";
import images from "./images.json";

function App() {
  console.log(images.illustrator);
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
      </Routes>
    </div>
  );
}

export default App;
