import { useState } from "react";
import UserContext from "./context/UserContext";
import "./styles.css";
import Users from "./Users";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mike",
      age: 30
    },
    {
      id: 2,
      name: "Adam",
      age: 50
    },
    {
      id: 3,
      name: "Jerry",
      age: 50
    },
    {
      id: 4,
      name: "Kim",
      age: 60
    }
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUpdate = (id, updates) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            ...updates
          };
        }
        return user;
      })
    );
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ handleDelete, handleUpdate }}>
        <Users
          users={users}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </UserContext.Provider>
    </div>
  );
}
