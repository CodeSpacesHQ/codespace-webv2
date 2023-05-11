import Hero from "../components/Hero-2";
import Community from "../components/Community";
import Body from "../components/Donate/Body";

export const Donate = () => {
  return (
    <>
      <Hero
        title="Donate to our programs"
        h1="$1/day can make all the"
        h1Cont="difference"
        text="Every dollar donated makes a significant difference. We're also dedicated to breaking down barriers in tech by providing resources and support to help individuals pursue their passions.
        "
      />
      <Body />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};
