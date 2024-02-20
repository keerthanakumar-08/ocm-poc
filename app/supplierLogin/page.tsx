"use client";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";

export default function SupplierLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const loginPayload = {
      email: email,
      password: password,
    };

    console.log(loginPayload);
  };

  return (
    <main>
      <div className="min-h-[92vh]">
        <div className="bg-[#FFE5D8] min-h-[20vh] flex justify-center items-center">
          <img
            className="ml-4 pl-0 w-52 cursor-pointer"
            // src={Heading}
            // onClick={() => naviagte("/")}
            loading="eager"
          ></img>
        </div>
        <div className="flex justify-center items-center pt-2 lg:mt-[50px]">
          <div className="flex justify-center items-center">
            <form className="md:px-10 lg:px-20 w-[300px] sm:w-[550px] shadow-2xl border bg-[#FFFFFF] rounded-[30px] p-6">
              <div className="text-[#14px] text-[#B5B5BE] mt-5 text-center">
                SUPPLIER LOGIN FIRST
              </div>
              <div className="font-semibold text-[24px] text-[#8C7E79] mt-5 mb-11 text-center">
                Get Started
              </div>
              <div className="mb-10">
                <label className="block text-[#8C7E79] text-[16px] font-semibold focus:outline-none leading-tight">
                  Email Address
                </label>
                <input
                  className="border-b-2 border-[#B5B5BE] p-2 text-[#000000]  text-[16px] placeholder-[#000000] md:w-full  focus:outline-none leading-tight text-1xl lowercase"
                  id="email"
                  type="email"
                  onChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                />
              </div>
              <div className="mb-10">
                <label className="block text-[#8C7E79] text-[16px] font-semibold focus:outline-none leading-tight">
                  Password
                </label>
                <input
                  className="border-b-2 border-[#B5B5BE] p-2 text-[#000000]  text-[16px] placeholder-[#000000] md:w-full  focus:outline-none leading-tight text-1xl"
                  id="password"
                  type="password"
                  name="password"
                  onChange={(e: any) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <section>
                  <input
                    className="mr-2 leading-tight text-2xl text-[#696974]"
                    type="checkbox"
                    id="remember"
                  />
                  <label className="text-sm w-36 text-[#8C7E79]">
                    Remember Me
                  </label>
                </section>
                <button
                  className="appearance-none py-3 text-[#D8B37D] focus:shadow-outline text-1xl "
                  type="button"
                  // onClick={() => {
                  //   naviagte(
                  //     {
                  //       pathname: "/forgotpassword",
                  //     },
                  //     {
                  //       state: { pathURL },
                  //     }
                  //   );
                  // }}
                >
                  Signup
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="bg-[#D8B37D] text-lg text-white font-bold border rounded-lg p-2 px-6 w-auto leading-tight focus:outline-none focus:shadow-outline"
                  onClick={handleSubmit}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center py-10">
          <span className="text-[14px] text-[#92929D] ">
            &copy; 2023 Our Creative Moments
          </span>
        </div>
      </div>

      <Footer />
    </main>
  );
}
