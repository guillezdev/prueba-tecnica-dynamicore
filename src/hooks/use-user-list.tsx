import type { User } from "@/mock/user-list-mocks";
import { useEffect, useState } from "react";

interface UseUserListProps {
  users: User[];
  itemsPerPage?: number;
}

function useUserList({ users, itemsPerPage = 3 }: UseUserListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedUsers, setPaginatedUsers] = useState<User[]>([]);

  const handleSearch = () => {
    setCurrentSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value === "") {
      setCurrentSearchTerm("");
      setCurrentPage(1);
    }
  };

  const handleSortOrderChange = (order: "asc" | "desc") => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginated = sortedUsers.slice(startIndex, endIndex);
    setPaginatedUsers(paginated);
  }, [sortedUsers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  return {
    sortedUsers,
    paginatedUsers,
    searchTerm,
    sortOrder,
    currentPage,
    totalPages,
    totalItems: sortedUsers.length,
    itemsPerPage,
    currentSearchTerm,
    handleSearch,
    handleSearchChange,
    handleSortOrderChange,
    handlePageChange,
  };
}

export default useUserList;
