import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
