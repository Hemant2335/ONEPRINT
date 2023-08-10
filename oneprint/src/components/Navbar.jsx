import React from 'react'
import Wrapper from './Wrapper'
import {CgMenuRightAlt} from 'react-icons/cg';


const Navbar = () => {
  return (
    <Wrapper>

      
      <div className='flex justify-between items-center min-h-[10vh]'>

      {/* Menu */}
      <div className='flex gap-2 items-center  cursor-pointer hover:scale-105 transition-transform'>
        <h1 className='text-md font-poppins text-[#F9F6EE] gap-2 hover:text-[#DDD0C8] flex items-center'><CgMenuRightAlt className='text-3xl '/> MENU</h1>
      </div>

      {/* Logo */}
      <div>
        <h1 className='text-[3.1vh] text-[#F9F6EE]   cursor-pointer hover:text-[#DDD0C8] transition-transform font-poppins font-black'>ONEPRINT.</h1>
      </div>

      {/* User */}
      <div>
        <a className='hover:scale-105  font-medium cursor-pointer shadow-3xl font-poppins  border-gray-400 p-2 rounded-lg text-[#F9F6EE] hover:text-black hover:bg-[#DDD0C8]  transition-transform '>Log In</a>
      </div>

      </div>

    </Wrapper>
  )
}

export default Navbar