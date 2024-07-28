"use client";

import { Button } from "@/app/_components/shadcn/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Socials = () => {
  return (
    <div className=" flex items-center w-full gap-2 mt-4">
      <Button size="sm" variant="outline" className="w-full" onClick={() => {}}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button size="sm" variant="outline" className="w-full" onClick={() => {}}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Socials;
