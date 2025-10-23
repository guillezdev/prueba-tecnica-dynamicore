import type { User } from "@/mock/user-list-mocks";
import { useEffect, useState } from "react";

interface UseUserListProps {
  users: User[];
}

function useUserList({ users }: UseUserListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);

  const handleSearch = () => {
    setCurrentSearchTerm(searchTerm);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value === "") {
      setCurrentSearchTerm("");
    }
  };

  const handleSortOrderChange = (order: "asc" | "desc") => {
    setSortOrder(order);
  };

  useEffect(() => {
    let filteredUsers = [...users];

    if (currentSearchTerm.trim()) {
      filteredUsers = filteredUsers.filter((user) => {
        const searchLower = currentSearchTerm.toLowerCase();
        return (
          user.name.toLowerCase().includes(searchLower) ||
          user.age.toString().includes(currentSearchTerm.trim())
        );
      });
    }

    const sorted = filteredUsers.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name, "es", {
        sensitivity: "base",
      });
      return sortOrder === "asc" ? comparison : -comparison;
    });

    setSortedUsers(sorted);
  }, [users, currentSearchTerm, sortOrder]);

  return {
    sortedUsers,
    searchTerm,
    sortOrder,
    currentSearchTerm,
    handleSearch,
    handleSearchChange,
    handleSortOrderChange,
  };
}

export default useUserList;
