import Home from "./components/pages/Home";
import images from "./images.json";



function App() {
  return (
    <div className="App">
      <Home imageData={images.images} />
    </div>
  );
}

export default App;
