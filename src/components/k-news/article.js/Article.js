import Heading from "@/elements/Heading";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaRedditAlien,
} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoFill } from "react-icons/pi";
import { IoLogoPinterest } from "react-icons/io5";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoMail } from "react-icons/io5";

import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import Link from "next/link";
import ArticleComments from "./ArticleComments";
import ArticleUserComments from "./ArticleUserComments";
import RelatedArticle from "./RelatedArticle";
import { IoCloseSharp } from "react-icons/io5";
import GlobalLoading from "@/components/global/loadings/globalLoading";
import { reDirectToAuthor, reDirectToRead } from "@/utils/reDirectToRead";
import { timeAgo } from "@/utils/dateformatter";

const shareOptions = [
  {
    _id: "twitter",
    component: <FaXTwitter className="text-primary" size={12} />,
  },
  {
    _id: "instagram",
    component: <FaInstagram className="text-primary" size={12} />,
  },
  {
    _id: "facebook",
    component: <PiFacebookLogoFill className="text-primary" size={12} />,
  },
  {
    _id: "telegram",
    component: <PiTelegramLogoLight className="text-primary" size={12} />,
  },
  {
    _id: "pinterest",
    component: <IoLogoPinterest className="text-primary" size={12} />,
  },
  {
    _id: "whatsapp",
    component: <FaWhatsapp className="text-primary" size={12} />,
  },
  {
    _id: "linkedin",
    component: <FaLinkedin className="text-primary" size={12} />,
  },
  {
    _id: "reddit",
    component: <FaRedditAlien className="text-primary" size={12} />,
  },
  {
    _id: "reddit",
    component: <IoMail className="text-primary" size={12} />,
  },
];

const Article = ({ loading, data }) => {
  const [showMoreShareOpt, setShowMoreShareOpt] = useState(false);
  const [magnifyImage, setMagnifyImage] = useState(false);
  const [magnifyImageSrc, setMagnifyImageSrc] = useState(null);

  const extractImages = (event) => {
    if (event?.target?.className === "article_post") {
      setMagnifyImageSrc(event?.target?.getAttribute("src"));
      setMagnifyImage(true);
    }
  };

  useEffect(() => {
    if (magnifyImage) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "auto";
    }
  }, [magnifyImage]);

  return (
    <>
      <div>
        {/* ---------------------------------------------------------- */}
        {/* thumbnail */}
        {loading ? (
          <div className="w-full md:h-[55vh] h-[40vh] rounded-lg bg-secondary overflow-hidden relative mb-6 animate-pulse"></div>
        ) : (
          <div className="w-full md:h-[55vh] h-[40vh] rounded-lg bg-secondary overflow-hidden relative mb-6">
            {/* bg-image */}
            <Image
              src={data?.thumbnail}
              alt={data?.title}
              width={500}
              height={500}
              className="relative w-full h-full object-cover z-[0]"
            />
            {/* bg-layer */}
            <div className="absolute top-0 left-0 w-full h-full bg-layer bg-opacity-[0.5] z-[1]"></div>
            {/* bg-content */}
            <div className="absolute top-0 left-0 w-full h-full  z-[2] flex justify-start items-end">
              {/* main-content */}
              <div className="p-5 w-full">
                 {/* gagdets for desktop */}
                 <div className="md:hidden flex justify-start items-center  text-white text-xs  mb-2 ">
                    <article>{data?.views} Views</article>
                    <BsDot size={15} className="text-white" />
                    <article>{data?.comments?.length} Comments</article>
                  </div>
                <article className="md:text-[25px] text-[18px] text-white font-bold mb-5">
                  {data?.title}
                </article>
                {/* other info */}
                <div className="flex justify-between items-center">
                  {/* publiser info */}
                  <div className="flex justify-start items-center gap-3">
                    <div className="w-14 h-14 bg-white rounded-full overflow-hidden border">
                      <Image
                        src={data?.author?.profileImage}
                        alt={data?.author?.name}
                        width={500}
                        height={500}
                        className="relative w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative">
                     
                      <article className="text-white font-semibold cursor-pointer" onClick={() => reDirectToAuthor(data?.author?._id)}>
                        {data?.author?.name}
                      </article>
                      <article className="text-secondary text-xs">
                        {data?.author?.email}
                      </article>
                    </div>
                  </div>
                  {/* gagdets for desktop */}
                  <div className="md:flex hidden justify-end items-center  text-white text-xs">
                    <article>{data?.views} Views</article>
                    <BsDot size={15} className="text-white" />
                    <article>{data?.comments?.length} Comments</article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* content */}
        {loading ? (
          <div className="relative p-5 bg-secondary rounded-lg   h-[100vh]  mb-6"></div>
        ) : (
          <div className="relative p-5 bg-secondary rounded-lg   flex md:flex-row flex-col-reverse justify-end items-start gap-5  mb-6">
            <div className="md:sticky relative top-5 md:w-[5%] md:py-4 md:px-2 rounded-lg md:bg-accent md:bg-opacity-[0.1] flex md:flex-col flex-row md:flex-nowrap flex-wrap md:justify-center items-center gap-4 md:mb-0 mb-5">
              <article className="text-primary text-sm md:hidden block">
                Shares :{" "}
              </article>
              {shareOptions?.map((option, idx) => {
                if (!showMoreShareOpt ? idx < 6 : idx < 10) {
                  return (
                    <div className="cursor-pointer">{option?.component}</div>
                  );
                }
              })}
              <div className="md:mt-1 cursor-pointer flex justify-center items-center">
                {!showMoreShareOpt ? (
                  <div onClick={() => setShowMoreShareOpt(true)}>
                    <GoPlus size={12} className="md:text-primary text-accent" />
                  </div>
                ) : (
                  <div onClick={() => setShowMoreShareOpt(false)}>
                    <LuMinus
                      size={12}
                      className="md:text-primary text-accent"
                    />
                  </div>
                )}
              </div>
            </div>
            {/* content */}
            <div className="md:w-[95%] w-[100%]">
              {/* main content */}
              <div
                dangerouslySetInnerHTML={{ __html: data?.content }}
                onClick={(event) => extractImages(event)}
              />
            </div>
          </div>
        )}

        {loading ? (
          <div className="p-5 h-[10vh] bg-secondary rounded-lg mb-6 animate-pulse">
            {" "}
          </div>
        ) : (
          <div className="p-5 bg-secondary rounded-lg mb-6">
            {/* tags */}
            <div className="w-full">
              <article className="text-primary text-sm mb-2 font-semibold">
                Tags :{" "}
              </article>
              <div className="flex flex-wrap gap-3">
                {data?.tags?.map((tag, idx) => {
                  return (
                    <div
                      key={idx}
                      className="py-2 px-4 bg-accent bg-opacity-[0.1] rounded-lg"
                    >
                      <article className="text-[10px] text-primary">
                        {tag}
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* ---------------------------------------------------------- */}
        {/* posted by */}
        {/* ---------------------------------------------------------- */}
        {loading ? (
          <div className="p-5 h-[20vh] bg-secondary rounded-lg mb-6 animate-pulse">
            {" "}
          </div>
        ) : (
          <div className="p-5 bg-secondary rounded-lg mb-6">
            {/* header */}
            <div className="flex justify-start items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={data?.author?.profileImage}
                  alt={data?.author?.name}
                  width={500}
                  height={500}
                  className="relative w-full h-full object-cover"
                />
              </div>
              <div>
                <article className="text-secondary text-xs font-light ">
                  Posted By
                </article>
                
                  <article className="text-primary text-[16px] font-semibold cursor-pointer hover:text-accent " onClick={() => reDirectToAuthor(data?.author?._id)}>
                    {data?.author?.name}
                  </article>
                
              </div>
              <div className="mx-4 h-[15px] border-r border-primary w-[1px]"></div>
              <div className="flex justify-start items-center gap-2">
                {data?.author?.socialMedia?.twitter && (
                  <Link
                    href={data?.author?.socialMedia?.twitter}
                    target="_blank"
                  >
                    <FaXTwitter
                      size={12}
                      className="text-primary cursor-pointer hover:text-accent"
                    />
                  </Link>
                )}
                {data?.author?.socialMedia?.linkedin && (
                  <Link
                    href={data?.author?.socialMedia?.linkedin}
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin
                      size={12}
                      className="text-primary cursor-pointer hover:text-accent"
                    />
                  </Link>
                )}
                {data?.author?.socialMedia?.instagram && (
                  <Link
                    href={data?.author?.socialMedia?.instagram}
                    target="_blank"
                  >
                    {" "}
                    <FaInstagram
                      size={12}
                      className="text-primary cursor-pointer hover:text-accent"
                    />
                  </Link>
                )}
              </div>
            </div>
            {/* description */}
            <article className="text-sm text-secondary">
              {data?.author?.bio}
            </article>
          </div>
        )}
        {/* ---------------------------------------------------------- */}
        {/* upcomming news */}
        {/* ---------------------------------------------------------- */}
        {!loading && (
          <div className=" p-5 bg-secondary rounded-lg md:flex hidden md:gap-2 gap-4 mb-6">
            {/* previous post */}
            {data?.upcomming_article?.prev_article?.length > 0 && (
              <div className="w-[50%] flex md:flex-row flex-col justify-start md:items-center items-start gap-5  ">
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <Image
                    src={data?.upcomming_article?.prev_article[0]?.thumbnail}
                    alt={data?.upcomming_article?.prev_article[0]?.title}
                    width={500}
                    height={500}
                    className="relative w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <article className="text-xs text-secondary font-light">
                    PREVIOUS POST
                  </article>
                  <div
                    onClick={() =>
                      reDirectToRead(
                        data?.upcomming_article?.prev_article[0]?._id,
                        data?.upcomming_article?.prev_article[0]?.category
                      )
                    }
                  >
                    <Heading
                      label={
                        data?.upcomming_article?.prev_article[0]?.title
                          ?.length > 50
                          ? `${data?.upcomming_article?.prev_article[0]?.title?.slice(
                              0,
                              50
                            )}...`
                          : data?.upcomming_article?.prev_article[0]?.title
                      }
                      custcss="!text-[14px] cursor-pointer hover:!underline hover:text-accent !leading-[20px] mb-1"
                    />
                    <article className="text-[10px] text-secondary">
                      <span className=" uppercase">
                        {data?.upcomming_article?.prev_article[0]?.category}
                      </span>{" "}
                      .{" "}
                      {timeAgo(
                        data?.upcomming_article?.prev_article[0]?.createdAt
                      )}
                    </article>
                  </div>
                </div>
              </div>
            )}
            {/* divider */}
            {data?.upcomming_article?.prev_article?.length > 0 &&
              data?.upcomming_article?.next_article?.length > 0 && (
                <div className="w-[0.5px] h-[40px] border-r border-secondary my-auto md:block hidden"></div>
              )}
            {/* divider */}

            {/* next post */}
            {data?.upcomming_article?.next_article?.length > 0 && (
              <div
                className={`${
                  data?.upcomming_article?.prev_article?.length !== 0
                    ? "w-[50%]"
                    : "w-[100%]"
                } flex  md:flex-row flex-col-reverse justify-start md:items-center items-end gap-4 `}
              >
                <div className="flex-1 flex flex-col items-end">
                  <article className="text-xs text-secondary font-light ">
                    NEXT POST
                  </article>
                  <div
                    onClick={() =>
                      reDirectToRead(
                        data?.upcomming_article?.next_article[0]?._id,
                        data?.upcomming_article?.next_article[0]?.category
                      )
                    }
                  >
                    <Heading
                      label={
                        data?.upcomming_article?.next_article[0]?.title
                          ?.length > 50
                          ? `${data?.upcomming_article?.next_article[0]?.title?.slice(
                              0,
                              50
                            )}...`
                          : data?.upcomming_article?.next_article[0]?.title
                      }
                      custcss="!text-[14px] !text-right cursor-pointer hover:!underline hover:text-accent !leading-[20px] mb-1"
                    />
                    <article className="text-[10px] text-secondary !text-right">
                      <span className=" uppercase">
                        {data?.upcomming_article?.next_article[0]?.category}
                      </span>{" "}
                      .{" "}
                      {timeAgo(
                        data?.upcomming_article?.next_article[0]?.createdAt
                      )}
                    </article>
                  </div>
                </div>
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <Image
                    src={data?.upcomming_article?.next_article[0]?.thumbnail}
                    alt={data?.upcomming_article?.next_article[0]?.title}
                    width={500}
                    height={500}
                    className="relative w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        {/* related article */}
        {loading ? (
          <div className="p-5 h-[40vh] bg-secondary rounded-lg mb-6 animate-pulse">
            {" "}
          </div>
        ) : (
          <div className="mb-6">
            <RelatedArticle data={data?.related_article} />
          </div>
        )}
        {/* comment */}
        <div className="mb-6">
          <ArticleComments />
        </div>
        {/* user comments */}
        {!loading && (
          <div className="mb-6">
            <ArticleUserComments />
          </div>
        )}
      </div>
      {/* Magnify Images */}
      {magnifyImage && (
        <div
          className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-[0.8] z-[10000]"
          onClick={() => setMagnifyImage(false)}
        >
          <div
            className="absolute top-5 right-5 z-10"
            onClick={() => setMagnifyImage(false)}
          >
            <IoCloseSharp size={20} className=" cursor-pointer text-white " />
          </div>
          {!magnifyImageSrc ? (
            <GlobalLoading />
          ) : (
            <>
              {/* image close icon */}
              <Image
                src={magnifyImageSrc}
                alt="Article Image"
                width={500}
                height={500}
                className="relative h-full w-auto object-contain z-0"
                onClick={(event) => event.stopPropagation()}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Article;


