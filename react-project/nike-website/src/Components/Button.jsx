import React from "react";

const Button = ({ label, iconURL }) => (
  <div className="flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white">
    {label}
    <img
      src={iconURL}
      alt="arrow right icon"
      className="ml-2 h-5 w-5 rounded-full"
    />
  </div>
);

export default Button;
