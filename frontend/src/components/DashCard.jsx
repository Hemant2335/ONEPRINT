import React from 'react'

const DashCard = ({data}) => {
  return (
    <div className="bg-[#343434] relative md:min-h-[50vh] rounded-3xl mt-5 flex gap-4 md:p-[4vh] p-[4vh]">
      {/* Text */}
      <div className="w-full md:w-[45vw] md:p-4  md:absolute z-10">
        <h1 className="md:text-[8vh] text-[8vh] font-poppins text-[#222222] font-bold">
          {data?.Name}
        </h1>
        <p className="mt-5 text-white md:w-[30vw] text-lg font-poppins font-medium">
          {data?.Desc}
        </p>
        <button
            className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg mt-5"
            onClick={() => navigate(data?.Link)}
          >
            Click Here
          </button>
      </div>

      <div className="w-full max-h-[40vh] hidden md:flex opacity-70">
        <img
          src={data?.Img}
          alt=""
          className=" object-cover rounded-xl "
        />
      </div>


      
      
    </div>
  )
}

export default DashCard