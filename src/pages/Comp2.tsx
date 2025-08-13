import { useState } from "react";

function Comp2() {
  const images = [
    "/stackShow0.jpg",
    "/stackShow1.svg",
    "/stackShow2.svg",
    "/stackShow3.svg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-2xl h-[400px] mx-4">
        <div className="relative h-full" style={{ perspective: '1000px' }}>
          {images.map((image, index) => {
            let displayIndex;
            if (index >= currentIndex) {
              displayIndex = index - currentIndex;
            } else {
              displayIndex = index + images.length - currentIndex;
            }

            const zIndex = images.length - displayIndex;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-out`}
                style={{
                  transform: `translateX(${displayIndex * 45}px) scaleY(${1 - displayIndex * 0.08})`,
                  zIndex: zIndex,
                  opacity: displayIndex < 4 ? 1 : 0
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-black hover:bg-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-black hover:bg-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>


      </div>
    </div>
  );
}

export default Comp2