import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Button from "@/elements/Button";

const Signin = ({ handleNext }) => {
  const [signInShowPassword, setSignInShowPassword] = useState(false);
  // googleAuthSuccess
  const googleAuthSuccess = (res) => {
    console.log("login response", res);
  };

  // googleAuthFailed
  const googleAuthFailed = (err) => {
    console.log("login failed", err);
  };

  return (
    <div className="w-full">
      <div className="w-full mb-20 ">
        <h1 className="text-[30px] text-primary  font-extrabold ">Sign In</h1>
        <article className="text-[12px] text-primary">
          Explore & Connect: Your All-in-One Login
        </article>
      </div>
      {/* inputs */}
      <div className="w-full">
        <div className="relative w-full mb-8">
          <input
            type="text"
            placeholder="Enter your Email or Username"
            className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary  text-primary text-sm "
          />
        </div>
        <div className="relative w-full mb-12">
          {" "}
          <div className="w-full h-auto relative  mb-4 ">
            <input
              type={signInShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="relative w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary  text-primary text-sm z-0"
            />
            <div className="absolute bottom-2 right-2 z-[5] text-primary cursor-pointer">
              {!signInShowPassword ? (
                <div onClick={() => setSignInShowPassword(true)}>
                  <FaRegEye size={15} />
                </div>
              ) : (
                <div onClick={() => setSignInShowPassword(false)}>
                  <FaRegEyeSlash size={15} />
                </div>
              )}
            </div>
          </div>
          {/* article */}
          <article className="w-full text-right cursor-pointer text-primary hover:underline text-xs">
            Forgot Password?
          </article>
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
      <div className="flex justify-center items-center mb-14 ">
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}>
          <GoogleLogin
            onSuccess={(success) => googleAuthSuccess(success)}
            onError={(error) => googleAuthFailed(error)}
            size="large"
            shape="circle"
            width={"300"}
          />
        </GoogleOAuthProvider>
      </div>
      {/*  */}
      <div className="flex justify-center items-center flex-col">
        <article className="text-primary text-sm">
          Are you new to melody.kr ?
        </article>
        <article
          className="text-purple text-sm cursor-pointer underline"
          onClick={handleNext}
        >
          Become New Member
        </article>
      </div>
    </div>
  );
};

export default Signin;
