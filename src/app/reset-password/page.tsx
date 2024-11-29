"use client";

import React, { Fragment, useState } from "react";
import Head from "next/head";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import axiosInstance from "@/utils/axiosInstance";
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RootPage: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [sentCode, setSentCode] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [newOTP, setNewOTP] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
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
          if (response.data.status === "error") {
            toast.warning(response.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            return;
          }
          setSentCode(true);
        } else {
          setSentCode(false);
        }
      } else {
        if (confirmPassword != password) {
          toast.warning(
            "New password and confirm password is not matched! please try again",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          return;
        }
        const response = await axiosInstance.post("/otp_validate.php", {
          email: email,
          otp: newOTP,
          new_password: password,
        });
        if (response.data.status != "error") {
          toast.success("Your password is successfully changed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          router.push("/");
          return;
        } else {
          let erroMessage =
            response.data.message ||
            "Something went wrong, please try again later";
          toast.warning(erroMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setSentCode(false);
          setNewOTP("");
          setPassword("");
          setConfirmPassword("");
          return;
        }
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
              <p className="text-[12px] text-[#AAAAAA] font-roboto leading-[21px] font-normal text-center mb-6">
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
                    <input
                      type={"text"}
                      value={newOTP}
                      onChange={(e) => setNewOTP(e.target.value)}
                      placeholder="OTP"
                      className="w-full text-[14px] px-4 py-2 border border-[#CFCFD1] rounded-[8px] bg-white h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New Password"
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
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className="w-full text-[14px] px-4 py-2 border border-[#CFCFD1] rounded-[8px] bg-white h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                      >
                        {showConfirmPassword ? (
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
