"use client";
import { CustomButtonProps } from "@/types";
import React, { Children } from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      onClick={() => {
        handleClick;
      }}
      disabled={false}
      type={btnType || "button"}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
