import React, { useState } from "react";
import FormPageOne from "./FormPageOne";
import FormPageTwo from "./FormPageTwo";
import FormPageThree from "./FormPageThree";
import FormPageFour from "./FormPageFour";

const Form: React.FC = () => {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    planType: "",
    plan: 0,
    addOns: [],
  });

  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox((prevState) => !prevState);
    setFormData((prev) => ({
      ...prev,
      plan: 0,
    }));
    console.log(checkBox ? "month" : "year");
  };

  const handleNextStep = () => {
    setPage((prev) => prev + 1);
    console.log(formData);
  };
  const handlePreviousStep = () => {
    setPage((prev) => prev - 1);
  };
  const handleChangePlan = () => {
    setPage(2);
  };

  const handleChange = (name: string, value: string | number | number[]) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    setFormData({
      name: "",
      email: "",
      number: "",
      planType: "",
      plan: 0,
      addOns: [],
    });
    setPage(1);
  };
  return (
    <div className="p-4 bg-white flex flex-wrap text-start">
      <div className="w-[300px] h-[32rem] bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover bg-center py-10 px-8 rounded-lg">
        <div className="flex justify-start items-center text-white mb-6">
          <div
            className={`${
              page === 1 ? "text-blue-900 bg-slate-100" : ""
            } mr-2 flex h-10 w-10 font-semibold items-center justify-center rounded-full border-2 border-white`}
          >
            <p>1</p>
          </div>
          <div className=" ">
            <p className="text-slate-300">STEP 1</p>
            <p className="font-semibold">YOUR INFO</p>
          </div>
        </div>
        <div className="flex justify-start items-center text-white mb-6 ">
          <div
            className={`${
              page === 2 ? "text-blue-900 bg-slate-100" : ""
            } mr-2 flex h-10 w-10 font-semibold items-center justify-center rounded-full border-2 border-white`}
          >
            <p>2</p>
          </div>
          <div className="">
            <p className="text-slate-300">STEP 2</p>
            <p className="font-semibold">SELECT PLAN</p>
          </div>
        </div>
        <div className="flex justify-start items-center text-white mb-6">
          <div
            className={`${
              page === 3 ? "text-blue-900 bg-slate-100" : ""
            } mr-2 flex h-10 w-10 font-semibold items-center justify-center rounded-full border-2 border-white`}
          >
            <p>3</p>
          </div>
          <div className="">
            <p className="text-slate-300">STEP 3</p>
            <p className="font-semibold">ADD-ONS</p>
          </div>
        </div>
        <div className="flex justify-start items-center text-white mb-6">
          <div
            className={`${
              page === 4 ? "text-blue-900 bg-slate-100" : ""
            } mr-2 flex h-10 w-10 font-semibold items-center justify-center rounded-full border-2 border-white`}
          >
            <p>4</p>
          </div>
          <div className="">
            <p className="text-slate-300"> STEP 4</p>
            <p className="font-semibold">SUMMARY</p>
          </div>
        </div>
      </div>
      {page === 1 && (
        <FormPageOne
          formData={formData}
          onNext={handleNextStep}
          onChange={handleChange}
        />
      )}
      {page === 2 && (
        <FormPageTwo
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          onChange={handleChange}
          handleCheckBox={handleCheckBox}
          checkBox={checkBox}
          checked={false}
        />
      )}
      {page === 3 && (
        <FormPageThree
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          onChange={handleChange}
        />
      )}
      {page === 4 && (
        <FormPageFour
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onChangePlan={handleChangePlan}
        />
      )}
    </div>
  );
};

export default Form;
