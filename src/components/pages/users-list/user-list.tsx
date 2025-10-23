import useUser from "@/hooks/use-user";
import type { User } from "@/mock/user-mocks";

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  const { sortedUsers } = useUser({ users });

  if (!users || users.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">
          No hay usuarios para mostrar
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          Lista de Usuarios
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {sortedUsers.length} usuarios ordenados alfabéticamente
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedUsers.map((user) => (
          <div
            key={user.id}
            className="bg-card text-card-foreground rounded-lg border p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.age} años</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
