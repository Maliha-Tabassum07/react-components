import useUserHook from "../hooks/useUserHook";

const UserList = () => {
  const { users, handleSubmit, errors } = useUserHook();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      UserList <button onClick={handleSubmit}>Test</button>
      {users &&
        users.map((user, i) => {
          return (
            <div key={i}>
              <h1>{user.firstName}</h1>
              <h3>Email: {user.email}</h3>
              <h3>Age: {user.age}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default UserList;
