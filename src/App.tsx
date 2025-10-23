import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/nav/navbar";
import UsersPage from "@/pages/users-page";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<UsersPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
