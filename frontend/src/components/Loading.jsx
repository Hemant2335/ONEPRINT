import lottie from "lottie-web";
import animationdata from "../assets/loading.json";
import { useEffect } from "react";

import React from 'react'

const Loading = () => {
    useEffect(() => {

        // Initialize the animation when the component mounts
        const animationContainer = document.getElementById('lottie-animation');
        if (animationContainer) {
          lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationdata,
          });
        }
      }, []);
  
  return (
    <div className=" absolute top-[30vh] left-[25vw] md:left-[35vw] z-10">
        <div className="loading" id="lottie-animation" style={{height : "25vh" , width : "200px"}}></div>
    </div>
  )
}

export default Loading