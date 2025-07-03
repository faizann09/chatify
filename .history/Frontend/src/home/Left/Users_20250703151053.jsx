import userGetAllUsers from "../../context/userGetAllUsers.jsx";
import User from "./User.jsx";

export default function Users({ onUserSelect }) {
  const [allUsers, loading] = userGetAllUsers();

  return (
    <div className="overflow-y-auto py-1 flex-1">
      {allUsers.map((user, index) => (
        <User key={index} user={user} onSelect={onUserSelect} />
      ))}
    </div>
  );
}

