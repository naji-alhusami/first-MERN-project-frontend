import UsersList from "../components/UsersList";

import naji from "../../assets/naji.jpeg";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Naji",
      image: naji,
      places: 3,
    },
    {
      id: "u2",
      name: "Naji1",
      image: naji,
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
