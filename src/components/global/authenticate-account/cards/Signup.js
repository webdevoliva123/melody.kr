import React, { useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Button from "@/elements/Button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Signup = ({ handlePrev }) => {
    const [signupShowPassword, setSignUpShowPassword] = useState(false);
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
      <div className="w-full mb-14">
        <h1 className="text-[30px] text-primary  font-extrabold ">Sign Up</h1>
        <article className="text-[12px] text-primary">
          Join the Excitement: Sign Up Today!
        </article>
      </div>
      {/* inputs */}
      <div className="w-full">
        <div className="relative grid grid-cols-2 gap-5 w-full mb-8">
          <input
            type="text"
            placeholder="First Name"
            className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary  text-primary text-sm "
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary  text-primary text-sm "
          />
        </div>
        <div className="relative w-full mb-8">
          <input
            type="text"
            placeholder="Username"
            className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary  text-primary text-sm "
          />
        </div>
        <div className="relative w-full mb-8">
          <input
            type="text"
            placeholder="Email"
            className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary  text-primary text-sm "
          />
        </div>
        <div className="relative w-full mb-12">
          {" "}
          <div className="w-full h-auto relative">
          <input
            type={signupShowPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full py-2 bg-transparent border-b border-purple outline-none placeholder:text-primary  text-primary text-sm"
          />
          <div className="absolute bottom-2 right-2 z-[5] text-primary cursor-pointer">
              {!signupShowPassword ? (
                <div onClick={() => setSignUpShowPassword(true)}>
                  <FaRegEye size={15} />
                </div>
              ) : (
                <div onClick={() => setSignUpShowPassword(false)}>
                  <FaRegEyeSlash size={15} />
                </div>
              )}
            </div>
          </div>
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
      <div className="flex justify-center items-center mb-12">
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
      <div className="flex justify-center items-center flex-col ">
        <article className="text-primary text-sm ">
          Already have an account?
        </article>
        <article
          className="text-purple text-sm cursor-pointer underline"
          onClick={handlePrev}
        >
          Login Account
        </article>
      </div>
    </div>
  );
};

export default Signup;
