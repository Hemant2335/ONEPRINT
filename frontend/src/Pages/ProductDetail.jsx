import React, { useEffect , useState } from "react";
import { Wrapper  , ShopSection , Loading} from "../components";
import bannimg from "../assets/bannimg.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import StateContext from "../context/Context";

const ProductDetail = () => {
  const {slug} = useParams();
  const navigate = useNavigate();
  const {isLoadingstate} = useContext(StateContext)
  const [data, setdata] = useState("")

  const fetchdata = async () => {
    try {
      
      const response = await fetch(
        `https://backend-zeta-seven-80.vercel.app/api/product/products/${slug}`
      );
      const data = await response.json();
      setdata(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Wrapper>
      {isLoadingstate && (<Loading/>)}
        <div className=" h-[85vh] rounded-lg  items-center p-5 mt-10">
          <div className="md:flex gap-[15vh]">
          <div className="md:w-[35vw] w-full  p-4 rounded-lg">
            <img
              src={data?.[0]?.photo}
              alt=""
              className="h-[50vh] object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className=" w-full md:w-[50vw] h-full p-4">
            <h1 className="md:text-[5vh] text-[4vh] font-poppins text-[#F9F6EE] font-bold">
              {data?.[0]?.name}
            </h1>
            <div className="flex gap-4 mt-2">
              <h2 className="md:text-[2.5vh] text-[2vh] font-poppins text-gray-400 font-bold">
                {data?.[0]?.genre}
              </h2>
              <h2 className="md:text-[2.5vh] text-[2vh] font-poppins text-gray-400 font-bold">
                {data?.[0]?.category} 🔥
              </h2>
            </div>
            <p className="md:text-[2.4vh] text-[1.8vh] font-poppins text-gray-600 font-medium mt-[4vh]">
              {data?.[0]?.description}
            </p>
            <h2 className="md:text-[3vh] text-[2vh] font-poppins mt-5 text-red-400 font-bold">
            ${data?.[0]?.price}
          </h2>
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
