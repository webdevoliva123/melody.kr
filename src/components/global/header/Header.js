import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import DefaultWidgets from "./widgets/DefaultWidgets";
import NewsWidgets from "./widgets/NewsWidgets";

const Header = () => {
  const router = useRouter();

  const [sticky, setSticky] = useState(false);
  const [melodyTheme, setMelodyTheme] = useState(null);
  const links = [
    {
      id: "blogs",
      name: "Blogs",
      subCategory: false,
    },
    {
      id: "kNews",
      name: "k-News",
      subCategory: false,
    },
    {
      id: "music",
      name: "Music",
      subCategory: true,
    },
    {
      id: "kprofile",
      name: "K-Profile",
      subCategory: true,
    },
    {
      id: "shopping",
      name: "Shopping",
      subCategory: true,
    },
    {
      id: "mfamily",
      name: "Malody Family",
      subCategory: false,
    },
  ];

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

  // switch right right widgets
  const RigthWidgets = () => {
    switch (router?.pathname) {
      case "/":
        return <DefaultWidgets />;
      case "/k_news":
        return <NewsWidgets />
      default:
        return <DefaultWidgets />;
    }
  };

  return (
    <div
      className={`${
        sticky
          ? "fixed lg:max-w-[1200px] lg:w-[1200px] w-full mx-auto top-0 lg:left-auto left-0 ease-in duration-500"
          : "relative"
      }  bg-secondary p-5  h-[80px] rounded-lg flex justify-between items-center lg:mb-10 mb-5 z-[1000]`}
    >
      {/* Left Section */}
      <div className="flex justify-start items-center lg:gap-4">
        {/* menu */}
        <div className="lg:block hidden">
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
        {router?.pathname === "/" && <div className="lg:flex justify-start items-center gap-5 hidden ">
          {links?.map((link, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-start items-center gap-1 text-sm text-primary hover:text-accent cursor-pointer"
              >
                <span>{link.name}</span>
                {link.subCategory && <BiChevronDown size={10} />}
              </div>
            );
          })}
        </div>}
      </div>
      {/* right section */}
      <RigthWidgets />
    </div>
  );
};

export default Header;
