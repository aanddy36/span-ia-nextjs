import { FC } from "react";
import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/molecules/StaticSection";
import { Messages, ReviewType } from "@/types";
import SingleTestimony from "../molecules/SingleTestimony";
import { getMessages } from "next-intl/server";

interface TestimonialsProps {
  locale: string;
}

const Testimonials: FC<TestimonialsProps> = async ({ locale }) => {
  const {
    homePage: { testimonial },
  } = (await getMessages({ locale })) as Messages;
  const info: ReviewType[] = [
    {
      sex: "men",
      name: "Andrew Del Chiaro",
      classes: 32,
      review:
        "I am so grateful to have had Javier as my Spanish teacher! Her passion for the language is contagious, and she creates a dynamic and engaging learning environment.",
    },
    {
      sex: "women",
      name: "Hillary Brown",
      classes: 14,
      review:
        "Javier is a knowledgeable and dedicated Spanish teacher. His lessons are well-structured, and he provides a good balance between grammar, vocabulary, and conversational practice.",
    },
    {
      sex: "men",
      name: "Dan Brown",
      classes: 64,
      review:
        "Javier is an exceptional Spanish teacher who is not only knowledgeable but also incredibly patient. He takes the time to understand each student's learning style and adapts his teaching methods accordingly.",
    },
  ];

  return (
    <SectionContainer className=" bg-homeBg px-8 py-20">
      <SectionTitle>{testimonial.title}</SectionTitle>
      <SectionHeader variant="sm">{testimonial.header}</SectionHeader>
      <ul className=" flex flex-col max-w-[1128px] mx-auto justify-between w-full gap-12 items-center mt-10 full:flex-row">
        {info.map((review) => {
          return <SingleTestimony key={review.name} message={testimonial.classes} {...review} />;
        })}
      </ul>
    </SectionContainer>
  );
};

export default Testimonials;
