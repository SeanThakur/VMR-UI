"use client";

import React, { Fragment, useState } from "react";
import Head from "next/head";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import axiosInstance from "@/utils/axiosInstance";
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";
import { toast } from "react-toastify";

const RootPage: React.FC = () => {
  //   const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [sentCode, setSentCode] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prev) => !prev);
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!sentCode) {
        const response = await axiosInstance.post("/request_otp.php", {
          email: email,
        });
        if (response) {
          setSentCode(true);
          console.log("reset login code response", response);
        } else {
          setSentCode(false);
        }
      } else {
        // const response = await axiosInstance.post("/otp_validate.php", {
        //   email: email,
        //   otp: otpCode,
        //   new_password: newPassword,
        // });
      }
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
    }
  };

  return (
    <>
      <Head>
        <title>Login | InvoicePie</title>
      </Head>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="hidden md:block lg:w-[50%] bg-[#FCFCFC] h-full">
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

        <div className="w-full lg:w-[50%] bg-white flex flex-col justify-center p-4 sm:p-8 md:p-12 min-h-screen">
          <div className="max-w-[395px] height-fill-available md:max-w-[502px] md:w-[400px] mx-auto relative h-[95vh] md:h-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center absolute top-[6%]">
              <div className="relative w-[247px] h-[55px]">
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
              <h2 className="font-roboto text-[20px] leading-[28px] font-semibold text-center mt-4 mb-4">
                Reset Password
              </h2>
              <p className="text-[12px] text-[#AAAAAA] font-roboto leading-[21px] font-normal text-center mb-6 capitalize">
                {sentCode ? (
                  "Please enter new password"
                ) : (
                  <>
                    To reset your password, a six-digit one-time <br /> code
                    will be sent to your email.
                  </>
                )}
              </p>
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="w-full text-[14px] px-4 py-4 border border-[#CFCFD1] rounded-[8px] bg-white h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus={true}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {sentCode && (
                  <Fragment>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        className="w-full text-[14px] px-4 py-2 border border-[#CFCFD1] rounded-[8px] bg-white h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={toggleNewPasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                      >
                        {showNewPassword ? (
                          <AiFillEyeInvisible size={20} />
                        ) : (
                          <AiFillEye size={20} />
                        )}
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Confirm New Password"
                        className="w-full text-[14px] px-4 py-2 border border-[#CFCFD1] rounded-[8px] bg-white h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  </Fragment>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-[14px] h-[40px] mt-8 py-2 bg-gradient-to-r from-gradient-start to-gradient-end text-white rounded-[8px] transition duration-200"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <ImSpinner2 className="animate-spin text-white" size={18} />
                  </div>
                ) : sentCode ? (
                  "Reset Password"
                ) : (
                  "Code"
                )}
              </button>
            </form>

            <div className="flex flex-col items-center absolute bottom-4 left-0 right-0">
              <p className="text-center font-normal text-[#BBBBBB] text-[14px] font-roboto leading-[21px]">
                Designed & Developed by{" "}
              </p>
              <p className="text-center font-normal text-[#BBBBBB] text-[14px] font-roboto leading-[21px]">
                <span className="text-[#3B4ACC]">
                  Verified Market Research®
                </span>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RootPage;
