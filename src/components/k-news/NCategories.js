import Heading from "@/elements/Heading";
import Image from "next/image";
import React from "react";

const NCategories = ({title}) => {
  const categories = [
    {
      url: "/",
      name: "Videos",
      thumbnail:
        "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1701014052/K-pop-MVs-2021-1-scaled_svilwy.jpg",
      description: "Explore MV Reaction, K-Drama Review, Vlogs etc.",
    },
    {
      url: "/",
      name: "Style",
      thumbnail:
        "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1701014105/c9cf18fb110a133ebeae188d1f6a6315_qfhh8k.jpg",
      description: "Get your style like korean styles",
    },
    {
      url: "/",
      name: "TV/FILM",
      thumbnail:
        "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1701014183/best-korean-drama-2020_t2lq7c.jpg",
      description: "See latest of news korean drama, movies etc.",
    },
    {
      url: "/",
      name: "Music",
      thumbnail:
        "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1701014256/5fdedc85e4d6b3bb6de9b68bf63ab90d_pauufp.jpg",
      description: "See upcoming music from favourite groups.",
    },
  ];
  return (
    <div className="relative p-5  rounded-lg">
      <div className="w-full flex justify-between items-center mb-2">
        <Heading label={title ? title :"Categories"} htype={2}/>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {categories?.map((cat, idx) => {
          return (
            <div
              key={idx}
              className="rouded-lg p-2 hover:bg-secondary gap-4 flex justify-start items-center rounded-lg cursor-pointer"
            >
              <div className="rounded-full w-[75px] h-[75px] overflow-hidden">
                <Image
                  src={cat?.thumbnail}
                  alt={cat?.name}
                  width={500}
                  height={500}
                  className="relative w-full h-full object-cover"
                />
              </div>
              <div className="flex-[1]">
                <article className="text-primary font-semibold uppercase ">
                  {cat?.name}
                </article>
                <article className="text-secondary  text-xs  capitalize ">
                  {cat?.description}
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NCategories;
