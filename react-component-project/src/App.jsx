import Navbar from "./components/navbar";
import Offcanvas from "./components/offcanvas";
import Images from "./components/images";
function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Offcanvas />
      <div>
        <Images />
      </div>
    </div>
  );
}

export default App;
