import textAnimation from "../../config/textAnimation";

const Body = () => {
  const animateWords = textAnimation("up");
  return (
    <div className="w-full h-[400px] sm:h-[600px] max-w-[1500px] mx-auto">
      <div className="flex justify-center w-full mt-[164px] sm:mt-64">
        <h2 className="font-gelion text-[#868687] font-semibold max-sm:font-medium max-sm:text-[20px]/6 max-xl:text-[40px] text-[55px]/[66px] tracking-[-0.02em]">
          {animateWords("New merchandise coming soon... 🚀🚀")}
        </h2>
      </div>
    </div>
  );
};

export default Body;
