import userGetAllUsers from "../../context/userGetAllUsers";

export default function Users({ onUserSelect }) {
  const [allUsers, loading] = userGetAllUsers();

  return (
    <div className="py-1">
      {allUsers.map((user, index) => (
        <User key={index} user={user} onSelect={onUserSelect} />
      ))}
    </div>
  );
}


