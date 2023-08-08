import React from "react";
import thankyou from "../assets/images/icon-thank-you.svg";

interface FormFiveProps {
  formData: {
    name: string;
    email: string;
    number: string;
    plan: number;
    planType: string;
    addOns: number[];
  };
}

const FormPageFive: React.FC<FormFiveProps> = ({ formData }) => {
  return (
    <div className=" shadow-xl md:shadow-none m-4 md:m-0 top-28 rounded-lg right-0 left-0 bg-white absolute md:static container-fluid flex flex-col items-center py-12 md:py-6 pb-28 md:pb-0 px-6 md:px-20 lg:w-[35rem]">
      <img
        src={thankyou}
        alt="thankyou"
        className="w-[20%] md:w-[30%] lg:w-[30%]"
      />
      <h2 className="text-2xl text-blue-900 font-bold text-center mt-6 mb-6 md:text-3xl md:mb-10 lg:text-4xl lg:mb-12">
        Thank you!
      </h2>
      <p className="text-gray-500 mb-6 md:text-md md:mb-10 lg:text-md lg:mb-12 w-full md:w-[25rem]">
        Thanks for confiming your subscription! We hope you have fun using our
        platform. If you ever need support, email us at
        liamdiegosegura@gmail.com
      </p>
    </div>
  );
};

export default FormPageFive;
