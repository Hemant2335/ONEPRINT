import React from "react";
import bannimg from "../assets/miles.jpg";

const CartproductCard = () => {
  return (
    <div className="flex gap-5 ">
      <div className="md:w-fit w-full rounded-lg ">
        <img
          src={bannimg}
          alt=""
          className="h-[25vh] object-cover rounded-xl"
          loading="lazy"
        />
      </div>
      <div className="mt-[2vh] w-[15vw]">
        <h1 className="md:text-[3vh]  text-[4vh] font-poppins text-[#F9F6EE] font-bold">
          Batman in the Wilds premium sticker
        </h1>
        <h2 className="md:text-[2.5vh] text-[2vh] font-poppins mt-1 text-gray-400 font-bold">
          Marvel
        </h2>
      </div>
    </div>
  );
};

export default CartproductCard;
