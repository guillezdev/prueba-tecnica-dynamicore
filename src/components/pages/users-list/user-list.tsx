import useUserList from "@/hooks/use-user-list";
import type { User } from "@/mock/user-list-mocks";
import { Badge } from "@/components/ui/badge";
import UserFilters from "./user-filters";
import UserCard from "./user-card";

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  const {
    sortedUsers,
    searchTerm,
    sortOrder,
    currentSearchTerm,
    handleSearch,
    handleSearchChange,
    handleSortOrderChange,
  } = useUserList({ users });

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

      <UserFilters
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        sortOrder={sortOrder}
        onSortOrderChange={handleSortOrderChange}
        onSearch={handleSearch}
      />

      {sortedUsers.length === 0 && currentSearchTerm ? (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            No se encontraron usuarios que coincidan con "{currentSearchTerm}"
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
