import Hero from "../components/Hero-2";
import Community from "../components/Community";
import Body from "../components/Shop/Body";
import image from "../assets/pattern2.png";

export const Shop = () => {
  const isPresent = true;
  return (
    <>
      <Hero
        title="STORE"
        h1="Celebrate Your Journey"
        h1Cont="with Style and Swag"
        text="Ignite your style. Embrace your tech brilliance. Be an CodeSpacers!"
        hero={image}
        star={isPresent}
      />
      <Body />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};
