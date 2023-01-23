import React, { useState } from "react";
import Wrapper from "./components/Helpers/Wrapper";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    {
      name: "Bayaman",
      age: 44,
    },
    {
      name: "Zhumabek",
      age: 25,
    },
    {
      name: "Jasmina",
      age: 22,
    },
    {
      name: "Feruzka",
      age: 18,
    },
    {
      name: "Akbar",
      age: 23,
    },
  ]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  usersList.sort((a, b) => b.age - a.age);

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
