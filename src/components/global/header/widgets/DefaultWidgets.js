import React from 'react'
import { months } from "@/constant/dates";
import { RiSearch2Line } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";

const DefaultWidgets = () => {
    const today = new Date();
    return (
      <div className="flex justify-end items-center gap-4">
        {/* small icons */}
        <div className="flex justify-center items-center  gap-3">
          <HiOutlineShoppingCart
            size={20}
            className="text-primary hover:text-accent cursor-pointer ease-in duration-150"
          />
          <FaXTwitter
            size={20}
            className="text-primary hover:text-accent cursor-pointer ease-in duration-150"
          />
          <RiSearch2Line
            size={20}
            className="text-primary hover:text-accent cursor-pointer ease-in duration-150"
          />
        </div>
        {/* time */}
        <div className=" h-[40px] pl-[20px] ml:[10px] border-l lg:flex justify-center items-center gap-2  hidden">
          <article className="text-[35px] text-secondary">
            {today.getDate()}
          </article>
          <div className="flex flex-col justify-end items-start -mb-[5px] text-sm text-secondary font-normal">
            <span className="block font-thin text-[10px]">
              {months[today.getMonth()].short_name}
            </span>
            <span className="block font-thin text-[10px]">
              {today.getFullYear()}
            </span>
          </div>
        </div>
      </div>
  )
}

export default DefaultWidgets