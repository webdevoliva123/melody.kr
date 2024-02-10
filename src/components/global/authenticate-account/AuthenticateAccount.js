import React, { useCallback, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdClose } from "react-icons/io";

import Signin from "./cards/Signin";
import Signup from "./cards/Signup";

const AuthenticateAccount = ({ open, setAuthenticateUser }) => {
  const swiperRef = useRef();

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    if(open){
      window.document.body.style.overflowY = 'hidden';
    }else{
      window.document.body.style.overflowY = 'auto';
    }
  },[open])

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center bg-black bg-opacity-[0.5]`}
    >
      <div className="relative md:w-[85%] w-full md:h-[85%] h-full bg-secondary shadow-sm flex justify-start items-center">
        {/* left section*/}
        <div className="relative md:flex-[0.3] flex-1 w-[30%] h-full">
          <Swiper
            slidesPerView={1}
            className="relative md:flex-[0.3] flex-1 w-[100%] h-[100%]"
            allowTouchMove={false}
            ref={swiperRef}
          >
            <SwiperSlide className="w-full h-full p-10 overflow-y-auto melody-scroll">
              <Signin handleNext={handleNext} />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full p-10 overflow-y-auto melody-scroll">
              <Signup handlePrev={handlePrev} />
            </SwiperSlide>
          </Swiper>
          <div id="signInButton"></div>
        </div>

        {/* rigth section  */}
        <div className="md:flex-[0.7] md:block hidden w-full h-full ">
          <video
            src="https://res.cloudinary.com/dkz1pnb2b/video/upload/v1707599358/harsha_agarwal_raw-video-cfr_riverside_0002_qhv9x4.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          ></video>
        </div>

        {/* close btn */}
        <div
          className="absolute md:top-5 top-10  md:right-5 right-10 cursor-pointer"
          onClick={() => setAuthenticateUser(false)}
        >
          <IoMdClose size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default AuthenticateAccount;
