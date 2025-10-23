import UserForm from "@/components/pages/users-form/user-form";

const UserFormPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Formulario de Usuario
        </h1>
      </div>
      <UserForm />
    </div>
  );
};

export default UserFormPage;
