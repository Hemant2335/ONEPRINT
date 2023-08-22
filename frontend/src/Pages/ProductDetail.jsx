import React from "react";
import { Wrapper  , ShopSection} from "../components";
import bannimg from "../assets/bannimg.jpg";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {

  const navigate = useNavigate();


  return (
    <>
      <Wrapper>
        <div className=" h-[85vh] rounded-lg  items-center p-5 mt-10">
          <div className="md:flex gap-[15vh]">
          <div className="md:w-[35vw] w-full  p-4 rounded-lg">
            <img
              src={bannimg}
              alt=""
              className="h-[50vh] object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className=" w-full md:w-[50vw] h-full p-4">
            <h1 className="md:text-[5vh] text-[4vh] font-poppins text-[#F9F6EE] font-bold">
              Batman in the Wilds premium sticker
            </h1>
            <div className="flex gap-4 mt-2">
              <h2 className="md:text-[2.5vh] text-[2vh] font-poppins text-gray-400 font-bold">
                Marvel
              </h2>
              <h2 className="md:text-[2.5vh] text-[2vh] font-poppins text-gray-400 font-bold">
                Trending 🔥
              </h2>
            </div>
            <p className="md:text-[2.4vh] text-[1.8vh] font-poppins text-gray-600 font-medium mt-[4vh]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              ut at iusto commodi incidunt saepe harum nobis laudantium
              adipisci? Iusto nesciunt sed suscipit ab, veniam iure cum ex rem
              vero! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ducimus consequatur rerum nulla inventore asperiores delectus
              laboriosam facere ut, molestiae natus odio, rem totam voluptate
              repellat animi perferendis illo perspiciatis error.
            </p>
            <h2 className="md:text-[2.5vh] text-[2vh] mt-[4vh] font-poppins text-gray-400 font-bold">Delivery Available</h2>
            <p className="md:text-[2.4vh] text-[1.8vh] font-poppins text-red-400 mt-1 font-medium ">Jaypee University of Engineering and Technology</p>
            <button className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg mt-10" onClick={sessionStorage.getItem("uid")?(()=>{navigate("/cart")}):(()=>{navigate("/login")})}>
              Add to cart
            </button>
          </div>
          </div>
          <ShopSection name  = "Similar Items 🤝"/>
        </div>
        

      </Wrapper>
    </>
  );
};

export default ProductDetail;
