import { useState } from "react";
import "./App.css";
import Card from "./components/card.component";
import { Container } from "react-bootstrap";
import { FOUNDER_DATA } from "./data/data";
import Title from "./components/title";
import Navbar from "./components/navbar";
import MagicWand from "./components/magicWand";
import Footer from "./components/footer";

function App() {
  const footerApp = "Linkedin";
  const [isMagic, setIsMagic] = useState(false);

  const toggleMagic = () => {
    setIsMagic(!isMagic);
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Container>
        <Title />
      </Container>
      {/* Callback function demo */}
      {<MagicWand isMagic={isMagic} toggleMagic={toggleMagic} />}

      <h2>List of founders </h2>
      {FOUNDER_DATA.map((founders) => {
        return (
          <Card
            key={founders.id}
            name={founders.name}
            description={founders.description}
          />
        );
      })}

      {/* Props drilling demo */}
      <Footer title={footerApp} />
    </>
  );
}

export default App;
