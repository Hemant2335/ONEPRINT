import React from "react";
import Wrapper from "./Wrapper";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import profile from "../assets/man.png";

const Navbar = () => {
  const [ismenuclicked, setismenuclicked] = useState(false);
  const navigate = useNavigate();

  const tooglemenu = () => {
    setismenuclicked(!ismenuclicked);
  };

  return (
    <>
      <Wrapper>
        {/* Desktop Menu */}

        <div className="hidden md:flex justify-between items-center min-h-[10vh]">
          {/* Menu */}
          <div className="flex gap-2 items-center  cursor-pointer hover:scale-105 transition-transform">
            <h1 className="text-md font-poppins text-[#F9F6EE] gap-2 hover:text-[#DDD0C8] flex items-center">
              <CgMenuRightAlt className="text-3xl " /> MENU
            </h1>
          </div>

          {/* Logo */}
          <div>
            <h1
              className="text-[3.1vh] text-[#F9F6EE]   cursor-pointer hover:text-[#DDD0C8] transition-transform font-poppins font-black"
              onClick={() => navigate("/")}
            >
              ONEPRINT
            </h1>
          </div>

          {/* User */}
          <div>
            <a
              className="hover:scale-105  font-medium cursor-pointer shadow-3xl font-poppins  border-gray-400 p-2 rounded-lg text-[#F9F6EE] hover:text-black hover:bg-[#DDD0C8]  transition-transform "
              onClick={() => navigate("/login")}
            >
              Log In
            </a>
          </div>
        </div>

        {/* Mobile Menu */}

        <div className="flex md:hidden justify-between items-center min-h-[10vh] ">
          {/* Menu */}
          <div
            className="flex gap-2 items-center  cursor-pointer hover:scale-105 transition-transform"
            onClick={() => tooglemenu()}
          >
            <h1 className="text-md font-poppins text-[#F9F6EE] gap-2 hover:text-[#DDD0C8] flex items-center">
              {ismenuclicked ? (
                <RxCross2 className="text-3xl " />
              ) : (
                <CgMenuRightAlt className="text-3xl " />
              )}
            </h1>
          </div>

          {/* Logo */}
          <div>
            <h1
              className="text-[3.1vh] text-[#F9F6EE]   cursor-pointer hover:text-[#DDD0C8] transition-transform font-poppins font-black"
              onClick={() => navigate("/")}
            >
              ONEPRINT
            </h1>
          </div>
        </div>
      </Wrapper>
      {ismenuclicked && (
        <div className="w-full h-fit  p-10  z-10 bg-[#222222]">
          {sessionStorage.getItem("token") ? (
            <div className="flex  items-center gap-5">
              <img src={profile} alt="profile" className="h-[8vh]" />
              <div>
                <h1 className="text-[2vh] font-poppins text-[#F9F6EE] font-bold">
                  Nishant Kumar
                </h1>
                <p className="mt-2 text-gray-400  font-poppins font-medium">
                  knrt73373@gmail.com
                </p>
              </div>
            </div>
          ) : (
            <div className="shadow-3xl p-4  rounded-lg hover:bg-[#F9F6EE] " onClick={()=>{navigate("/login") ; tooglemenu()}}>
              <h1 className="text-[2vh] font-poppins text-[#F9F6EE] hover:text-[#222222]  font-bold flex items-center gap-4 hover:">
              <HiOutlineUserCircle className="text-3xl " /> Login
              </h1>
            </div>
          )}

          {sessionStorage.getItem("token") ? (
            <>
              <div className="shadow-3xl p-4 mt-10 rounded-lg hover:">
                <h1 className="text-[2vh] font-poppins text-[#F9F6EE] font-bold">
                  Home
                </h1>
              </div>
              <div className="shadow-3xl p-4 mt-5 rounded-lg hover:">
                <h1 className="text-[2vh] font-poppins text-[#F9F6EE] font-bold">
                  Home
                </h1>
              </div>
              <div className="shadow-3xl p-4 mt-5 rounded-lg hover:">
                <h1 className="text-[2vh] font-poppins text-[#F9F6EE] font-bold">
                  Home
                </h1>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
