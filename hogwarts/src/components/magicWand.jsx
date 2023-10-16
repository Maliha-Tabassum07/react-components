import React from "react";
import { Button } from "react-bootstrap";

const MagicWand = ({ isMagic, toggleMagic }) => {
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
