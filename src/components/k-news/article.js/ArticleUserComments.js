import Heading from "@/elements/Heading";
import Image from "next/image";
import React from "react";
import { IoMdMore } from "react-icons/io";

const ArticleUserComments = () => {
  return (
    <div className="p-5 bg-secondary rounded-lg">
      <Heading label={"200 Comments"} htype={1} custss="mb-10" />
      <div className="w-full mt-5">
        {/* comments */}
        <div className="w-full relative mb-6 ">
          {/* header */}
          <div className="flex justify-between items-center gap-4 mb-4">
            <div className="flex justify-start items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={
                    "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1702215080/jjjbgstoqydkapqaian4.jpg"
                  }
                  alt="park seo jun"
                  width={500}
                  height={500}
                  className="relative w-full h-full object-cover"
                />
              </div>
              <div>
                <article className="font-semibold text-primary">
                  Park Seo-Joon
                </article>
                <article className=" text-xs  text-secondary font-light">
                  2 days ago
                </article>
              </div>
            </div>
            <div>
            <IoMdMore size={25} className="text-primary cursor-pointer" />
            </div>
          </div>
          {/* comment */}
          <article className="text-primary mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            eum accusamus ad laborum consequuntur architecto dolores odio dolor.
            Obcaecati nobis fugit quisquam nihil recusandae ipsa deserunt,
            voluptatum modi hic in.
          </article>

          <div className="cursor-pointer">
            <article className="font-bold text-accent">Reply</article>
          </div>
        </div>
        {/* comments */}
        <div className="w-full relative mb-6 ">
          {/* header */}
          <div className="flex justify-between items-center gap-4 mb-2">
            <div className="flex justify-start items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={
                    "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1702215080/jjjbgstoqydkapqaian4.jpg"
                  }
                  alt="park seo jun"
                  width={500}
                  height={500}
                  className="relative w-full h-full object-cover"
                />
              </div>
              <div>
                <article className="font-semibold text-primary">
                  Park Seo-Joon
                </article>
                <article className=" text-xs  text-secondary font-light">
                  2 days ago
                </article>
              </div>
            </div>
            <div>
            <IoMdMore size={25} className="text-primary cursor-pointer" />
            </div>
          </div>
          {/* comment */}
          <article className="text-primary mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            eum accusamus ad 
          </article>

          <div className="cursor-pointer">
            <article className="font-bold text-accent">Reply</article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleUserComments;
