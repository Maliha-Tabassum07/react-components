import { useEffect, useState } from "react";
import axios from "axios";

const UserComponent = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then((resp) => {
        console.log("Our Response is  ", resp);
        const data = resp.data;
        console.log("Our data ", data);
        console.log("Total items ", data.total);
        setUsersData(data);
      });
  }, []);
  return (
    <div>
      {/* API calling */}
      <h1>The users Data</h1>
      {usersData.map((user) => {
        return (
          <div key={user.name} style={{ border: "1px solid" }}>
            <h4>Name: {user.name}</h4>
            <h4>City: {user.city}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UserComponent;
