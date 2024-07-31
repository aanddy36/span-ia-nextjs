"use client";

import { useRouter } from "next/navigation";

const ReturnButton = ({ children }: { children: string }) => {
  const router = useRouter();
  return (
    <button
      className=" rounded-md bg-red text-white font-medium px-8 py-1 w-fit transition-colors mt-8 capitalize
                    duration-200 hover:bg-hoverRed mx-auto"
      onClick={() => router.back()}
    >
      {children}
    </button>
  );
};

export default ReturnButton;
