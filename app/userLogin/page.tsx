"use client";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    setLoader(true);
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
        router.push("/Dashboard");
        setLoader(false);
      } else {
        // Response is not successful, throw an error
        setError("Invalid Credentials");
        setLoader(false);
        throw new Error("Network response was not ok");
      }
    } catch (error: any) {
      // An error occurred during the fetch operation
      console.error("Fetch Error:", error.message);
    }
  };

  return (
    <main className="h-screen">
      <div className="">
        <Navbar />
        <div className="flex justify-center items-center pt-2">
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
                <div className="relative">
                  <input
                    className="border-b-2 border-[#B5B5BE] p-2 text-[#000000]  text-[16px] placeholder-[#000000] md:w-full  focus:outline-none leading-tight text-1xl"
                    id="password"
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                    value={password}
                  />

                  {showPassword ? (
                    <FaEye
                      onClick={handleShowPassword}
                      className="cursor-pointer text-xl absolute top-2 right-2"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={handleShowPassword}
                      className="cursor-pointer text-xl absolute top-2 right-2"
                    />
                  )}
                </div>
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
                <div className="flex">
                  {loader ? (
                    <button
                      type="button"
                      className="bg-gray-800 flex text-lg text-white font-bold border rounded-lg p-2 px-6 w-auto leading-tight focus:outline-none focus:shadow-outline"
                      onClick={handleSubmit}
                    >
                      <div className="flex">
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-200 animate-spin dark:text-white fill-white"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                        {"   "}
                        <span className="mx-2">LOGIN</span>
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-gray-800 text-lg text-white font-bold border rounded-lg p-2 px-6 w-auto leading-tight focus:outline-none focus:shadow-outline"
                      onClick={handleSubmit}
                    >
                      LOGIN
                    </button>
                  )}
                </div>
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
