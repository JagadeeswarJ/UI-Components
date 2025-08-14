import { useState, useEffect } from "react";

function Comp3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "/stackShow0.jpg",
    "/stackShow1.svg",
    "/stackShow2.svg",
    "/stackShow3.svg"
  ];

  // For auto slide => 3secs

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % images.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [images.length]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="relative h-96 mb-6 bg-white rounded-lg shadow-2xl overflow-hidden">
        <div
          className="flex h-full transition-transform duration-600 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <button
          type="button"
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`transition-all duration-200 ${isTransitioning
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-110 hover:opacity-80'
            }`}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 transform ${index === currentIndex
                ? 'scale-105 shadow-lg ring-2 ring-orange-400'
                : 'opacity-70 hover:opacity-100 hover:scale-102'
              } ${isTransitioning ? 'pointer-events-none' : ''}`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}

        <button
          type="button"
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`transition-all duration-200 ${isTransitioning
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-110 hover:opacity-80'
            }`}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Comp3;
