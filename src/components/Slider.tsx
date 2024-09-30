import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "../assets/slides";
import type { LogoTextProps } from "../interfaces/Logo";

function Slider(props: Readonly<{ logoText: LogoTextProps }>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchStartX = e.touches[0].clientX;
    e.currentTarget.setAttribute("data-touch-start", touchStartX.toString());
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchStartX = Number(
      e.currentTarget.getAttribute("data-touch-start")
    );
    const touchEndX = e.changedTouches[0].clientX;
    const threshold = 50;

    if (touchStartX - touchEndX > threshold) {
      nextSlide();
    } else if (touchEndX - touchStartX > threshold) {
      prevSlide();
    }
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      id="slider"
      className="w-full min-h-screen sm:h-screen bg-[#080e2f] text-gray-300 pt-[80px] sm:pt-0 pb-16 sm:pb-16"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 gap-2">
          <p className="text-3xl font-light inline border-b-4 border-[#ffba18]">
            {props.logoText.title}
          </p>
          <div>
            <p className="pt-8 text-4xl font-bold">{props.logoText.short}</p>
          </div>
        </div>
        <div className="max-w-[1000px] h-[400px] sm:h-[80%] w-full py-8 px-8 relative group">
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="w-full h-full duration-500 rounded-2xl"
          />
          <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex justify-center py-4 top-4">
            {slides.map((slide, slideIndex) => (
              <div
                key={slide.url}
                onClick={() => goToSlide(slideIndex)}
                onKeyUp={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    goToSlide(slideIndex);
                  }
                }}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled
                  color={slideIndex === currentIndex ? "white" : "#ffba18"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
