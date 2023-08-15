import React from "react";
import img from "../assets/testimg.png";

const ProductCard = () => {
  return (
    <div className="mt-10 mb-10 mx-5 ">
      <div className="md:max-w-[50vh] min-w-[20vh] md:min-w-[50vh]">
        <img src={img} alt="" className="rounded-xl" />
        <div className="flex items-center justify-between px-2 shadow-3xl p-4">
          <div>
            <h1 className="text-lg text-[#F9F6EE] font-poppins font-medium mt-5 ">
              Product Name
            </h1>
            <div className="flex">
              <h2 className="text-lg text-gray-400 font-poppins font-medium ">
                Price :
              </h2>
              <h2 className="text-lg text-gray-400 font-poppins font-medium ">
                $5
              </h2>
            </div>
          </div>
          <button className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg mt-5">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
