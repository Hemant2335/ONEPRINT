import React from 'react'
import Wrapper from '../components/Wrapper'
import profile from "../assets/man.png";
import admin from "../assets/profile.png";
import { useContext } from 'react';
import StateContext from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const { User } = useContext(StateContext);
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("uid");
        navigate("/")
    }

  return (
    <Wrapper>
    <div className='flex justify-center my-[10vh] md:mx-0 mx-[5vw]'>
        <div className='h-fit w-fit shadow-3xl flex flex-col md:flex-row gap-[10vh] justify-center items-center px-10 py-10'>
            
            <div className='shadow-3xl w-fit p-4 rounded-lg'>
            {User?.isadmin ? (<img src={admin} alt="" className='h-[20vh] md:h-[30vh]' />) : (<img src={profile} alt="" className='h-[20vh] md:h-[30vh]' />)}
                
            </div>
            <div className='flex flex-col gap-5 '>
                <div className='flex flex-col gap-5 mb-5'>
                <div className='flex gap-5'>
                    <h2 className='text-xl text-[#F9F6EE] font-poppins font-semibold'>Profile </h2>
                    {User?.isadmin ? (<h2 className='text-xl font-poppins font-medium text-[#F9F6EE]'>Admin</h2>) : (<h2 className='text-xl text-[#F9F6EE] font-poppins font-medium'>User</h2>)}
                    
                </div>
                <div className='flex gap-5'>
                    <h2 className='text-xl text-[#F9F6EE] font-poppins font-semibold'>Name </h2>
                    <h2 className='text-xl text-[#F9F6EE] font-poppins font-medium'>{User?.Name}</h2>
                </div>
                <div className='flex gap-5'>
                    <h2 className='text-xl text-[#F9F6EE] font-poppins font-semibold'>Email</h2>
                    <h2 className='text-xl text-[#F9F6EE] font-poppins font-medium'>{User?.Email}</h2>
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
  )
}

export default Profile