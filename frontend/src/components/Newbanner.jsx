import React from "react";
import Wrapper from "./Wrapper";
import bannimg from "../assets/onepiece.jpg";
import bannimg1 from "../assets/Scarletwitch.jpg";
import bannimg2 from "../assets/Avengers.jpg";
import bannimg3 from "../assets/marvel.jpg";
import bannimg4 from "../assets/black.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Newbanner = () => {
  return (
    <Wrapper>
      <div className=" min-h-[50vh] flex w-full mt-[5vh] gap-[10vw]">
        {/* Main Banner */}
        <div className="shadow-3xl rounded-xl">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}

          >
            <div className="w-full max-h-[70vh] hidden md:flex ">
              <img src={bannimg} alt="" className=" object-cover rounded-xl " />
            </div>
            <div className="w-full max-h-[70vh] hidden md:flex rounded-xl">
              <img
                src={bannimg1}
                alt=""
                className=" object-cover rounded-xl "
              />
            </div>
            <div className="w-full max-h-[70vh] hidden md:flex rounded-xl">
              <img
                src={bannimg2}
                alt=""
                className=" object-cover rounded-xl "
              />
            </div>
            <div className="w-full max-h-[70vh] hidden md:flex rounded-xl">
              <img
                src={bannimg3}
                alt=""
                className=" object-cover rounded-xl "
              />
            </div>
            <div className="w-full max-h-[70vh] hidden md:flex rounded-xl">
              <img
                src={bannimg4}
                alt=""
                className=" object-cover rounded-xl "
              />
            </div>
          </Carousel>
        </div>

        {/*  Content */}
        <div className="grid grid-cols-2 min-w-[15vw]">
          <div className="min-h-[5vh] min-w-[5vh] bg-red-400">Hloo</div>
          <div className="min-h-[5vh] min-w-[5vh]">Hloo</div>
          <div className="min-h-[5vh] min-w-[5vh]">Hloo</div>
          <div className="min-h-[5vh] min-w-[5vh]">Hloo</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Newbanner;
