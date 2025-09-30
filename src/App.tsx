import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Comp1 from "./pages/Comp1";
import Comp2 from "./pages/Comp2";
import Comp3 from "./pages/Comp3";
import Comp4 from "./pages/Comp4";
import Progress from "./pages/Progress";

function App() {

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-2 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/comp1" replace />} />
            <Route path="/comp1" element={<Comp1 />} />
            <Route path="/comp2" element={<Comp2 />} />
            <Route path="/comp3" element={<Comp3 />} />
            <Route path="/comp4" element={<Comp4 />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
