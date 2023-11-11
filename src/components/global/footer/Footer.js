import Heading from "@/elements/Heading";
import React from "react";
import { BsPhoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import blogs from "@/json/highlightMostViewBlog.json";
import Image from "next/image";
import MelodyLink from "@/elements/MelodyLink";

const Footer = () => {
  return (
    <div className="lg:h-[30vh] h-auto bg-secondary rounded-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-hidden">
      {/* left */}
      <div className="relative w-full lg:h-full h-[40vh] bg-accent bg-opacity-[0.1] p-5">
        <article className="text-primary text-xl  font-bold mb-3">
          Melody.<span className="text-accent">kr</span>
        </article>
        <article className="text-sm text-primary">
          Explore a world of K-culture at Melody. Shop trendy products, discover
          K-drama insights, catch up on the latest K-pop news, read engaging
          blogs, and groove to the hottest tunes. Your go-to hub for all things
          Korean entertainment and lifestyle!
        </article>
        <div className="absolute  left-5 bottom-5 w-full flex justify-start items-end ">
          <div>
            <div className="flex justify-start items-center gap-2 mb-1">
              <BsPhoneFill size={15} className="text-accent" />
              <article className="text-sm text-accent">+82 2 953 3770</article>
            </div>
            <div className="flex justify-start items-center gap-2 ">
              <HiMail size={15} className="text-accent" />
              <article className="text-sm text-accent">
                notDecideYet@melody.kr
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="relative w-full h-full p-5">
        <Heading label={'Popular News'} />
         <div className="w-full h-full flex flex-col justify-start pb-5 ">
         {blogs?.map((blog,idx) => {
          if(idx < 2){
            return (
                <div className="w-full h-[50%] flex justify-start items-center gap-4">
                  {/* images */}
                  <div className="relative rounded-full w-[70px] h-[70px]">
                    <Image
                      src={blog?.image}
                      alt={blog?.title}
                      width={500}
                      height={500}
                      className="reltaive w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* context  */}
                  <div className="flex-1">
                  
                    <article
                      className="cursor-pointer text-[.82em] font-[600] text-primary hover:underline hover:ease-linear hover:duration-300 "
                      title={blog?.title}
                    >
                      {blog?.title.length > 45
                        ? `${blog?.title?.slice(0, 45)}...`
                        : blog?.title}
                    </article>
                    <span className="text-[10px] font-[500] uppercase text-secondary">
                      {blog?.views} Views . {blog?.rating && `${blog?.rating} Rating . `} {blog?.created_At} 
                    </span>
                  </div>
                </div>
              );
          }
        })}
         </div>
      </div>
      {/* right */}
      <div className="relative w-full h-full p-5">
        <Heading label={'Subscribe Us'} custcss="mb-3" />
        <article className=" text-primary mb-5">
        Get the latest creative news from <MelodyLink label="Melody.kr" LType={2} custcss="!text-base !inline-flex" />
        </article>
        <div className="w-full h-[50px] border rounded-lg overflow-hidden relative">
            <input type="text" placeholder="Your Email Address" className="placeholder:text-secondary text-primary !bg-transparent w-full h-full p-5 text-sm border-none outline-none" />
            <button className="absolute top-0 right-0 h-full px-5 bg-accent cursor-pointer text-white text-sm">Sign Up</button>
        </div>
        </div>
    </div>
  );
};

export default Footer;
