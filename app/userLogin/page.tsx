"use client";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";

export default function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const loginPayload = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch("http://192.168.29.233:8055/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginPayload),
      });
      // Check if the response was successful (status in the range 200-299)
      if (response.ok) {
        // Response is successful, process it
        const responseData = await response.json();
        console.log("Response Data:", responseData);
        console.log(responseData.data, "responseData.data.data");
        localStorage.setItem("access_token", responseData.data.access_token);
        localStorage.setItem("refresh_token", responseData.data.refresh_token);
        router.push("/Dashboard", { scroll: false });
      } else {
        // Response is not successful, throw an error
        setError("Invalid Credentials");
        throw new Error("Network response was not ok");
      }
    } catch (error: any) {
      // An error occurred during the fetch operation
      console.error("Fetch Error:", error.message);
    }
  };

  return (
    <main>
      <div className="min-h-[92vh]">
        <Navbar />
        <div className="flex justify-center items-center pt-2 lg:mt-[50px]">
          <div className="flex justify-center items-center mt-32">
            <form className="md:px-10 lg:px-20 w-[300px] sm:w-[550px] shadow-2xl border bg-[#FFFFFF] rounded-[30px] p-6">
              <div className="text-[#14px] text-[#B5B5BE] mt-5 text-center">
                USER LOGIN FIRST
              </div>
              <div className="font-semibold text-[24px] text-[#8C7E79] mt-5 mb-5 text-center">
                Get Started
              </div>
              <p className="text-center pb-5 text-red-500">{error}</p>
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
                  onClick={() => {
                    router.push("/SignUp", { scroll: false });
                  }}
                >
                  Signup
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="bg-gray-800 text-lg text-white font-bold border rounded-lg p-2 px-6 w-auto leading-tight focus:outline-none focus:shadow-outline"
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

      {/* <Footer /> */}
    </main>
  );
}
