import useReadingProgress from "../hooks/useReadingProgress";

import Hero from "../components/Hero-2";
import Community from "../components/Community";
import Body from "../components/Donate/Body";
import image from "../assets/pattern.png";

export const Donate = () => {
  const completion = useReadingProgress();
  return (
    <>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <Hero
        title="Donate to our programs"
        h1="$1/day can make all the"
        h1Cont="difference"
        text="Every dollar donated makes a significant difference. We're also dedicated to breaking down barriers in tech by providing resources and support to help individuals pursue their passions."
        hero={image}
      />
      <Body />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};