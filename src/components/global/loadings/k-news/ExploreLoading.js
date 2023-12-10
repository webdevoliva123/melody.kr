import Heading from "@/elements/Heading";
import React from "react";

const ExploreLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-secondary h-[100vh] overflow-hidden z-[2000]">
      <div className="max-w-[1200px] w-full mx-auto p-10">
        <div className=" animate-pulse p-10 bg-primary rounded-lg mb-6"></div>
        <div className="w-full lg:h-[70vh] md:h-[150vh] h-[50vh] grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5 mb-6">
          <div className="w-full h-full bg-primary rounded-lg flex flex-col justify-center items-center mb-6">
            <Heading
              label={"EXPLORE"}
              htype={1}
              custcss={"!text-primary  opacity-[0.2] md:mb-10 mb-5"}
            />
            <Heading
              label={`MELODy NEWS`}
              custcss="md:!text-[60px]  !text-secondary !font-extrabold !uppercase opacity-[0.2]"
            />
          </div>
          <div className="animate-pulse w-full h-full bg-primary rounded-lg mb-6"></div>
        </div>
        <div className="animate-pulse w-full h-[50vh] bg-primary rounded-lg mb-6">
        </div>
      </div>
    </div>
  );
};

export default ExploreLoading;
