import userGetAllUsers from "../../context/userGetAllUsers.jsx";
import User from "./User.jsx";

export default function Users({ onUserSelect }) {
  const [allUsers, loading] = userGetAllUsers();
  console.log(allUsers);

  return (
    <div style={{ maxHeight: "calc(84vh - 1vh)" }} className="overflow-y-auto flex-faizan py-1">
      {allUsers.map((user, index) => (
        <User key={index} user={user} onClick={() => onUserSelect && onUserSelect(user)} />
      ))}
    </div>
  );
}
