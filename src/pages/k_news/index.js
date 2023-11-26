import NCategories from "@/components/k-news/NCategories";
import NLatest from "@/components/k-news/NLatest";
import NPicked from "@/components/k-news/NPicked";
import NSpotlight from "@/components/k-news/NSpotlight";
import NTrending from "@/components/k-news/NTrending";
import NWatchout from "@/components/k-news/NWatchout";
import React from "react";

const index = () => {
  return (
    <div className="relative w-full">
      <div className="mb-6">
        <NTrending />
      </div>
      <div className="mb-6">
        <NLatest />
      </div>

      <div className="grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5 mb-6">
        {/* left section */}
        <div className="w-full h-auto lg:h-[115vh] overflow-y-auto no-scrollbar">
          {/* spotlight */}
          <div className="mb-6">
            <NSpotlight />
          </div>
          {/* watch videos */}
          <div className="mb-6">
            <NWatchout />
          </div>
        </div>
        {/* right section */}
        <div className="w-full h-auto">
          {/* Picked one */}
          <div className="mb-6">
            <NPicked />
          </div>
          {/* categories */}
          <div className="mb-6">
            <NCategories />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default index;
