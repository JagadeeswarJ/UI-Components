import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import {
  pages
} from "./pages"

function App() {

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-2 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/tail-animation" replace />} />
            <Route path="/hover-tracking" element={<pages.HoverTracking />} />
            <Route path="/review-scrollable" element={<pages.ReviewsScrollable />} />
            <Route path="/3d-slide-show" element={<pages.ThreeDSlideShow />} />
            <Route path="/preview-slide-show" element={<pages.SlideShowWithPreview />} />
            <Route path="/p-to-l" element={<pages.Comp4 />} />
            <Route path="/tail-animation" element={<pages.Progress />} />
            <Route path="/ref" element={<pages.TestingUseRef />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
