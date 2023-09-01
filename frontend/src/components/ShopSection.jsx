import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ShopSection = ({name , data}) => {
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
        {data?.map((data) => {
          return <ProductCard data={data} key={data?._id} />;
        })}
      </Carousel>
    </div>
  );
};

export default ShopSection;
