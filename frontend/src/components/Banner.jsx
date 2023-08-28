import React from "react";
import bannimg from "../assets/spiderimg.jpg";
import bannimg1 from "../assets/ironman.jpg";
import bannimg2 from "../assets/deadpool.jpg";
import bannimg3 from "../assets/antman.jpg";
import bannimg4 from "../assets/groot.jpg";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FiArrowLeft} from "react-icons/fi";
import { FiArrowRight} from "react-icons/fi";

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-[#343434] relative md:min-h-[80vh] rounded-3xl mt-5 flex gap-4 md:p-[4vh] p-[4vh]">
      {/* Text */}
      <div className="w-full md:w-[45vw] md:p-[10vh] md:absolute z-10">
        <h1 className="md:text-[10vh] text-[8vh] font-poppins text-[#F9F6EE] font-bold">
          Explore new PRINTS
        </h1>
        <p className="mt-5 text-gray-400 md:w-[30vw] text-lg font-poppins font-medium">
          We specialize in crafting new prints that inspire, captivate, and
          bring your visions to life with vibrant artistry.
        </p>
        {sessionStorage.getItem("uid") ? (
          <div className="mt-5 flex gap-5">
            <button className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg mt-5">
              Customize
            </button>
            <hr className="text-white" />
            <button className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg mt-5">
              Place order
            </button>
          </div>
        ) : (
          <button
            className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg mt-5"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        )}
      </div>

      {/* <div className="w-full max-h-[70vh] hidden md:flex">
        <img
          src={bannimg}
          alt=""
          className=" object-cover rounded-xl "
        />
      </div> */}

      <Carousel autoPlay ={true} infiniteLoop = {true} showIndicators = {false} showStatus = {false} showThumbs = {false} className="">
      <div className="w-full max-h-[70vh] hidden md:flex">
        <img
          src={bannimg}
          alt=""
          className=" object-cover rounded-xl "
        />
      </div>
      <div className="w-full max-h-[70vh] hidden md:flex">
        <img
          src={bannimg1}
          alt=""
          className=" object-cover rounded-xl "
        />
      </div>
      <div className="w-full max-h-[70vh] hidden md:flex">
        <img
          src={bannimg2}
          alt=""
          className=" object-cover rounded-xl "
        />
      </div>
      <div className="w-full max-h-[70vh] hidden md:flex">
        <img
          src={bannimg3}
          alt=""
          className=" object-cover rounded-xl "
        />
      </div>
      <div className="w-full max-h-[70vh] hidden md:flex">
        <img
          src={bannimg4}
          alt=""
          className=" object-cover rounded-xl "
        />
      </div>
      </Carousel>

      
      
    </div>
  );
};

export default Banner;
