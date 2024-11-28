"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import axiosInstance from "@/utils/axiosInstance";
import { useAuthStore } from "@/store/useAuthStore";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "react-toastify";
import axios from "axios";

const RootPage: React.FC = () => {
  const router = useRouter();
  const { setLoggedIn, isLoggedIn } = useAuthStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = "/home";
    }
    setRender(true);
  }, [isLoggedIn]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axiosInstance.post("/login_api.php", {
        username: email,
        password,
      });
      const token = response.data.data.session;
      localStorage.setItem("auth_token", token);
      document.cookie = `auth_token=${token}; path=/; secure; samesite=strict`;
      setLoggedIn(true);
      router.push("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error?.response?.data?.status_message ||
          "An unexpected error occurred.";
        toast.warning(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <Head>
        <title>Login | InvoicePie</title>
      </Head>
      {render && (
        <div className="min-h-screen flex flex-col md:flex-row">
          <div className="hidden md:block lg:w-[60%] bg-[#FCFCFC] h-full">
            <div className="relative min-h-screen">
              <Image
                src="/images/login-wallpaper.png"
                alt="Image1"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="w-full lg:w-[40%] bg-white flex flex-col justify-center p-4 sm:p-8 md:p-12 min-h-screen">
            <div className="max-w-[395px] height-fill-available md:max-w-[502px] md:w-[502px] mx-auto relative h-[95vh] md:h-full flex flex-col justify-center items-center">
              <div className="flex flex-col items-center justify-center absolute top-[6%]">
                <div className="relative w-[247px] h-[55px] md:w-[308px] md:h-[72px]">
                  <Image
                    src="/images/VMRLoginLogo.png"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <form className="height-fill-available" onSubmit={onFormSubmit}>
                <h2 className="font-roboto text-[24px] leading-[28px] font-semibold text-center mt-4 mb-4">
                  Login
                </h2>
                <p className="text-[16px] text-[#AAAAAA] font-roboto leading-[21px] font-normal text-center mb-6 capitalize">
                  Get access to a repository of global market <br /> insights
                  anytime, anywhere.
                </p>
                <div className="space-y-4">
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      className="w-full px-4 py-2 border border-[#CFCFD1] rounded-[8px] bg-white h-[57px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus={true}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full px-4 py-2 border border-[#CFCFD1] rounded-[8px] bg-white h-[57px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    >
                      {showPassword ? (
                        <AiFillEyeInvisible size={20} />
                      ) : (
                        <AiFillEye size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-8 h-[57px] py-2 bg-gradient-to-r from-gradient-start to-gradient-end text-white rounded-[8px] transition duration-200"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <ImSpinner2
                        className="animate-spin text-white"
                        size={18}
                      />
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>

                <p
                  onClick={() => router.push("/reset-password")}
                  className="text-[14px] mt-3 text-right text-black font-roboto font-semibold leading-[16px] hover:underline cursor-pointer"
                >
                  Forgot Password?
                </p>
              </form>

              <div className="flex flex-col items-center absolute bottom-4 left-0 right-0">
                <p className="text-center font-normal text-[#BBBBBB] text-[18px] font-roboto leading-[21px]">
                  Designed & Developed by{" "}
                </p>
                <p className="text-center font-normal text-[#BBBBBB] text-[18px] font-roboto leading-[21px]">
                  <span className="text-[#3B4ACC]">
                    Verified Market Research®
                  </span>{" "}
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RootPage;
