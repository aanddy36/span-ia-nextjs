import { useUser } from "@/contexts/UserContext";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import SignUpPopup from "@/app/_components/molecules/SignUpPopup";
import LoginPopup from "@/app/_components/molecules/LoginPopup";

const AuthPopup = () => {
  const { setIsOpenAuthModal } = useUser();
  const [showLogin, setShowLogin] = useState(false);
  const changeMode = (value: boolean) => {
    setShowLogin(value);
  };
  return (
    <div className=" fixed inset-0 bg-black/50 z-[20]">
      <div
        className=" w-[98%] laptop:w-[581px] bg-white rounded-lg absolute px-5 tablet:px-8 pb-8
        top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] shadow-md shadow-black/30 pt-12
        flex flex-col gap-8"
      >
        <FaXmark
          className="absolute top-6 right-6 transition-transform duration-200 hover:rotate-90 cursor-pointer text-3xl"
          onClick={() => setIsOpenAuthModal(false)}
        />
        <h1 className=" text-[32px] font-medium leading-[3px]">
          Welcome to SpanIA
        </h1>
        {showLogin ? (
          <LoginPopup changeMode={changeMode} />
        ) : (
          <SignUpPopup changeMode={changeMode} />
        )}
      </div>
    </div>
  );
};

export default AuthPopup;
