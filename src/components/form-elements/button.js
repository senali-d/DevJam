import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-white bg-[#7B3FE4] hover:bg-[#5923b6] focus:ring-1 focus:outline-none focus:ring-[#5b7a8a] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-none"
    >
      {label}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  label: "",
  onClick: () => {},
};
