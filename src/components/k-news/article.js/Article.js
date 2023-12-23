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
import { IoCloseSharp } from "react-icons/io5";
import GlobalLoading from "@/components/global/loadings/globalLoading";

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

  const data = `
    <article class="text-primary">On December 22, KST, <strong>BTS</strong>‘s <strong>J-Hope</strong> posted some new pictures of him enjoying his military vacation on his <strong>Instagram</strong>.</article>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703350367/bCjJzjzTsb08EQVMIGBWNAlSKR5M7QKsyZHqBxg0Hi-KYGR5M4SD6123x65UlJB_lb25x3NDC3cjxKiAsgJcuMP6iSPxRkxM6kF9sM2h0p8MA_wP_w1600-rj-l80-nu-e365_s4ycu1.jpg" class="article_post"/>
    <article class="text-primary">The rapper was seen dining at a fancy restaurant called Woori, and in the caption, he tagged the luxury brand <strong> Louis Vuitton </strong>, saying, “I enjoyed the meal.” </article>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703350882/ogvw5LwmYqIj4a_kD-5LYYn-h5AroDFnk673u8QtRaXXdYoSCeW5YmaMmHF4CV_u5q0YluByoocmDuHfv5mKIV9YQzfvG0pTVr4WRcRRFdGT6Bo_w1600-rj-l80-nu-e365_nuy778.jpg" class="article_post"/>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703350940/hB22i6I0dOPsIdj-v2CZ4VYGS7iRCYC3BpiXA-5i08H6H7ztYsfXS3XjnPQCvRyAOgN_AJpcJoxwjh0dAix6sAjsV-AnO1W2l_hwYEJx2Ij0bB4l_w1600-rj-l80-nu-e365_ons1mi.jpg" class="article_post"/>
    <article class="text-primary">Woori is actually a pop-up restaurant by Louis Vuitton, the fourth of its kind in Seoul by the brand. Given that J-Hope is a global ambassador of the brand, it is possible that he went there for a meal at the house’s invitation. Regardless, here’s a quick run down of this unique eatery:</article>
    <article class="text-primary mt-4 mb-2 text-lg"><strong>Location:</strong></article>
    <article class="text-primary">Woori is located in the affluent neighborhood of Cheongdam-dong, at the flagship store of Louis Vuitton Maison Seoul. The interiors are designed by the popular architect <strong> Frank Gehry</strong>.</article>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703351144/gPNLIpEKDBFVS3kvVsBtJkyf-Bt2RjlmVAHyodYFmXjj0PqbhGnvB0Wygm-u85hhJPjDOQqn9323U4UqNPR4Jhlmn2aAsOJR6X8i8EwbF1VWjjk_w1600-rj-l80-nu-e365_fexgok.jpg" class="article_post"/>
    <article class="text-primary mt-4 mb-2 text-lg"><strong>Timeline:</strong></article>
    <article class="text-primary">The restaurant opened its doors on November 17, 2023, and will be serving guests till February 8, 2024.</article>
    <article class="text-primary mt-4 mb-2 text-lg"><strong>The Chefs:</strong></article>
    <article class="text-primary">Michelin-star chef Cho Hee Sook, who was named “Asia’s Best Female Chef,” collaborates with four highly esteemed local chefs, Cho Eun Hee, Park Seong Baem, Kang Mingoo, and Eunji Lee , at this restaurant. All four of them belong to other revered restaurants in Seoul, namely Hansikgonggan, Onijum, Mingles, and Lysée, respectively.</article>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703351409/kw-YO35QdNFU44nP9OE7YfXV_BBUHahhiFZe1hl5zEB9px0YqSVfFXc21fd1PxYWzcKOosoL7FR9fU4vGQWoMFxO1huYy2l9XMwkmwfHkEqS7BsD_w1600-rj-l80-nu-e365_ugalda.jpg" class="article_post"/>
    <article class="text-primary mt-4 mb-2 text-lg"><strong>The Food:</strong></article>
    <article class="text-primary">Woori aims to offer a Korean fine dining experience with culinary creations that “put Korean culture, history, and national pride at its forefront.” So, all the food served at the restaurant is hansik, or traditional Korean food, including items like mandu, pine nut porridge, yukhoe, and so on.</article>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703352307/xysxXP0qqfqaRTBbUft0g5HUy-ZU8vSfMIMUlwpx-3CJtKwqDt88vSQScIvV7dgP0WgsC1ZIZYl-UoW-eJDZ2sFY7eVzvesOFjMGtGnX25u2vIY_w1600-rj-l80-nu-e365_u7t7eh.jpg" class="article_post"/>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703352354/Eywa1fRvBQz_UdX07s2UFZJq6HuZkH2m3H8XO68EkkgCtv7LGUidaG5ECslArmbzGLTq1GsceEEHmEFLBYr6YN1wiyit8yVIgBjKBw7cbHquofg_w1600-rj-l80-nu-e365_atkygf.jpg" class="article_post"/>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703352391/dKaCsyoMUHrUfN6d-bA4ldqeaNGkplBd4IgI9-emXeHnbL4dq2nc4tBhmcpzq6ie8wTi5Of4APyMKBZ0RMhABsjrIscEif1lTpmwOAnxT7pSSAE_w1600-rj-l80-nu-e365_dvgih8.jpg" class="article_post"/>
    <article class="text-primary mt-4 mb-2 text-lg"><strong>Prices:</strong></article>
    <article class="text-primary">The restaurant has shared two menus each for lunch and dinner. While the lunch menu ranges between ₩260,000 KRW (about $201 USD) to ₩280,000 KRW (about $216 USD), the dinner menu is between ₩340,000 KRW (about $262 USD) to ₩360,000 KRW (about $278 USD).</article>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703352468/4QfcLXxZz3u2icL7mbqU3IgIo_mZfveoySGtS2azSy29HsKhxj6DPh5BmnVsyPhAXMtMDKUY1I6YUEDM0M1mZFmO0L12Vkzf-ZRtdhpIQ7yvq1g_w1600-rj-l80-nu-e365_rgxnqf.jpg" class="article_post"/>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703352496/G7_ICGrje07KT1RKfRsw6qopNaNALdKr-oPrj5IzUVcAVlDX0e9epYGj0V-HOf0WnQE8EgAW0uzJCSI_8ILiAU_aJClBnfFoauQipalqIYNnEFi6_w1600-rj-l80-nu-e365_d8jml6.jpg" class="article_post"/>
    <image src="https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703352523/N4hSemDy0RfwtqOQIVBvnQF6nd28LZeNw0fAUhsICXGrtoYZ1GjXOSJ7u5Y60S_6imQBjyAXTn9vijnQmPuAGzfiouyrHgpactNL469m1AjUVfM_w1600-rj-l80-nu-e365_ricx7c.jpg" class="article_post"/>
  `;

  const tags = ["Music", "Milatry", "BTS", "Junkook", "Army"];

  return (
    <>
      <div>
        {/* ---------------------------------------------------------- */}
        {/* thumbnail */}
        <div className="w-full h-[55vh] rounded-lg bg-secondary overflow-hidden relative mb-6">
          {/* bg-image */}
          <Image
            src={`https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703349162/e2743s4A-6NRSBdekV4qyRNJL_iJbwXPbrk8Yx9L6vPHRs3ZSRZo5tlgnWywnUngokrONDCnXua1b3S6ixryAvLhAOgk-vrtQM9k37bP2EYjeTY_w1200-rj-l80-nu-e365_bugilf.jpg`}
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
                BTS J-Hope’s Latest Instagram Update Features “Woori” — Here’s
                All You Need To Know About The Place
              </article>
              {/* other info */}
              <div className="flex justify-between items-center">
                {/* publiser info */}
                <div className="flex justify-start items-center gap-3">
                  <div className="w-14 h-14 bg-white rounded-full overflow-hidden border">
                    <Image
                      src={`https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703349257/ePe9mnFJAEpxhreJCg0J7ufusi40QtMmlM4_fvdIUxYxk6TU8ZzVLShN2FGpG1iR8bdidpk2jS0WHGWH0kM37bmkIZXECPRdY3tEN0gcPlm9F_yR_w192-h192-pp-rj-e365_rxompr.jpg`}
                      alt="Serah S. Cherrie"
                      width={500}
                      height={500}
                      className="relative w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative">
                    <article className="text-white font-semibold cursor-pointer">
                      Serah S. Cherrie
                    </article>
                    <article className="text-secondary text-xs">
                      serah.s.cherrie​@melodykr.com{" "}
                    </article>
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
        <div className="relative p-5 bg-secondary rounded-lg   flex md:flex-row flex-col-reverse justify-end items-start gap-5  mb-6">
          <div className="md:sticky relative top-5 md:w-[5%] md:py-4 md:px-2 rounded-lg md:bg-accent md:bg-opacity-[0.1] flex md:flex-col flex-row md:flex-nowrap flex-wrap md:justify-center items-center gap-4">
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
                  <LuMinus size={12} className="md:text-primary text-accent" />
                </div>
              )}
            </div>
          </div>
          {/* content */}
          <div className="w-[95%]">
            
            {/* main content */}
            <div
              dangerouslySetInnerHTML={{ __html: data }}
              onClick={(event) => extractImages(event)}
            />
          </div>
        </div>

        <div className="p-5 bg-secondary rounded-lg mb-6">
          {/* tags */}
          <div className="w-full">
            <article className="text-primary text-sm mb-2 font-semibold">
              Tags :{" "}
            </article>
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
        {/* ---------------------------------------------------------- */}
        {/* posted by */}
        {/* ---------------------------------------------------------- */}
        <div className="p-5 bg-secondary rounded-lg mb-6">
          {/* header */}
          <div className="flex justify-start items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={`https://res.cloudinary.com/dmnhp9f8l/image/upload/v1703349257/ePe9mnFJAEpxhreJCg0J7ufusi40QtMmlM4_fvdIUxYxk6TU8ZzVLShN2FGpG1iR8bdidpk2jS0WHGWH0kM37bmkIZXECPRdY3tEN0gcPlm9F_yR_w192-h192-pp-rj-e365_rxompr.jpg`}
                alt="Serah S. Cherrie"
                width={500}
                height={500}
                className="relative w-full h-full object-cover"
              />
            </div>
            <div>
              <article className="text-secondary text-xs font-light ">
                Posted By
              </article>
             <Link href={'/news/author/auth_fhb32o9'}>
             <article className="text-primary text-[16px] font-semibold cursor-pointer hover:text-accent ">
                Serah S. Cherrie
              </article>
             </Link>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iure
          ratione asperiores debitis quaerat adipisci ad beatae ipsam unde sit
          optio quidem eius et, cumque ex omnis, hic sunt? Minima. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Aliquam, repellendus?
          Suscipit reiciendis quis quo ab fugit.
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
                  custcss="!text-[14px] cursor-pointer hover:!underline hover:text-accent"
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
                  custcss="!text-[14px] !text-right cursor-pointer hover:!underline hover:text-accent"
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
