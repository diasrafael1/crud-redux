import Button from "../Button";
import Card from "../Card";
import { useRouter } from "next/router";
import { useAppSelector } from "../../redux/hooks";

const UserList = () => {
  const router = useRouter();
  const users = useAppSelector((store) => store.users);

  return (
    <div>
      <Button onClick={() => router.push("/add-user")}>Add User</Button>
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
