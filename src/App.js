import React from "react";

const InputField = ({ label, placeholder, type }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-400 rounded-md px-5 py-3"
      />
    </div>
  );
};

const RadioInputField = ({ label, id, name }) => {
  return (
    <div className="flex items-center">
      <input type="radio" name={name} value={"Male"} id={id} />
      <label className="ml-3 font-semibold" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const App = () => {
  return (
    <div className="w-full h-screen bg-blue-800 flex items-center justify-center">
      <div className="w-[800px] p-10 bg-white rounded-md shadow-md">
        <form className="grid grid-cols-1 gap-5">
          <h4 className="text-3xl font-semibold">Registration</h4>
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label={"Full Name"}
              placeholder={"Enter your name"}
              type={"text"}
            />
            <InputField
              label={"Username"}
              placeholder={"Enter your username"}
              type={"text"}
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label={"Email"}
              placeholder={"Enter your email"}
              type={"text"}
            />
            <InputField
              label={"Phone Number"}
              placeholder={"Enter your number"}
              type={"text"}
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label={"Password"}
              placeholder={"Enter your password"}
              type={"text"}
            />
            <InputField
              label={"Confirm Password"}
              placeholder={"Confirm your password"}
              type={"text"}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <h5 className="font-semibold text-xl">Gender</h5>
            <div className="grid grid-cols-3 gap-8">
              <RadioInputField label={"Male"} id={"male"} name={"gender"} />
              <RadioInputField label={"Female"} id={"female"} name={"gender"} />
              <RadioInputField label={"Other"} id={"other"} name={"gender"} />
            </div>
          </div>
          <button className="w-full py-3 rounded-md bg-blue-800 text-white font-semibold text-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
