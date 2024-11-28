import Image from "next/image";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
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
    <div className="bg-white rounded-[20px] border border-[#CCCCCC] py-6 px-8 ml-0 lg:ml-6">
      <p className="text-black text-[20px] font-light mb-2">
        Can’t find what you’re looking for?
      </p>
      <h4 className="font-normal text-[30px] text-black mb-4">
        Speak to a VMR Specialist!
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="pt-4 pb-2 px-4">
          <div className="flex flex-col space-y-1 mb-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First"
              className="w-full px-4 py-4 border border-[#CFCFD1] rounded-[8px] bg-white h-[67px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col space-y-1 mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-4 border border-[#CFCFD1] rounded-[8px] bg-white h-[57px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col space-y-1 mb-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-4 border border-[#CFCFD1] rounded-[8px] bg-white h-[57px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-1 mb-4">
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company"
              className="w-full px-4 py-4 border border-[#CFCFD1] rounded-[8px] bg-white h-[57px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full h-[57px] flex flex-row items-center justify-center mt-4 py-2 bg-gradient-to-r from-gradient-start to-gradient-end text-white font-roboto font-medium text-[18px] rounded-[8px] transition duration-200"
          >
            <div className="w-[18px] h-[18px] mr-3">
              <Image
                src="/icons/send-white.svg"
                alt="enter"
                width={18}
                height={18}
              />
            </div>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
