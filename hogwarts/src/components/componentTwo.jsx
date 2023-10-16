import ComponentThree from "./componentThree";

const ComponentTwo = ({ titleComponentTwo }) => {
  return (
    <div>
      Facebook
      <ComponentThree title={titleComponentTwo} />
    </div>
  );
};

export default ComponentTwo;
