import { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface StaticSectionProps {
  children: ReactNode;
}

interface ImageProps {
  image: StaticImageData;
  alt: string;
}

interface ContProps {
  variant?: "left" | "center";
  children: ReactNode;
  bg?: "gray" | "white";
  py?: "none" | "sm";
  className?: ClassNameValue;
}

interface HeaderProps {
  variant?: "sm" | "lg";
  children: ReactNode;
}

interface BtnProps {
  path: string;
  children: ReactNode;
}

interface AtomProps {
  children: ReactNode;
}

export const StaticSection: FC<StaticSectionProps> & {
  Image: FC<ImageProps>;
  Cont: FC<ContProps>;
  Title: FC<AtomProps>;
  Header: FC<HeaderProps>;
  Descr: FC<AtomProps>;
  Btn: FC<BtnProps>;
} = ({ children }) => {
  return (
    <section className="w-full py-12 px-8">
      <div className="grid gap-10 grid-cols-1 laptop:grid-cols-2 max-w-[1128px] mx-auto">
        {children}
      </div>
    </section>
  );
};

StaticSection.Image = ({ image, alt }) => {
  return (
    <div>
      <Image
        src={image}
        quality={100}
        alt={alt}
        className=" aspect-auto w-full max-w-[500px] mx-auto laptop:max-w-full"
      />
    </div>
  );
};

StaticSection.Cont = ({
  variant = "left",
  children,
  bg = "white",
  py = "none",
  className,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-3 justify-center text-center bg-white w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

StaticSection.Title = ({ children }) => {
  return (
    <h4 className="font-medium text-red text-lg capitalize">{children}</h4>
  );
};

StaticSection.Header = ({ children, variant = "lg" }) => {
  const styles =
    variant === "sm"
      ? "text-[32px] tablet:text-[40px] font-semibold"
      : `font-extrabold text-[40px] 
  tablet:text-[50px] full:text-[60px] tablet:leading-[76px] leading-[60px] capitalize`;
  return <h2 className={styles}>{children}</h2>;
};

StaticSection.Descr = ({ children }) => {
  return <h4 className="text-[14px] font-light">{children}</h4>;
};

StaticSection.Btn = ({ children, path }) => {
  return (
    <Link
      href={path}
      className=" rounded-md bg-red text-white font-medium px-8 py-1 w-fit transition-colors mt-8 capitalize
      duration-200 hover:bg-hoverRed mx-auto laptop:mx-0"
    >
      {children}
    </Link>
  );
};

export const SectionImg = StaticSection.Image;
export const SectionContainer = StaticSection.Cont;
export const SectionTitle = StaticSection.Title;
export const SectionHeader = StaticSection.Header;
export const SectionDescr = StaticSection.Descr;
export const SectionBtn = StaticSection.Btn;
