import { reDirectToAuthor } from "@/utils/reDirectToRead";
import Image from "next/image";
import React from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const AuthorNotFound = ({ data }) => {
  return (
    <div className="w-full  bg-secondary rounded-lg p-5">
      <article className="text-center text-primary md:text-[40px] text-[20px] font-extrabold my-20">
        {data?.message}
      </article>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-5">
        {data?.data?.map((author, idx) => {
          return (
            <div
              key={idx}
              className="w-full shadow-md  rounded-md overflow-hidden border-primary"
              title={author?.title}
            >
              {/* thumbnail */}
              <div className="h-[20vh] w-full  overflow-hidden mx-auto">
                <Image
                  src={author?.profileImage}
                  width={500}
                  height={500}
                  className="relative w-full h-full object-cover "
                />
              </div>
              <div className="py-4">
                <article
                  className=" text-accent uppercase  cursor-pointer text-center font-bold"
                  onClick={() => reDirectToAuthor(author?._id)}
                >
                  {author?.name}
                </article>
                <article className=" text-xs text-center text-primary">
                  {author?.email}
                </article>
                <div className="flex justify-center items-center gap-2 my-2">
                  <article className="text-[10px] text-secondary ">
                    {author?.articles?.length} Articles
                  </article>
                  <div className="h-[15px] border-r border-primary w-[1px] "></div>
                 
                  <div className="flex justify-start items-center gap-2">
                    {author?.socialMedia?.twitter && (
                      <a href={author?.socialMedia?.twitter} target="_blank">
                        <FaXTwitter
                          size={10}
                          className="text-primary cursor-pointer hover:text-accent"
                        />
                      </a>
                    )}
                    {author?.socialMedia?.linkedin && (
                      <a href={author?.socialMedia?.linkedin} target="_blank">
                        <FaLinkedin
                          size={10}
                          className="text-primary cursor-pointer hover:text-accent"
                        />
                      </a>
                    )}
                    {author?.socialMedia?.instagram && (
                      <a href={author?.socialMedia?.instagram} target="_blank">
                        <FaInstagram
                          size={10}
                          className="text-primary cursor-pointer hover:text-accent"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuthorNotFound;
