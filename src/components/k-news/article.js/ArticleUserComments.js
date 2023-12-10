import Heading from "@/elements/Heading";
import Image from "next/image";
import React from "react";

const ArticleUserComments = () => {
  return (
    <div className="p-5 bg-secondary rounded-lg">
      <Heading label={"Read Users Comments"} htype={2} custss="mb-10" />
      <div className="w-full h-[1px] border-t border-primary my-5"></div>
      <div className="w-full mt-5">
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
                <article className="font-semibold text-accent">
                  Park Seo-Joon
                </article>
                <article className=" text-xs  text-secondary font-light">
                  2 days ago
                </article>
              </div>
            </div>
          </div>
          {/* comment */}
          <article className="text-primary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            eum accusamus ad laborum consequuntur architecto dolores odio dolor.
            Obcaecati nobis fugit quisquam nihil recusandae ipsa deserunt,
            voluptatum modi hic in.
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleUserComments;
