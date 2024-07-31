"use client";

import {
  SectionContainer,
  SectionDescr,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/molecules/StaticSection";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();
  /* const goBackMultipleSteps = (steps:number) => {
    window.history.go(steps);
  }; */
  return (
    <SectionContainer>
      <SectionTitle>Error 404</SectionTitle>
      <SectionHeader>Oops! Something went wrong</SectionHeader>
      <SectionDescr>It seems like you got to a broken link</SectionDescr>
      <button
        onClick={() => router.back()}
        className=" rounded-md bg-red text-white font-medium px-8 py-1 w-fit transition-colors mt-8 capitalize
      duration-200 hover:bg-hoverRed mx-auto"
      >
        Go back
      </button>
    </SectionContainer>
  );
};

export default Error;
