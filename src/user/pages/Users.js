import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Chairul Anam",
      image: "https://via.placeholder.com/400/197d29",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
