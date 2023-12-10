import MelodyCategores from "@/components/allInOne/homepage/categores/MelodyCategores";
import DramaProfile from "@/components/allInOne/homepage/drama-profile/DramaProfile";
import GlobalMusic from "@/components/allInOne/homepage/global-music/GlobalMusic";
import JoinUs from "@/components/allInOne/homepage/join-us/JoinUs";
import KDramaUpdates from "@/components/allInOne/homepage/k-drama-updates/KDramaUpdates";
import ShoppingAtMelody from "@/components/allInOne/homepage/shopping-at-melody/ShoppingAtMelody";
import TopChannelMelody from "@/components/allInOne/homepage/top-channel-melody/TopChannelMelody";
import Trendingkdrama from "@/components/allInOne/homepage/trending-kdrama/Trendingkdrama";
import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
const Searchbar = ({ open, setSearchbarOpen }) => {
  useEffect(() => {
    if (open) {
      const body = window.document?.querySelector("body");
      body.style.overflowY = "hidden";
    } else {
      const body = window.document?.querySelector("body");
      body.style.overflowY = "auto";
    }
  }, [open]);
  return (
    <div
      className={`fixed left-0 ${
        open ? "top-0" : "-top-[100%]"
      } w-full h-full ${
        open && "bg-primary"
      } z-[1000] ease-linear duration-200 md:p-10 py-16 p-5 `}
    >
      <div className="w-full max-w-[1200px] h-full mx-auto mb-6">
        {/* search bar */}
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setSearchbarOpen(false)}
        >
          <IoIosClose size={40} className="text-primary" />
        </div>
        <div className="w-full mb-6">
          <div className=" mx-auto md:w-[80%] w-full h-[60px] border-b-2 border-b-accent  flex justify-center items-end gap-4">
            <input
              type="text"
              placeholder="Search, Melody Will Find For You ..."
              className="flex-1 w-full h-full border-none text-primary placeholder:text-secondary bg-transparent md:text-lg text-sm outline-none  "
            />
            <div className=" h-full flex justify-center items-center cursor-pointer gap-2">
              <article className="text-accent md:text-lg font-semibold">
                SEARCH{" "}
              </article>
              <IoIosSearch size={20} className="text-accent" />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="w-full h-[90%] bg-secondary p-5 rounded-lg overflow-y-auto grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5 melody-scroll">
        <div className="w-full h-auto ">
            {/* K drama updates */}
            <div className="my-6">
            <KDramaUpdates />
          </div>
          {/* Global Music */}
          <div className="my-6">
            <GlobalMusic />
          </div>
          {/* drama profile */}
          <div className="my-6">
            <DramaProfile />
          </div>
          {/* shopping */}
          <div className="my-0">
            <ShoppingAtMelody />
          </div>
          </div>
          <div className="w-full h-auto">
          {/* Trending k-drama */}
          <div className="my-6">
            <Trendingkdrama />
          </div>
          {/* Melody Categorys */}
          <div className="my-6">
            <MelodyCategores />
          </div>
          {/* Melody Channels */}
          <div className="my-6">
            <TopChannelMelody />
          </div>
          {/* Join Us */}
          <div>
            <JoinUs />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
