import React from "react";
import { Wrapper, CartproductCard } from "../components";

const Cart = () => {
  return (
    <div>
      <Wrapper>
        <div className="md:flex justify-between">
          <div className="p-4">
            <h1 className="md:text-[6vh] m-2 text-[4vh] font-poppins text-[#F9F6EE] font-bold">
              Cart
            </h1>
            {/* Products part */}
            {/* <div className='flex gap-[40vw] px-[10vw] mt-5'>
                    <h1 className='md:text-[3vh] text-[4vh] font-poppins text-gray-400 font-bold'>Products</h1>
                    <h1 className='md:text-[3vh] text-[4vh] font-poppins text-gray-400 font-bold'>Quantity</h1>
                </div> */}
            <div className="p-4 flex flex-col gap-10">
              <CartproductCard />
              <CartproductCard />
              <CartproductCard />
              <CartproductCard />
            </div>
          </div>

          {/* Total part */}

          <div className="flex  w-fit h-fit  flex-col md:max-w-[20vw] md:p-4 p-4 m-4 md:m-[10vh] bg-[#343434] rounded-lg">
            <h1 className="md:text-[3vh] m-2 text-[2vh] font-poppins text-[#F9F6EE] font-bold">
              Summary
            </h1>
            <p className="md:text-[2.4vh] text-[1.8vh] font-poppins text-gray-600 font-medium mt-[4vh]">
              This Tells you about total Expenses you would cost after buying
              the products present in your cart and also Never doubt our
              calculations
            </p>
            <h2 className="md:text-[2.5vh] text-[2vh] mt-[4vh] font-poppins text-gray-400 font-bold">Subtotal : $ 500.00</h2>
            <button className="bg-[#F9F6EE] hover:bg-red-400  hover:scale-105 transition-transform text-black font-poppins font-medium p-3 justify-center mt-10 rounded-lg  w-fit" onClick={()=>decrement()}>
          Buy now
        </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
