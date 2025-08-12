import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Comp1 from "./pages/Comp1";
import Comp2 from "./pages/Comp2";
import Comp3 from "./pages/Comp3";

function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/comp1" replace />} />
            <Route path="/comp1" element={<Comp1 />} />
            <Route path="/comp2" element={<Comp2 />} />
            <Route path="/comp3" element={<Comp3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
