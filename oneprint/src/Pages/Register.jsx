import React from "react";
import { Wrapper } from "../components";
import regimg from "../assets/regimg.jpg";

const Register = () => {
  return (
    <Wrapper>
      <div className="flex bg-[#343434] rounded-lg ">
        <div className="w-full h-fit md:h-[85vh] p-10">
          <h1 className="md:text-[5vh] text-[8vh] font-poppins text-[#F9F6EE] font-bold">
            Create Account
          </h1>
          <p className=" text-gray-400 text-lg font-poppins font-medium">
            Enter your details to create your account.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div className="md:flex  md:gap-5">
              <div>
                <p className="font-poppins font-semibold text-[#F9F6EE]">
                  First Name
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg text-[#F9F6EE] p-4 font-poppins border-2 font-medium bg-[#222222]"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <p className="font-poppins font-semibold md:mt-0 mt-5 text-[#F9F6EE]">
                  Last Name
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg p-4 text-[#F9F6EE] font-poppins font-medium border-2 bg-[#222222]"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div >
                <p className="font-poppins font-semibold  text-[#F9F6EE]">
                  Email
                </p>
                <input
                  type="email"
                  className=" mt-2 w-full rounded-lg p-4 font-poppins text-[#F9F6EE] font-medium bg-[#222222] border-2 md:w-[68vh]"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            <div>
                <p className="font-poppins font-semibold  text-[#F9F6EE]">
                  Password
                </p>
                <input
                  type="password"
                  className="w-full mt-2 rounded-lg p-4 font-poppins text-[#F9F6EE] font-medium bg-[#222222] border-2 md:w-[68vh]"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <button className='bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg mt-5 w-fit'>Create Account</button>
          </div>
        </div>
        <div className="hidden md:flex w-full max-h-[85vh] ">
          <img
            src={regimg}
            alt=""
            className="max-h-[85vh] w-full object-cover "
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
