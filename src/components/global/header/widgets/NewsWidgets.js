import React from "react";
import { BsSearch } from "react-icons/bs";
const NewsWidgets = () => {
  const today = new Date();
  return (
      <div className="relative">
        <div className="w-[300px] h-[50px] border border-accent border-opacity-[0.5] rounded flex overflow-hidden p-2">
          {/*  */}
          <div className="w-full h-full">
            <input
              type="text"
              className="w-full h-full border-none outline-none px-4 text-sm placeholder:text-secondary text-primary bg-transparent"
              placeholder="Enter News Title, News Type etc."
            />
          </div>
        </div>
        <BsSearch
          size={20}
          className="absolute top-[50%] -translate-y-[50%] right-4 text-accent cursor-pointer"
        />
      </div>
  );
};

export default NewsWidgets;
