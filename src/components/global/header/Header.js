import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { months } from "@/constant/dates";
import { RiSearch2Line } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { defaultLinks, k_NewsLinks } from "@/constant/links";
import Link from "next/link";
import Sidebar from "../sidebar/Sidebar";
import Searchbar from "../searchbar/Searchbar";

const Header = () => {
  const router = useRouter();
  const today = new Date();
  const [sticky, setSticky] = useState(false);
  const [melodyTheme, setMelodyTheme] = useState(null);
  const [currentStateLink, setCurrentStateLink] = useState([]);
  const [openSidebar,setOpenSidebar] = useState(false)
  const [openSearchbar,setOpenSearchbar] = useState(false)

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
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  useEffect(() => {
    switch (router?.pathname?.split('/')[1]) {
      case "":
        return setCurrentStateLink(defaultLinks);
      case "news":
        return setCurrentStateLink(k_NewsLinks);
      default:
        return setCurrentStateLink(defaultLinks);
    }
  }, [router]);

  const openSidebarHandler = () => {
    setOpenSearchbar(false)
    return setOpenSidebar(true)
  }

  const openSearchbarHandler = () => {
    setOpenSidebar(false)
    return setOpenSearchbar(true)
  }

  return (
    <>
    {/* main header */}
    <div
      className={`${
        sticky && !router.pathname.includes('article')
          ? "fixed lg:max-w-[1200px] lg:w-[1200px] w-full mx-auto top-0 lg:left-auto left-0 ease-in duration-500"
          : "relative"
      }  bg-secondary p-5  h-[80px] rounded-lg flex justify-between items-center lg:mb-6 mb-5 z-[1000]`}
    >
      {/* Left Section */}
      <div className="flex justify-start items-center lg:gap-4">
        {/* menu */}
        <div className="lg:block hidden" onClick={openSidebarHandler}>
          <BsFillGridFill
            size={30}
            className="text-primary hover:text-accent cursor-pointer ease-in duration-150"
          />
        </div>
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
        {/* menulinks */}
        <div className="lg:flex justify-start items-center gap-5 hidden ">
          {currentStateLink?.map((link, idx) => {
            return (
              <Link key={idx} href={link?.url}>
                <div className="flex justify-start items-center gap-1 text-sm text-primary hover:text-accent cursor-pointer">
                  <span>{link.name}</span>
                  {link.subCategory && <BiChevronDown size={10} />}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* right section */}
      <div className="flex justify-end items-center gap-4">
        {/* small icons */}
        <div className="flex justify-center items-center  gap-3">
          <HiOutlineShoppingCart
            size={20}
            className="text-primary hover:text-accent cursor-pointer ease-in duration-150"
          />
          <FaXTwitter
            size={20}
            className="md:block hidden text-primary hover:text-accent cursor-pointer ease-in duration-150"
          />
          <div onClick={openSearchbarHandler}>
          <RiSearch2Line
            size={20}
            className="text-primary hover:text-accent cursor-pointer ease-in duration-150"
          />
          </div>
          {true ? <div className="text-white  bg-purple  py-2 px-3 text-xs rounded-full cursor-pointer flex gap-1 justify-center items-center shadow-md ease-in duration-150"> <FaUser
            size={12}
            className="text-white  cursor-pointer "
          />  SIGN IN</div> :  <FaUser
            size={20}
            className="text-primary hover:text-accent cursor-pointer ease-in duration-150"
          />}
        </div>
        {/* time */}
        <div className=" h-[40px] pl-[20px] ml:[10px] border-l lg:flex justify-center items-center gap-2  hidden">
          <article className="text-[35px] text-secondary">
            {today.getDate()}
          </article>
          <div className="flex flex-col justify-end items-start -mb-[5px] text-sm text-secondary font-normal">
            <span className="block font-thin text-[10px]">
              {months[today.getMonth()].short_name}
            </span>
            <span className="block font-thin text-[10px]">
              {today.getFullYear()}
            </span>
          </div>
        </div>
        {/* menu */}
        <div className="lg:hidden block" onClick={openSidebarHandler}>
          <BsFillGridFill
            size={30}
            className=" text-primary hover:text-accent cursor-pointer"
          />
        </div>
      </div>
    </div>
    {/* main sidebar */}
    <Sidebar open={openSidebar} setSidebarOpen={setOpenSidebar} />
    {/* main searchbar */}
    <Searchbar open={openSearchbar} setSearchbarOpen={setOpenSearchbar} />
    </>
  );
};

export default Header;
