import accordionData from "../data/accordionData";
import { useState } from "react";

const ServiceMenu = ({inView}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full  lg:px-14 px-3 mt-10">
      <div className="lg:rounded-[50px]  rounded-[25px] border-2 border-amber-50 overflow-hidden">
        {accordionData.slice(0, 6).map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === 5;
          const isExpanded = activeIndex === index;

          return (
            <div
              key={index}
              className={`
                border-b-2 border-white
                ${isFirst ? "rounded-t-[50px]" : ""}
                ${isLast ? "rounded-b-[50px] border-b-0" : ""}
              `}
            >
              {/* Accordion Header */}
              <div
                className={`relative group flex  h-36 justify-start  items-center w-full  bg-black lg:px-12 px-6 lg:py-22 py-10 text-white lg:font-extrabold font-bold uppercase cursor-pointer transition-all duration-300 ${
                  isExpanded ? "border-b-0" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h1 className="text-white lg:text-5xl  md:text-3xl  text-lg lg:text-left    text-left  sm:text-center ">
                  {item.title}
                </h1>
                <div
                  className={`absolute right-12 md:flex hidden top-1/2 -translate-y-1/2 lg:text-4xl text-xl transition-transform duration-1 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className={`bg-black text-white transition-all duration-500 ease-in-out overflow-hidden ${
                  isExpanded
                    ? "max-h-[1500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col px-8 py-6 md:flex-row gap-8">
                  <div className="flex-1">
                    <h2 className="text-amber-400 lg:text-2xl md:text-xl text-lg font-bold mb-2">
                      {item.leftHeading}
                    </h2>
                    <p className="lg:text-lg text-sm">{item.leftContent}</p>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-amber-400 lg:text-2xl md:text-xl text-lg font-bold mb-2">
                      {item.rightHeading}
                    </h2>
                    <p className="lg:text-lg text-sm">{item.rightContent}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceMenu;