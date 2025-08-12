
import { useState } from "react";
import rect1 from "/rec1.svg";

function Comp1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const slidesToShow = 2;
  return (
    <div className="min-h-[90vh] flex justify-center items-center">

      <div className="">

        <div className="mx-auto relative max-w-[1240px]">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              <div className="flex-shrink-0 w-1/2 px-2">
                <div className="flex gap-4 items-center p-4 bg-gray-900 rounded-lg">
                  <img src={rect1} alt="" className="w-12 h-12 rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-white font-medium mb-1">"Great app highly recommend"</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                      <div className="text-sm">
                        <div className="text-white font-medium">Mukunsh Bhushan</div>
                        <div className="text-gray-400">6 months ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-1/2 px-2">
                <div className="flex gap-4 items-center p-4 bg-gray-900 rounded-lg">
                  <img src={rect1} alt="" className="w-12 h-12 rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-white font-medium mb-1">"Excellent service and support"</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <div className="text-sm">
                        <div className="text-white font-medium">Sarah Johnson</div>
                        <div className="text-gray-400">3 months ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-1/2 px-2">
                <div className="flex gap-4 items-center p-4 bg-gray-900 rounded-lg">
                  <img src={rect1} alt="" className="w-12 h-12 rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-white font-medium mb-1">"Amazing features and intuitive design"</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <div className="text-sm">
                        <div className="text-white font-medium">Alex Chen</div>
                        <div className="text-gray-400">1 month ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentSlide(prev => prev > 0 ? prev - 1 : totalSlides - slidesToShow)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            ←
          </button>

          <button
            onClick={() => setCurrentSlide(prev => prev < totalSlides - slidesToShow ? prev + 1 : 0)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            →
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalSlides - slidesToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Comp1