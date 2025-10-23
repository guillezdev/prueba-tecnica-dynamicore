import UserList from "@/components/pages/users-list/user-list";
import { userMocks } from "@/mock/user-mocks";

const UsersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <UserList users={userMocks} />
    </div>
  );
};

export default UsersPage;
