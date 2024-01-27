import Heading from "@/elements/Heading";
import Image from "next/image";
import React from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { timeAgo } from "@/utils/dateformatter";
import Button from "@/elements/Button";
import { reDirectToRead } from "@/utils/reDirectToRead";

const Author = ({
  author,
  articles,
  setloadMoreArticlesLength,
  contentLoading,
  articleLoading,
  loadArticleLength

}) => {
  return (
    <div className="relative w-full">
      {contentLoading ? (
        <div className="animate-pulse w-full h-[25vh] bg-secondary p-5 mb-6 rounded-lg"></div>
      ) : (
        <div className="w-full bg-secondary p-5 mb-6 rounded-lg">
          <div className="flex justify-start items-center mb-2">
            <div className="w-20 h-20 rounded-full overflow-hidden mr-4  ">
              <Image
                src={author?.profileImage}
                alt={author?.name}
                width={500}
                height={500}
                className="relative w-full h-full object-cover "
              />
            </div>
            <div className="flex md:flex-row flex-col justify-start md:justify-center md:items-center items-start gap-2 ">
              <div>
                <article className="text-primary text-[18px] font-semibold cursor-pointer hover:text-accent ">
                  {author?.name}
                </article>
                <article className="text-secondary text-sm font-light  ">
                  {author?.email}
                </article>
              </div>
              <div className="mx-2 h-[30px] border-r border-primary w-[1px] md:block hidden"></div>
              <div className="flex justify-start items-center gap-2">
                {author?.socialMedia?.twitter && (
                  <a href={author?.socialMedia?.twitter} target="_blank">
                    <FaXTwitter
                      size={15}
                      className="text-primary cursor-pointer hover:text-accent"
                    />
                  </a>
                )}
                {author?.socialMedia?.linkedin && (
                  <a href={author?.socialMedia?.linkedin} target="_blank">
                    <FaLinkedin
                      size={15}
                      className="text-primary cursor-pointer hover:text-accent"
                    />
                  </a>
                )}
                {author?.socialMedia?.instagram && (
                  <a href={author?.socialMedia?.instagram} target="_blank">
                    <FaInstagram
                      size={15}
                      className="text-primary cursor-pointer hover:text-accent"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
          <article className="text-primary">{author?.bio}</article>
        </div>
      )}
      {contentLoading ? (
        <div className="animate-pulse w-full h-[140vh] bg-secondary p-5 mb-6 rounded-lg"></div>
      ) : (
        <div className="w-full bg-secondary p-5 mb-6 rounded-lg">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
            {articles?.map((news, idx) => {
              return (
                <div key={idx} className="w-full shadow-lg  rounded-md">
                  {/* image */}
                  <Image
                    src={news?.thumbnail}
                    alt={news?.title}
                    width={500}
                    height={500}
                    className="relative w-full h-[250px] rounded-lg object-cover overflow-hidden mb-2"
                  />

                  <div className="w-full relative mt-2 p-5 ">
                    <Heading
                      label={news?.category}
                      htype={1}
                      custcss=" mb-1 !text-[12px] !text-accent"
                    />

                    <article
                      className="text-[20px] font-semibold text-primary  mb-2 hover:underline cursor-pointer"
                      onClick={() => reDirectToRead(news?._id, news?.category)}
                    >
                      {news?.title?.length > 70
                        ? `${news?.title?.slice(0, 70)}...`
                        : news?.title}
                    </article>

                    <article className=" text-[10px] font-semibold text-primary opacity-[0.5]">
                      {timeAgo(news?.createdAt)}
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
          { loadArticleLength < author?.articles?.length &&  articles?.length > 0 && (articleLoading ? (
            <div className="w-full flex justify-center items-center my-10">
              <Button
                btnType={"1"}
                label={"Loading Article..."}
                css={
                  "inline-block flex justify-center items-center w-[150px] h-[50px] !cursor-not-allowed "
                }
              />
            </div>
          ) : (
            <div className="w-full flex justify-center items-center my-10">
              <div onClick={setloadMoreArticlesLength}>
                <Button
                  btnType={"1"}
                  label={"Load More"}
                  css={
                    "inline-block flex justify-center items-center w-[150px] h-[50px]"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Author;
