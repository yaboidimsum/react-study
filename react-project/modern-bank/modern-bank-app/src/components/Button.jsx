/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`bg-blue-gradient mt-5 rounded-[10px] px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
