import Image from "next/image";
import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  urgency: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    urgency: "normal",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#FAF8FF] rounded-[10px] py-6 px-10 h-[94%] ml-6">
      <p className="text-black text-[20px] font-light mb-2">
        Can’t find what you’re looking for?
      </p>
      <h4 className="font-normal text-[30px] text-black mb-4">
        Speak to a VMR Specialist!
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#eff0ef] pt-4 pb-2 px-4 border-b-2 border-black">
          <div className="flex flex-col space-y-1 mb-4">
            <label
              htmlFor="name"
              className="font-normal text-[12px] text-black"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First"
                className="w-1/2 px-3 text-[14px] h-[38px] rounded-md bg-[#cbcbcb] placeholder-black placeholder:text-sm placeholder:font-light"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                className="w-1/2 px-3 text-[14px] h-[38px] rounded-md bg-[#cbcbcb] placeholder-black placeholder:text-sm placeholder:font-light"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col space-y-1 mb-4">
            <label
              htmlFor="email"
              className="font-normal text-[12px] text-black"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full  px-3 text-[14px] h-[38px] rounded-md bg-[#cbcbcb] placeholder-black placeholder:text-sm placeholder:font-light"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col space-y-1 mb-4">
            <label
              htmlFor="phone"
              className="font-normal text-[12px] text-black"
            >
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="w-full  px-3 text-[14px] h-[38px] rounded-md bg-[#cbcbcb] placeholder-black placeholder:text-sm placeholder:font-light"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-1 mb-4">
            <label
              htmlFor="company"
              className="font-normal text-[12px] text-black"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company"
              className="w-full  px-3 text-[14px] h-[38px] rounded-md bg-[#cbcbcb] placeholder-black placeholder:text-sm placeholder:font-light"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Urgency Radio Buttons */}
          <div className="flex flex-col space-y-2 mb-4">
            <label className="font-normal text-[12px] text-black">
              Please tell us the priority level
              <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col">
              <label className="flex items-center space-x-2 mb-6">
                <input
                  type="radio"
                  name="urgency"
                  value="low"
                  className="text-[#cbcbcb] focus:ring-[#cbcbcb]"
                  checked={formData.urgency === "low"}
                  onChange={handleChange}
                />
                <span className="font-normal text-[12px] text-black">Low</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="urgency"
                  value="normal"
                  className="text-[#cbcbcb] focus:ring-[#cbcbcb]"
                  checked={formData.urgency === "normal"}
                  onChange={handleChange}
                />
                <span className="font-normal text-[12px] text-black">
                  Normal
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="fill-available flex justify-end">
          <button
            type="submit"
            className="mt-8 px-4 py-2 text-[#0DAFBF] bg-white border border-[#0DAFBF] rounded-[5px] uppercase font-normal text-[14px] flex flex-row items-center"
          >
            <div className="w-[18px] h-[18px] mr-2">
              <Image src="/icons/send.svg" alt="enter" width={18} height={18} />
            </div>
            send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
