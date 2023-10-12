import Navbar from "./components/navbar";
import Offcanvas from "./components/offcanvas";
import Images from "./components/images";
import Footer from "./components/footer";
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
