import Button from "../Button";
import Card from "../Card";

const UserList = () => {
  const users = [
    { id: 1, name: "Amanda", email: "amanda@mail.com" },
    { id: 2, name: "Carlos", email: "carlos@mail.com" },
    { id: 3, name: "Rodrigo", email: "rodrigo@mail.com" },
  ];

  return (
    <div>
      <Button onClick={() => {}}>Add User</Button>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          <>
            {users.map((user) => (
              <Card key={user.id} {...user} />
            ))}
          </>
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
