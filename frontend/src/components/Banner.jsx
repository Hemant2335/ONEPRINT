import React from 'react'
import bannimg from '../assets/bannimg.jpg'

const Banner = () => {
  return (
    <div className='bg-[#343434] md:min-h-[80vh] rounded-3xl mt-5 flex gap-4 md:p-[8vh] p-[4vh]'>

        {/* Text */}
        <div className='w-full md:p-4 '>
            <h1 className='md:text-[10vh] text-[8vh] font-poppins text-[#F9F6EE] font-bold'>Explore new PRINTS</h1>
            <p className='mt-5 text-gray-400 text-lg font-poppins font-medium'>We specialize in crafting new prints that inspire, captivate, and bring your visions to life with vibrant artistry.</p>

            <div className='mt-5 flex gap-5'>
                <button className='bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg mt-5'>Customize</button>
                <hr className='text-white'/>
                <button className='bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg mt-5'>Place order</button>
            </div>
        </div>

        <div className='w-full hidden md:flex'>
            <img src={bannimg} alt="" className='w-[80vh] object-cover rounded-xl'/>
        </div>

    </div>
  )
}

export default Banner