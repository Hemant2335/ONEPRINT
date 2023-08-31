import React from "react";
import profile from "../assets/profile.png";
import { Loading, Wrapper } from "../components";
import { FiUploadCloud } from "react-icons/fi";
import { MdCloudDone } from "react-icons/md";
import { useState } from "react";


const Upload = () => {

  const [isuploaded, setisuploaded] = useState(false);
  const [isselected, setisselected] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const handleupload = async() => {
    if(!isselected){
      alert("Please select an image first")
      return
    }

    try {
      console.log(isselected)
      setisLoading(true);
      const formData = new FormData();
      formData.append('image', isselected);
      console.log(formData);
      const response = await fetch(`http://localhost:3000/api/dashboard/upload/${sessionStorage.getItem("uid")}`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);

      if(data?.Check){
        setisuploaded(true); 
        alert("Image uploaded successfully");
        console.log(data?.imgurl);
        setisLoading(false);
      }
      else{
        alert("Some error occured");
        console.log(response.statusText);
        setisLoading(false);
      }
      
      
    } catch (error) {
      
    }
  }



  return (
    <Wrapper>
      {isLoading && (<Loading/>)}
      <div className="flex justify-center my-[10vh] md:mx-0 mx-[5vw]">
        <div className="h-fit w-fit shadow-3xl flex flex-col md:flex-row gap-[10vh] justify-center items-center px-10 py-10">
          <div className="shadow-3xl w-fit p-4 rounded-lg">
            <img src={profile} alt="" className="h-[20vh] md:h-[30vh]" />
          </div>
          <div className="flex flex-col gap-5 ">
          <div className="mt-5">
              <p className="font-poppins font-semibold  text-[#F9F6EE]">
                Image
              </p>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  className=" mt-2 w-full rounded-lg p-4 font-poppins text-[#F9F6EE] font-medium bg-[#222222] border-2 md:w-[68vh]"
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      setisselected(e.target.files[0]);
                    } else {
                      setisselected(null);
                    }
                  }}
                />
                {!isuploaded ? (
                  <FiUploadCloud
                    className="cursor-pointer text-3xl hover:scale-105 transition-transform text-[#F9F6EE]"
                    onClick={() => handleupload()}
                  />
                ) : (
                  <MdCloudDone className="cursor-pointer text-3xl hover:scale-105 transition-transform text-[#F9F6EE]" />
                )}
              </div>
              <div  className="mt-5">
                <p className="font-poppins font-semibold  text-[#F9F6EE]">
                  Description
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg p-4 font-poppins text-[#F9F6EE] font-medium bg-[#222222] border-2 md:w-[68vh]"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div  className="mt-5">
                <p className="font-poppins font-semibold  text-[#F9F6EE]">
                  Price
                </p>
                <input
                  type="number"
                  className="w-full mt-2 rounded-lg p-4 font-poppins text-[#F9F6EE] font-medium bg-[#222222] border-2 md:w-[68vh]"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div  className="mt-5">
                <p className="font-poppins font-semibold  text-[#F9F6EE]">
                  Category
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg p-4 font-poppins text-[#F9F6EE] font-medium bg-[#222222] border-2 md:w-[68vh]"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <button
              className="bg-red-400 hover:scale-105 transition-transform text-black font-poppins font-medium p-3 rounded-md  w-fit"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Upload;
