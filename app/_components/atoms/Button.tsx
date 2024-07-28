import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps {
  children: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className="px-4 py-2 text-white bg-red rounded-lg text-[14px] w-full mt-14
        transition-colors duration-200 hover:bg-hoverRed disabled:opacity-50 
        disabled:cursor-not-allowed"
      >
        {children}
      </button>
    );
  }
);

export default Button;
