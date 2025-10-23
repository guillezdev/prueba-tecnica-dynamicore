import useUserList from "@/hooks/use-user-list";
import type { User } from "@/mock/user-list-mocks";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  const { sortedUsers } = useUserList({ users });

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
          Lista de Usuarios{" "}
          <Badge variant="secondary">{sortedUsers.length}</Badge>
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedUsers.map((user) => (
          <Card key={user.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{user.name}</CardTitle>
                  <Badge variant="outline" className="mt-2">
                    {user.age} años
                  </Badge>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserList;
