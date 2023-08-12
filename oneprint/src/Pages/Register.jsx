import React from "react";
import { Wrapper } from "../components";
import regimg from "../assets/regimg.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState(null);
  const [LastName, setLastName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [isemailverify, setisemailverify] = useState(false);
  const [code, setcode] = useState("");
  const [pass, setpass] = useState(false);
  const [inputcode, setinputcode] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });

  const register = async () => {
    if (isemailverify) {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
          displayName: FirstName + " " + LastName,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.Check) {
        sessionStorage.setItem("token", json.authtoken);
        navigate("/");
      }
      else
      {
        alert(json.error)
      }
    }
    else{
      alert("Please Verify your email first")
    }
  };

  useEffect(() => {
    setcode(Math.floor(Math.random() * 10000));
  }, []);

  const handleverify = async () => {
    const formed_code = await formcode();
    console.log(formed_code);
    console.log(code);
    if (formed_code == code) {
      console.log("Success");
      setpass(false);
      setisemailverify(true);
    }
    else{
      alert("Wrong Code")
    }
  };
  const Onchange = (e) => {
    setinputcode({ ...inputcode, [e.target.name]: e.target.value });
  };

  const emailverify = () => {
    emailjs.init("VyjRnBemLCagAcdN3");
    emailjs
      .send("service_jssx3ep", "template_rikejva", {
        to_email: Email,
        to_name: "User",
        subject: "My Subject",
        message: `Hello, the verification  code is : ${code} `,
      })
      .then(function (response) {
        console.log("Email sent successfully:", response);
        setpass(response.text);
        return true;
      })
      .catch(function (error) {
        console.error("Error sending email:", error);
      });
  };

  const formcode = async () => {
    let x =
      (await (inputcode.code1 * 1000)) +
      inputcode.code2 * 100 +
      inputcode.code3 * 10 +
      inputcode.code4 * 1;
    return x;
  };

  return (
    <Wrapper>
      <div className="flex bg-[#343434] rounded-lg ">
        <div className="w-full h-fit  p-10 mb-10">
          <h1 className="md:text-[5vh] text-[8vh] font-poppins text-[#F9F6EE] font-bold">
            Create Account
          </h1>
          <p className=" text-gray-400 text-lg font-poppins font-medium">
            Enter your details to create your account.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div className="md:flex  md:gap-5">
              <div>
                <p className="font-poppins font-semibold text-[#F9F6EE]">
                  First Name
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg text-[#F9F6EE] p-4 font-poppins border-2 font-medium bg-[#222222]"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div>
                <p className="font-poppins font-semibold md:mt-0 mt-5 text-[#F9F6EE]">
                  Last Name
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg p-4 text-[#F9F6EE] font-poppins font-medium border-2 bg-[#222222]"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="font-poppins font-semibold  text-[#F9F6EE]">
                Email
              </p>
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  className=" mt-2 w-full rounded-lg p-4 font-poppins text-[#F9F6EE] font-medium bg-[#222222] border-2 md:w-[68vh]"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {!isemailverify ? (
                  <MdEmail
                    className="cursor-pointer text-3xl hover:scale-105 transition-transform text-[#F9F6EE]"
                    onClick={() => emailverify()}
                  />
                ) : (
                  <MdMarkEmailRead className="cursor-pointer text-3xl hover:scale-105 transition-transform text-[#F9F6EE]" />
                )}
              </div>
            </div>
            {!pass ? (
              ""
            ) : (
              <div class="flex mb-4 gap-10 w-full justify-center items-center">
                <input
                  type="text"
                  class="w-10 py-4 px-4 text-[#F9F6EE] border-none rounded-md bg-[#222222]"
                  maxLength="1"
                  name="code1"
                  onChange={Onchange}
                />
                <input
                  type="text"
                  class="w-10 py-4 px-4 text-[#F9F6EE] border-none rounded-md bg-[#222222]"
                  maxlength="1"
                  name="code2"
                  onChange={Onchange}
                />
                <input
                  type="text"
                  class="w-10 py-4 px-4 text-[#F9F6EE] border-none rounded-md bg-[#222222]"
                  maxlength="1"
                  name="code3"
                  onChange={Onchange}
                />
                <input
                  type="text"
                  class="w-10 py-4 px-4 text-[#F9F6EE] border-none rounded-md bg-[#222222]"
                  maxlength="1"
                  name="code4"
                  onChange={Onchange}
                />
                <div className="flex justify-center">
                  <button
                    className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg  w-fit"
                    onClick={() => handleverify()}
                  >
                    Verify
                  </button>
                </div>
              </div>
            )}
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
            <p
              onClick={() => {
                navigate("/login");
              }}
              className="font-poppins text-[#F9F6EE] hover:text-red-400 cursor-pointer "
            >
              Already a User ? Login
            </p>
            <button
              className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-poppins font-medium p-4 rounded-lg  w-fit"
              onClick={() => register()}
            >
              Create Account
            </button>
          </div>
        </div>
        <div className="hidden md:flex w-full max-h-[100vh] ">
          <img
            src={regimg}
            alt=""
            className="max-h-[100vh] w-full object-cover "
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
