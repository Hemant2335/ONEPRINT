import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import CompLoading from "./CompLoading";

const ShopSection = ({name , dataname}) => {

  const [data, setdata] = useState([])
  const [isloading, setisloading] = useState(false)

  const fetchdata= async() => {
    setisloading(true)
    const response = await fetch(`https://backend-zeta-seven-80.vercel.app/api/product/products/${dataname}`);
    const data = await response.json();
    setisloading(false)
    setdata(data)
    console.log(data)
  }

  useEffect(() => {
    fetchdata();
  },[])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5  
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="mt-5 p-4 mb-10">
      <h1 className="text-2xl font-poppins font-semibold text-[#F9F6EE] ">
        {name}
      </h1>
      <Carousel responsive={responsive}>
        {!isloading ? (data?.map((data) => {
          return <ProductCard data={data} key={data?._id} />;
        })) : (<CompLoading/>) }
      </Carousel>
    </div>
  );
};

export default ShopSection;
