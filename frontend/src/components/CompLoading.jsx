import lottie from "lottie-web";
import animationdata from "../assets/comploading.json";
import { useEffect } from "react";

const CompLoading = () => {
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
    <div className="relative flex justify-center bg-[rgba(34,34,34,0.5)]">
        <div className="loading" id="lottie-animation" style={{height : "25vh" , width : "200px"}}></div>
    </div>
  )
}

export default CompLoading