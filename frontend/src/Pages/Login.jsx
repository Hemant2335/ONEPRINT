import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Wrapper  , Loading} from "../components";
import logimg from "../assets/logimg.jpg";
import {FcGoogle} from "react-icons/fc";
import { useState } from "react";
import StateContext from "../context/Context";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();

  const {fetchuser , setUser} = useContext(StateContext);

  const [Email, setEmail] = useState(null)
  const [Password, setPassword] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  const loginwithGoogle = async () => {
    try {
      const auth = getAuth(); // Get the authentication instance
      const provider = new GoogleAuthProvider(); // Create a Google Auth provider instance
      // Sign in with Google popup
      const userCredential = await signInWithPopup(auth, provider);
      // Successfully signed in
      const idtoken = userCredential.user.uid;
      setUser({
        Name : userCredential.user.displayName,
        Email : userCredential.user.email
      })
      sessionStorage.setItem("token", idtoken);
      
      navigate("/");
    } catch (error) {
      // Handle sign-in error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const login = async () => {
      setisLoading(true);
      const response = await fetch("https://backend-zeta-seven-80.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });
      setisLoading(false);
      const json = await response.json();
      if (json.Check) {
        fetchuser(json.uid);
        sessionStorage.setItem("uid", json.uid);
        navigate("/");
      }
      else
      {
        alert(json.error)
      }
  };


  return (
    <Wrapper>
      {isLoading && <Loading />}
      <div className="flex bg-[#343434] rounded-lg">
        <div className="w-full h-fit md:h-[85vh] p-10 ">
          <h1 className="md:text-[5vh] text-[8vh] font-poppins text-[#F9F6EE] font-bold">
            Login Account
          </h1>
          <p className=" text-gray-400 text-lg font-poppins font-medium">
            Enter your Credentials to Login your account.
          </p>
          <div
            className="flex justify-center w-fit mt-5 items-center gap-2 bg-[#F9F6EE] p-4 rounded-lg font-poppins font-medium cursor-pointer hover:bg-red-400 hover:scale-105 transition-transform"
            onClick={() => {
              loginwithGoogle();
            }}
          >
            <h3 className="text-md md:text-xl">Continue with Google</h3>
            <FcGoogle className="text-xl" />
          </div>
          <div className="mt-10 flex flex-col gap-5">
            <div>
              <p className="font-poppins font-semibold  text-[#F9F6EE]">
                Email
              </p>
              <input
                type="email"
                className=" mt-2 w-full rounded-lg p-4 font-poppins text-[#F9F6EE] font-medium bg-[#222222] border-2 md:w-[68vh]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <p className="font-poppins font-semibold  text-[#F9F6EE]">
                Password
              </p>
              <input
                type="password"
                className="w-full mt-2 rounded-lg p-4 font-poppins text-[#F9F6EE] font-medium bg-[#222222] border-2 md:w-[68vh]"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <p onClick={()=>{navigate("/register")}} className="font-poppins text-[#F9F6EE] hover:text-red-400 cursor-pointer ">Don't have a account ? Register</p>
            <button className="bg-[#F9F6EE] hover:bg-red-400  hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg  w-fit" onClick={()=>login()}>
              Login
            </button>
            
          </div>
        </div>
        <div className="hidden md:flex w-full max-h-[85vh] ">
          <img
            src={logimg}
            alt=""
            className="max-h-[85vh] w-full object-cover "
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
