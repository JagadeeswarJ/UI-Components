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
            ? 'cursor-not-allowed'
            : 'hover:scale-110 hover:opacity-80'
            }`}
        >
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.625" cy="15.2617" r="15" fill="#1C1C1C" />
            <path d="M10.934 17.2889C9.55134 16.2911 9.55134 14.2323 10.934 13.2345L15.412 10.0028C17.0654 8.80955 19.375 9.99098 19.375 12.03V18.4934C19.375 20.5325 17.0654 21.7139 15.412 20.5206L10.934 17.2889Z" fill="#E6570E" />
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
              : 'opacity-60 hover:opacity-100 hover:scale-102'
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
            ? 'cursor-not-allowed'
            : 'hover:scale-105 hover:opacity-80'
            }`}
        >
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" transform="matrix(-1 0 0 1 30.625 0.261719)" fill="#1C1C1C" />
            <path d="M20.316 17.2889C21.6987 16.2911 21.6987 14.2323 20.316 13.2345L15.838 10.0028C14.1846 8.80955 11.875 9.99098 11.875 12.03V18.4934C11.875 20.5325 14.1846 21.7139 15.838 20.5206L20.316 17.2889Z" fill="#E6570E" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Comp3;
