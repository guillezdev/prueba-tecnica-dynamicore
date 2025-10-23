import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/nav/navbar";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
