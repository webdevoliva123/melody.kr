import Heading from "@/elements/Heading";
import React from "react";
import blogBg from "@/assets/images/homepage/categories/blogs.jpeg";
import newsBg from "@/assets/images/homepage/categories/news.jpeg";
import musicBg from "@/assets/images/homepage/categories/music.jpeg";
import profileBg from "@/assets/images/homepage/categories/profile.jpeg";
import shopingBg from "@/assets/images/homepage/categories/shoping.jpeg";
import melodyFBg from "@/assets/images/homepage/categories/melodyF.jpeg";
import Image from "next/image";

const MelodyCategores = () => {
  const catList = [
    {
      name: "Blogs",
      background: blogBg,
      href: "/",
    },
    {
      name: "K-News",
      background: newsBg,
      href: "/",
    },
    {
      name: "Music",
      background: musicBg,
      href: "/",
    },
    {
      name: "K-Profile",
      background: profileBg,
      href: "/",
    },
    {
      name: "Shopping",
      background: shopingBg,
      href: "/",
    },
    {
      name: "Melody Family",
      background: melodyFBg,
      href: "/",
    },
  ];
  return (
    <div>
      {/* heading */}
      <div className="mb-5">
        <Heading label={"Categories"} />
      </div>
      {/* categories */}
      {catList?.map((cat, idx) => {
        return (
          <div
            key={idx}
            className="relative w-full h-[100px] bg-black rounded-lg overflow-hidden cursor-pointer mb-5"
          >
            <Image
              src={cat?.background}
              alt={cat?.name}
              width={500}
              height={500}
              className="relative w-full h-full object-cover z-[0]"
            />
            {/* bg layer */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-[0.5] z-[1]"></div>
            {/* content */}
            <div className="absolute top-0 left-0 w-full h-full p-4 flex justify-start items-center z-[2]">
              <article className="font-semibold text-white">
                {cat?.name}
              </article>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MelodyCategores;
