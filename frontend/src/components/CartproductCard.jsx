import React from "react";
import bannimg from "../assets/miles.jpg";
import { useState } from "react";

const CartproductCard = () => {

  const [quantity, setquantity] = useState(1);

  const increment = () => {
    if(quantity <= 10)
    {
      setquantity(quantity + 1);
    }
    
  }

  const decrement = () => {
    if(quantity > 1)
    {
      setquantity(quantity - 1);
    }
    
  }

  return (
    <div className="flex gap-[10vw]">
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
          <h2 className="md:text-[3vh] text-[2vh] font-poppins mt-2 text-red-400 font-bold">
            $5.00
          </h2>
        </div>
      </div>

      {/* Quantity handler */}

      <div className="flex justify-center items-center gap-4">
        <button className="bg-[#F9F6EE] hover:bg-red-400  hover:scale-105 transition-transform text-black font-poppins font-medium p-2 rounded-lg  w-fit" onClick={()=>increment()}>
          +
        </button>
        <h2 className="md:text-[3vh] text-[2vh] font-poppins mt-2 text-red-400 font-bold">
          {quantity}
        </h2>
        <button className="bg-[#F9F6EE] hover:bg-red-400  hover:scale-105 transition-transform text-black font-poppins font-medium p-2 rounded-lg  w-fit" onClick={()=>decrement()}>
          -
        </button>
      </div>
    </div>
  );
};

export default CartproductCard;
