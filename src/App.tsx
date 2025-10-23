import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/nav/navbar";
import UsersListPage from "@/pages/users-list-page";
import UserFormPage from "@/pages/user-form-page";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<UsersListPage />} />
            <Route path="/formulario" element={<UserFormPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
