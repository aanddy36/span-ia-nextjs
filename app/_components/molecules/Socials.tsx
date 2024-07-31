"use client";

import { Button } from "@/app/_components/shadcn/button";
import usePaths from "@/hooks/usePaths";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Socials = () => {
  const { locale } = usePaths();
  const handleClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: `/${locale}/profile/user` });
  };

  return (
    <div className=" flex items-center w-full gap-2 mt-4">
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() => handleClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() => handleClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Socials;
