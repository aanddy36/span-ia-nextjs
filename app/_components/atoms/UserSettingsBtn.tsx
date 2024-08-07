"use client";

import { useUserSettings } from "@/contexts/UserSettingsContext";
import { FaPencilAlt } from "react-icons/fa";

const UserSettingsBtn = () => {
  const { setIsModalOpen } = useUserSettings();
  return (
    <button
      className=" absolute top-5 right-5 transition-opacity duration-200 opacity-50 hover:opacity-100"
      onClick={() => setIsModalOpen(true)}
    >
      <FaPencilAlt />
    </button>
  );
};

export default UserSettingsBtn;
