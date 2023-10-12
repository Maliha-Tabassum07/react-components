import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import MagicWand from "./component/magicWand";
import Title from "./component/title";

function App() {
  return (
    <Container>
      <Title />
      <MagicWand />
    </Container>
  );
}

export default App;
