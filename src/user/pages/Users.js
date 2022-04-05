import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Anam",
      image: "https://via.placeholder.com/600/771796",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
