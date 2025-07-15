import React from "react";
import videoContent from "../data/videoContent";

const VideoSection = ({inView}) => {
  return (
    <section className="py-10 ">
        <div className="lg:px-30 px-4">
        <h1 className={`text-center ${inView? "text-white": "text-black"} lg:text-5xl text-4xl font-extrabold`} >Wall of Creation</h1>
      <h2 className={`lg:text-3xl lg:mt-6 mt-5 ${inView? "text-white": "text-balck"} text-center font-semibold text-xl`}>  A showcase of our most expressive, bold, and original visual stories — crafted with passion, shared with pride.</h2>

        </div>
      <div className="flex justify-center mt-10 lg:gap-10 gap-4  flex-wrap">
        {videoContent.map((video, index) => (
          <div
            key={index}
            className="w-[300px] h-[533px] bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <video
              src={video.src}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              title={video.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
