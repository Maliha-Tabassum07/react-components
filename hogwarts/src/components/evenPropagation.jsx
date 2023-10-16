const EventPropagation = () => {
  return (
    <div>
      {/* <h1>EventPropagationDemo:</h1> */}
      {/* <div
        onClick={() => {
          alert("You clicked on the Parent Div!");
        }}
      > */}
      <div
        onClick={() => {
          alert("All your information will be gone!");
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert("Do you really want to logout?");
          }}
        >
          Logout
        </button>
        <button
          onClick={() => {
            //   e.stopPropagation();
            alert("Are you sure you want to Delete Account?");
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
    // </div>
  );
};

export default EventPropagation;
