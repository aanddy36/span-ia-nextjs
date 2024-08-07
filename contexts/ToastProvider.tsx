"use client";

import React, { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider: FC<ToastProviderProps> = ({
  children,
}: ToastProviderProps) => {
  return (
    <>
      <ToastContainer position="bottom-left" autoClose={3000} theme="light" />
      {children}
    </>
  );
};

export default ToastProvider;
