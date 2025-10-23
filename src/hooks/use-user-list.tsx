import type { User } from "@/mock/user-list-mocks";
import { useEffect, useState } from "react";

function useUserList({ users }: { users: User[] }) {
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);

  useEffect(() => {
    const sorted = [...users].sort((a, b) =>
      a.name.localeCompare(b.name, "es", { sensitivity: "base" })
    );
    setSortedUsers(sorted);
  }, [users]);
  return {
    sortedUsers,
  };
}

export default useUserList;
