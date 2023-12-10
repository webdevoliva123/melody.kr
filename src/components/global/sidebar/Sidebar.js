"use client";
import trendingNews from "@/json/highlightTrendingNews.json";
import { sibarLinks } from "@/constant/links";
import Heading from "@/elements/Heading";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoClose, IoChevronDownOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const SidebarLink = ({ link }) => {
  const [subcatOpen, setSubCatOpen] = useState(false);
  return (
    <div className="relative w-full mb-4" onClick={() => setSubCatOpen(!subcatOpen)}>
      <div
        className={`w-full flex justify-between items-center hover:text-accen cursor-pointer ${
          subcatOpen && "mb-2"
        }`}
      >
        <Link href={link?.url}>
          <article className="text-sm text-primary cursor-pointer">{link?.name}</article>
        </Link>
        {link?.subcategory && <IoChevronDownOutline size={15} className="text-primary" />}
      </div>
      {link?.subcategory && (
        <div
          className={`${
            subcatOpen ? "block" : "hidden"
          } ease-linear duration-200 p-3`}
        >
          {link?.subcategory?.map((sublink, idx) => {
            return (
              <Link key={idx} href={sublink?.url}>
                <article className={`text-xs text-primary cursor-pointer ${(link?.subcategory?.length -1 ) !== idx && 'mb-4'}`}>
                   / {sublink?.name}
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ open, setSidebarOpen }) => {
  const [melodyTheme, setMelodyTheme] = useState(null);
  const router = useRouter()
  useEffect(() => {
    if (open) {
      const body = window.document?.querySelector("body");
      body.style.overflowY = "hidden";
    } else {
      const body = window.document?.querySelector("body");
      body.style.overflowY = "auto";
    }
  }, [open]);
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const currentDataTheme = mutation.target.getAttribute("data-theme");
          setMelodyTheme(currentDataTheme);
        }
      }
    });

    // Define the target element to observe
    const targetElement = document.getElementById("root_html"); // Replace with your actual target element

    // Configure the observer to watch for changes to the 'data-theme' attribute
    const observerConfig = {
      attributes: true,
      attributeFilter: ["data-theme"],
    };

    // Start observing the target element
    observer.observe(targetElement, observerConfig);

    // Cleanup when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    setSidebarOpen(false)
  },[router])
  return (
    <div
      className={`fixed top-0 ${
        open ? "left-0" : "-left-[100%]"
      } w-full h-full ${
        open && "backdrop-blur"
      } z-[1000] ease-linear duration-200`}
      onClick={() => setSidebarOpen(false)}
    >
      <div
        className="md:w-[325px] h-[100vh] bg-secondary overflow-y-auto  p-5 melody-scroll"
        onClick={(event) => event.stopPropagation()}
      >
        {/* header */}
        <div className="flex justify-between items-center mb-6">
          {/* logo */}
          <div>
            {/* logo */}
            {!melodyTheme ? (
              <div
                className="w-[120px] h-[50px] mr-5"
                onClick={() => router.push("/")}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1697908129/Prosperous_Diwali_8_ktkxvh.png"
                  }
                  alt="web_logo"
                  width={500}
                  height={500}
                  className="relative w-full h-full object-contain"
                />
              </div>
            ) : melodyTheme === "dark" ? (
              <div
                className="w-[120px] h-[50px] mr-5"
                onClick={() => router.push("/")}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1697970018/Prosperous_Diwali_10_tciitn.png"
                  }
                  alt="web_logo"
                  width={500}
                  height={500}
                  className="relative w-full h-full object-contain"
                />
              </div>
            ) : (
              <div
                className="w-[120px] h-[50px] mr-5"
                onClick={() => router.push("/")}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1697908129/Prosperous_Diwali_8_ktkxvh.png"
                  }
                  alt="web_logo"
                  width={500}
                  height={500}
                  className="relative w-full h-full object-contain"
                />
              </div>
            )}
          </div>
          {/* close btn */}
          <div onClick={() => setSidebarOpen(false)}>
            <IoClose
              size={22}
              className="text-primary hover:text-accent cursor-pointer "
            />
          </div>
        </div>
        {/* links */}
        <div className="w-full p-2 mb-6">
          {sibarLinks?.map((link, idx) => {
            return <SidebarLink key={idx} link={link} />;
          })}
        </div>
        {/*  */}
        <div className="w-full">
        <Heading label={'Pouplar Article'} htype={2} custcss="mb-4"/>
        <div className='w-full'>
            {
                trendingNews?.map((news,idx) => {
                    return <div key={idx} className='w-full p-2 hover:bg-primary rounded-lg cursor-pointer mb-2 flex justify-start items-center gap-4' title={news?.title}>
                        <Image src={news?.thumbnail} alt={news?.title} width={500} height={500} className='relative w-[60px] h-[60px] rounded-lg object-cover overflow-hidden' />
                        <div className='flex-[1] relative'>
                            <article className='text-[12px] font-semibold text-primary'>{news?.title?.length > 50 ? `${news?.title?.slice(0,50)}...` : news?.title }</article>
                            <article className='text-[10px] text-secondary'>{news?.created_At}</article>
                        </div>
                    </div>
                })
            }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
