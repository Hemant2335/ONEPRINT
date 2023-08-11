import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <p onClick={()=>{navigate("/register")}} className="font-poppins hover:text-red-400 cursor-pointer mt-10">Don't have a account ? Register</p>
    </div>
  )
}

export default Login