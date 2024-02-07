import React, { useCallback, useRef } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/elements/Button";
import { IoMdClose } from "react-icons/io";

const AuthenticateAccount = ({ open, setAuthenticateUser }) => {

  const swiperRef = useRef()
  // googleAuthSuccess
  const googleAuthSuccess = (res) => {
    console.log("login response", res);
  };

  // googleAuthFailed
  const googleAuthFailed = (err) => {
    console.log("login failed", err);
  };

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center bg-black bg-opacity-[0.5]`}
    >
      <div className="relative md:w-[80%] w-full md:h-[80%] h-full bg-secondary shadow-sm flex justify-start items-center">
        {/* left section*/}
        <div className="relative md:flex-[0.3] flex-1 w-[30%] h-full">
          <Swiper
            slidesPerView={1}
            className="relative md:flex-[0.3] flex-1 w-[100%] h-[100%]"
            allowTouchMove= {false}
            ref={swiperRef}
            
          >
            <SwiperSlide className="w-full h-full p-10">
              <div className="w-full mb-20 ">
                <h1 className="text-[30px] text-primary  font-extrabold ">
                  Sign In
                </h1>
                <article className="text-[12px] text-primary">
                  Explore & Connect: Your All-in-One Login
                </article>
              </div>
              {/* inputs */}
              <div className="w-full">
                <div className="relative w-full mb-8">
                  <input
                    type="text"
                    placeholder="Enter Your Username"
                    className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary text-white text-sm "
                  />
                </div>
                <div className="relative w-full mb-12">
                  {" "}
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary text-white text-sm"
                  />
                </div>

                <Button
                  btnType={1}
                  label={"SIGN IN"}
                  css={"text-center py-3 font-bold"}
                />
              </div>
              {/* divider */}
              <div className="relative w-full my-8">
                {/* line */}
                <div className="w-full h-[1px] border-t border-primary"></div>
                {/* or */}
                <div className="p-2 bg-secondary absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  <span className="text-primary">or</span>
                </div>
              </div>
              {/* continue with google */}
              {/*  */}
              <div className="w-full mb-14">
                <GoogleOAuthProvider
                  clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}
                 
                >
                  <GoogleLogin  onSuccess={(success) => googleAuthSuccess(success)} onError={(error) => googleAuthFailed(error)} size="large" shape="circle" width={"270"}/>
                </GoogleOAuthProvider>
              </div>
              {/*  */}
              <div className="w-full">
                <article className="text-primary text-sm">Are you new to melody.kr ?</article>
                <article className="text-purple text-sm cursor-pointer underline" onClick={handleNext}>Become New Member</article>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full p-10">
            <div className="w-full mb-14">
                <h1 className="text-[30px] text-primary  font-extrabold ">
                  Sign Up
                </h1>
                <article className="text-[12px] text-primary">
                  Join the Excitement: Sign Up Today!
                </article>
              </div>
              {/* inputs */}
              <div className="w-full">
                <div className="relative w-full mb-8">
                  <input
                    type="text"
                    placeholder="Enter Your Username"
                    className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary text-white text-sm "
                  />
                </div>
                <div className="relative w-full mb-8">
                  <input
                    type="text"
                    placeholder="Enter Your Gmail"
                    className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary text-white text-sm "
                  />
                </div>
                <div className="relative w-full mb-12">
                  {" "}
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary text-white text-sm"
                  />
                </div>

                <Button
                  btnType={1}
                  label={"SIGN UP"}
                  css={"text-center py-3 font-bold"}
                />
              </div>
              {/* divider */}
              <div className="relative w-full my-8">
                {/* line */}
                <div className="w-full h-[1px] border-t border-primary"></div>
                {/* or */}
                <div className="p-2 bg-secondary absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  <span className="text-primary">or</span>
                </div>
              </div>
              {/* continue with google */}
              {/*  */}
              <div className="w-full mb-12">
                <GoogleOAuthProvider
                  clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}
                 
                >
                  <GoogleLogin  onSuccess={(success) => googleAuthSuccess(success)} onError={(error) => googleAuthFailed(error)} size="large" shape="circle" width={"270"}/>
                </GoogleOAuthProvider>
              </div>
               {/*  */}
               <div className="w-full">
                <article className="text-primary text-sm ">Already have an account?</article>
                <article className="text-purple text-sm cursor-pointer underline" onClick={handlePrev}>Login Account</article>
              </div>
            </SwiperSlide>
          </Swiper>
          <div id="signInButton"></div>
        </div>

        {/* rigth section  */}
        <div className="md:flex-[0.7] md:block hidden w-full h-full ">
          <video
            src="https://res.cloudinary.com/dkz1pnb2b/video/upload/v1707321457/hello_utvrah.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          ></video>
        </div>

        {/* close btn */}
        <div className="absolute md:top-5 top-10  md:right-5 right-10 cursor-pointer" onClick={() => setAuthenticateUser(false)}>
        <IoMdClose size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default AuthenticateAccount;
