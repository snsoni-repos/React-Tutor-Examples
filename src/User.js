export default function User({ user, handleDelete, handleUpdate }) {
  return (
    <div>
      <div>Index: {user.id}</div>
      <div>Name: {user.name}</div>
      <div>Age:{user.age}</div>
      <button onClick={() => handleDelete(user.id)}>Delete</button>
      <button
        onClick={() =>
          handleUpdate(user.id, {
            name: user.name + "!",
            age: user.age + 10
          })
        }
      >
        Update
      </button>
      <hr />
    </div>
  );
}
