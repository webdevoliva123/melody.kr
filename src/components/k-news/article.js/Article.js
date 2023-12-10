import Heading from "@/elements/Heading";
import Image from "next/image";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaRedditAlien,
} from "react-icons/fa6";
import trendingNews from "@/json/highlightTrendingNews.json";
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

const Article = () => {
  const [showMoreShareOpt, setShowMoreShareOpt] = useState(false);
  const data = `<p dir="ltr" class="text-secondary">
  On November 21, BIGHIT MUSIC officially announced that BTS‘s RM, Jimin, V,
  and Jungkook were preparing to fulfill their mandatory military duties and
  had initiated the military enlistment process.
</p>
<br/>
<p dir="ltr" class="text-secondary">
  On December 4, the company provided an update on the process, confirming
  that the members were moving forward with their respective enlistment
  procedures and preparing for their enlistment dates.
</p>
<br/><br/>
<p dir="ltr">
  <img
      src="https://lh7-us.googleusercontent.com/sR2k5sy2cr_htnvIcTcIrIRCJ5hh9v1mgQibpau4WPeKA1OQYqiFi5vhoBu7BfKU3ZycuJ8DGMIhaEhR4cNZfN6SlLaeRYaR7l-Z64vDxYEGxjJmR787SIfFAoYLzaI4t1oNx7DYS7wcfqy7Tbh71xI"
      width="100%"
      height="557"
  />
</p>
<br/><br/>
<p dir="ltr" class="text-primary">
  RM, Jimin, V and Jung Kook will fulfill their required time with the
  military by enlisting in the army. RM and V will be enlisting according to
  their respective procedures, while Jimin and Jung Kook are scheduled to
  enlist together. Please note that there will be no official event on the day
  of their entry.
</p>
<br/>
<p dir="ltr" class="text-primary">
  — BIGHIT MUSIC
</p>
<br/>
<p dir="ltr" class="text-secondary">
  Ahead of their upcoming enlistment, the four BTS members hosted a Weverse
  live to greet ARMYs and say their official “goodbye for now,” spending time
  catching up with fans while enjoying time with each other.
</p>
<br/><br/>
<p dir="ltr">
  <img
      src="https://lh7-us.googleusercontent.com/cr8z-cf5MH61UeCSCOX9i0p_Tq98Xgm2E-pZnNRCYgRXMm_KEc9m3oYUQkZUbbg6jctgMo8xdwQICTSH6HNl8Yh5XzKMSG_ndDPoqUgaU74yAkbuuB6BB0hWRNIL-LdQm44GMy2wZVg0r5aYzahFinc"
      width="100%"
      height="356"
  />
</p>
<br/><br/>
<p dir="ltr" class="text-secondary">
  During the live, the members assured ARMYs they would return happy and
  healthy and they had one final request for fans before they enlisted.
</p>
<br/>
<p dir="ltr" class="text-secondary">
  BTS’s Jin, J-Hope, and Suga are currently serving their mandatory military
  service, and for each of their enlistments, BIGHIT MUSIC and the BTS members
  kindly asked that fans refrain from visiting the enlistment ceremony.
</p>
<br/>
<p dir="ltr" class="text-secondary">
  The four remaining civilian members asked the same of fans for their
  upcoming enlistments, again asking people to respect the privacy of their
  fellow recruits and their families.
</p>
<br/><br/>
<div class="twitter-tweet twitter-tweet-rendered" style="display: flex; max-width: 550px; width: 100%; margin-top: 10px; margin-bottom: 10px;"><iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 405px; height: 704px; display: block; flex-grow: 1;" title="X Post" src="https://platform.twitter.com/embed/Tweet.html?creatorScreenName=Koreaboo&amp;dnt=true&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1732050066414993809&amp;lang=en&amp;origin=https%3A%2F%2Fwww.koreaboo.com%2Fnews%2Fbts-kneel-knees-beg-army-not-come-military-enlistment-location%2F&amp;sessionId=693c27d197e2f1523c23979e3567a8528d8cba5a&amp;siteScreenName=Koreaboo&amp;theme=light&amp;widgetsVersion=b2c2611296916%3A1702048662315&amp;width=550px" data-tweet-id="1732050066414993809"></iframe></div>
<br/><br/>
<p dir="ltr" class="text-secondary">
  After asking fans to promise to respect their wishes and not visit their
  enlistment ceremonies, RM and V kneeled to plead with people not to visit,
  showing the seriousness of their request for privacy and respect for
  themselves and their fellow recruits.
</p>
<br/>
<p dir="ltr" class="text-secondary">
  International ARMYs responded to a viral clip of the moment during their
  livestream, with many hoping that people will respect the members’
  boundaries and wishes.
</p>
<div>
  <br/>
</div>`;

  const tags = ["Music", "Milatry", "BTS", "Junkook", "Army"];

  return (
    <div>
      {/* ---------------------------------------------------------- */}
      {/* thumbnail */}
      <div className="w-full h-[55vh] rounded-lg bg-secondary overflow-hidden relative mb-6">
        {/* bg-image */}
        <Image
          src={`https://res.cloudinary.com/dkz1pnb2b/image/upload/v1702138745/20231209060218_Jungkook_yedgms.jpg`}
          alt="Watch: BTS’s Jungkook Surprises With Emotional Visualizer For “Hate You” Ahead Of Enlistment"
          width={500}
          height={500}
          className="relative w-full h-full object-cover z-[0]"
        />
        {/* bg-layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-layer bg-opacity-[0.5] z-[1]"></div>
        {/* bg-content */}
        <div className="absolute top-0 left-0 w-full h-full  z-[2] flex justify-start items-end">
          {/* main-content */}
          <div className="p-5">
            <article className="md:text-[25px] text-[18px] text-white font-bold mb-5">
              BTS’s Jungkook Once Again Teases Fans With His Shaved Head Ahead
              Of His Military Enlistment
            </article>
            {/* other info */}
            <div className="flex justify-between items-center">
              {/* publiser info */}
              <div className="flex justify-start items-center gap-3">
                <div className="w-14 h-14 bg-white rounded-full overflow-hidden">
                  <Image
                    src={`https://res.cloudinary.com/dkz1pnb2b/image/upload/v1701623888/c2dabff885b103a8a248d33de5d8cebc4ae7ca81_254x191_vmlkj6.jpg`}
                    alt="Eunna Lee"
                    width={500}
                    height={500}
                    className="relative w-full h-full object-cover"
                  />
                </div>
                <div className="relative">
                  <article className="text-white font-semibold cursor-pointer">
                    Eunna Lee
                  </article>
                  <article className="text-accent text-xs">Dec 9, 2023</article>
                </div>
              </div>
              {/* gagdets */}
              <div className="flex justify-end items-center  text-white text-xs">
                <article>4.5k Views</article>
                <BsDot size={15} className="text-white" />
                <article>200 Comments</article>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="relative p-5 bg-secondary rounded-lg  md:h-[150vh] flex md:flex-row flex-col-reverse justify-end items-start gap-5 overflow-y-auto no-scrollbar mb-6">
        <div className="md:sticky relative top-0 md:w-[5%] md:py-4 md:px-2 rounded-lg md:bg-accent md:bg-opacity-[0.1] flex md:flex-col flex-row md:flex-nowrap flex-wrap md:justify-center items-center gap-4">
          <article className="text-primary text-sm md:hidden block">
            Shares :{" "}
          </article>
          {shareOptions?.map((option, idx) => {
            if (!showMoreShareOpt ? idx < 6 : idx < 10) {
              return <div className="cursor-pointer">{option?.component}</div>;
            }
          })}
          <div className="md:mt-1 cursor-pointer flex justify-center items-center">
            {!showMoreShareOpt ? (
              <div onClick={() => setShowMoreShareOpt(true)}>
                <GoPlus size={12} className="md:text-primary text-accent" />
              </div>
            ) : (
              <div onClick={() => setShowMoreShareOpt(false)}>
                <LuMinus size={12} className="md:text-primary text-accent" />
              </div>
            )}
          </div>
        </div>
        {/* content */}
        <div className="w-[95%]">
          <div className="p-5 bg-primary rounded-lg mb-6">
            <Heading label={"SUMMARY"} htype={1} custcss="mb-4" />
            <article className="text-primary">
              BTS, the biggest K-pop act, will be on hiatus through 2024 and
              much of 2025 after four band members enlisted in the Korean
              military. They follow Jin, J-Hope, and Suga who have already begun
              their mandatory military service. The band hopes to be reunited in
              2025. All seven members of the band have entered the Billboard
              charts on their own. The seven-member band recently renewed its
              contracts with Big Hit Music in anticipation of renewed group
              activity after the enforced hiatus. All able-bodied men are
              required to serve in the military for 18 to 21 months.
            </article>
          </div>
          {/* main content */}
          <div dangerouslySetInnerHTML={{ __html: data }} />
          {/* tags */}
          <div className="w-full">
            <article className="text-primary text-sm mb-4">Tags : </article>
            <div className="flex flex-wrap gap-3">
              {tags?.map((tag, idx) => {
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
      </div>
      {/* ---------------------------------------------------------- */}
      {/* posted by */}
      {/* ---------------------------------------------------------- */}
      <div className="p-5 bg-secondary rounded-lg mb-6">
        {/* header */}
        <div className="flex justify-start items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={`https://res.cloudinary.com/dkz1pnb2b/image/upload/v1701623888/c2dabff885b103a8a248d33de5d8cebc4ae7ca81_254x191_vmlkj6.jpg`}
              alt="Eunna Lee"
              width={500}
              height={500}
              className="relative w-full h-full object-cover"
            />
          </div>
          <div>
            <article className="text-secondary text-xs font-light ">
              Posted By
            </article>
            <article className="text-primary text-[16px] font-semibold cursor-pointer hover:text-accent ">
              Eunna Lee
            </article>
          </div>
          <div className="mx-4 h-[15px] border-r border-primary w-[1px]"></div>
          <div className="flex justify-start items-center gap-2">
            <FaXTwitter
              size={12}
              className="text-primary cursor-pointer hover:text-accent"
            />
            <FaLinkedin
              size={12}
              className="text-primary cursor-pointer hover:text-accent"
            />
            <FaInstagram
              size={12}
              className="text-primary cursor-pointer hover:text-accent"
            />
          </div>
        </div>
        {/* description */}
        <article className="text-sm text-secondary">
          I have a personal philosophy in life: If somebody else can do
          something that I’m doing, they should do it. And what I want to do is
          find things that would represent a unique contribution to the world
        </article>
      </div>
      {/* ---------------------------------------------------------- */}
      {/* upcomming news */}
      {/* ---------------------------------------------------------- */}
      <div className="p-5 bg-secondary rounded-lg flex md:gap-2 gap-4 mb-6">
        {/* previous post */}
        <div className="w-[50%] flex md:flex-row flex-col justify-start md:items-center items-start gap-5  ">
          <div className="w-20 h-20 rounded-lg overflow-hidden">
            <Image
              src={trendingNews[0]?.thumbnail}
              alt={trendingNews[0]?.title}
              width={500}
              height={500}
              className="relative w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-start">
            <article className="text-xs text-secondary font-light">
              PREVIOUS POST
            </article>
            <Link href={`/news/article/${trendingNews[2]?.id}`}>
              <Heading
                label={
                  trendingNews[0]?.title?.length > 50
                    ? `${trendingNews[0]?.title?.slice(0, 50)}...`
                    : trendingNews[0]?.title
                }
                htype={2}
                custcss="cursor-pointer hover:!underline hover:text-accent"
              />
            </Link>
          </div>
        </div>
        {/* divider */}
        <div className="w-[0.5px] h-[40px] border-r border-secondary my-auto md:block hidden"></div>
        {/* divider */}

        {/* next post */}
        <div className="w-[50%] flex  md:flex-row flex-col-reverse justify-start md:items-center items-end gap-4">
          <div className="flex-1 flex flex-col items-end">
            <article className="text-xs text-secondary font-light ">
              NEXT POST
            </article>
            <Link href={`/news/article/${trendingNews[1]?.id}`}>
              <Heading
                label={
                  trendingNews[1]?.title?.length > 50
                    ? `${trendingNews[1]?.title?.slice(0, 50)}...`
                    : trendingNews[1]?.title
                }
                htype={2}
                custcss="!text-right cursor-pointer hover:!underline hover:text-accent"
              />
            </Link>
          </div>
          <div className="w-20 h-20 rounded-lg overflow-hidden">
            <Image
              src={trendingNews[1]?.thumbnail}
              alt={trendingNews[1]?.title}
              width={500}
              height={500}
              className="relative w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* related article */}
      <div className="mb-6">
        <RelatedArticle />
      </div>
      {/* comment */}
      <div className="mb-6">
        <ArticleComments />
      </div>
      {/* user comments */}
      <div className="mb-6">
        <ArticleUserComments />
      </div>
    </div>
  );
};

export default Article;
