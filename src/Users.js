import User from "./User";

export default function Users({ users, handleDelete, handleUpdate }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User
              user={user}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
            <button>Click</button>
          </div>
        );
      })}
    </div>
  );
}
