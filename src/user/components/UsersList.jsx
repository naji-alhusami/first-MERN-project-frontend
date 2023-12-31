import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No Users Found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};

export default UsersList;
