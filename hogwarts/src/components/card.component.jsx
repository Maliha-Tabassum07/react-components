const Card = ({ userId, name, description }) => {
  return (
    <div
      style={{
        width: "200px", // Set a fixed width for each card
        height: "350px", // Set a fixed height for each card
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        border: "1px solid",
        borderRadius: "5px",
        backgroundColor: "#f0f0f0", // Optional background color
      }}
    >
      <div style={{ padding: "10px" }}>
        <h3>Name: {name}</h3>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default Card;
