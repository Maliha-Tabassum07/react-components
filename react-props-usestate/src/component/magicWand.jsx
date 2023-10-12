import React, { useState } from "react";
import { Button } from "react-bootstrap";

const MagicWand = () => {
  const [isMagic, setIsMagic] = useState(false);

  const toggleMagic = () => {
    setIsMagic(!isMagic);
  };

  return (
    <div>
      <h2>Here Magic will happen!</h2>
      <p>{isMagic ? "Magic" : "Press button below"}</p>
      <Button variant="primary" onClick={toggleMagic}>
        {isMagic ? "Turn Off Magic" : "Enter Spell"}
      </Button>
    </div>
  );
};

export default MagicWand;
