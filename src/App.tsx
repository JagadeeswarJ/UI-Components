import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ReviewsScrollable from "./pages/ReviewsScrollable";
import ThreeDSlideShow from "./pages/ThreeDSlideShow";
import SlideShowWithPreview from "./pages/SlideShowWithPreview";
import Comp4 from "./pages/PortraitToL";
import Progress from "./pages/Progress";

function App() {

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-2 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/comp1" replace />} />
            <Route path="/review-scrollable" element={<ReviewsScrollable />} />
            <Route path="/3d-slide-show" element={<ThreeDSlideShow />} />
            <Route path="/preview-slide-show" element={<SlideShowWithPreview />} />
            <Route path="/p-to-l" element={<Comp4 />} />
            <Route path="/tail-animation" element={<Progress />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
