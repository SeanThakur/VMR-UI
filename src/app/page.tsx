"use client";

import React, { useState } from "react";
import Head from "next/head";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import axiosInstance from "@/utils/axiosInstance";
import { useAuthStore } from "@/store/useAuthStore";

const RootPage: React.FC = () => {
  const router = useRouter();
  const { setLoggedIn } = useAuthStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = axiosInstance.post("/login_api.php", {
        username: email,
        password,
      });
      // localStorage.setItem("auth_token", token);
      // document.cookie = `auth_token=${token}; path=/; secure; samesite=strict`;
      setLoggedIn(true);
      router.push("/home");
    } catch (error) {
      console.error("Login failed:", error);
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
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="hidden md:block px-[33px] lg:w-3/5 bg-gray-100 h-full">
          <Slider {...carouselSettings} className="min-h-screen">
            <div className="relative min-h-screen">
              <Image
                src="/images/carousel1.png"
                alt="Image 1"
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
            <div className="relative min-h-screen">
              <Image
                src="/images/carousel2.gif"
                alt="Image 2"
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
            <div className="relative min-h-screen">
              <Image
                src="/images/carousel3.png"
                alt="Image 2"
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
          </Slider>
        </div>

        <div className="w-full lg:w-2/5 bg-white flex flex-col justify-center p-4 sm:p-8 md:p-12 min-h-screen shadow-lg shadow-gray-500">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative w-60 h-32">
              <Image
                src="/images/VMRLogo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mt-4 mb-1">
              Welcome
            </h2>
            <p className="text-lg text-gray-500 text-center">
              Verified Market Intelligence
            </p>
            <div className="w-8 h-0.5 bg-gray-300 my-3"></div>
            <p className="text-lg text-gray-600 text-center mb-2">
              Get access to a repository of global market insights anytime,
              anywhere.
            </p>
          </div>

          <form className="space-y-4" onSubmit={onFormSubmit}>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <button
              type="submit"
              className="w-full py-2 bg-[#3b4acc] text-white rounded-md hover:bg-[#3241b0] transition duration-200"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign In"}
            </button>

            <p className="text-sm text-right text-blue-600 hover:underline cursor-pointer">
              Forgot Password?
            </p>
          </form>

          <div className="flex flex-col items-center">
            <p className="text-center text-gray-500 text-sm">
              Designed & Developed by{" "}
            </p>
            <p className="text-center text-gray-500 text-sm">
              <span className="text-blue-600">Verified Market Research®</span>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RootPage;
