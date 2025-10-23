import type { User } from "@/mock/user-list-mocks";
import { useEffect, useState } from "react";

interface UseUserListProps {
  users: User[];
  rowPerPage?: number;
}

function useUserList({ users, rowPerPage = 9 }: UseUserListProps) {
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
    const startIndex = (currentPage - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    const paginated = sortedUsers.slice(startIndex, endIndex);
    setPaginatedUsers(paginated);
  }, [sortedUsers, currentPage, rowPerPage]);

  const totalPages = Math.ceil(sortedUsers.length / rowPerPage);
  return {
    sortedUsers,
    paginatedUsers,
    searchTerm,
    sortOrder,
    currentPage,
    totalPages,
    totalItems: sortedUsers.length,
    rowPerPage,
    currentSearchTerm,
    handleSearch,
    handleSearchChange,
    handleSortOrderChange,
    handlePageChange,
  };
}

export default useUserList;
