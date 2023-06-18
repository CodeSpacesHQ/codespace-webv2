import { teams } from "../../constants/teams";
import { useWidth } from "../../hooks/useWidth";

import AnimateWords from "../../config/textAnimation";

export const Team = () => {
  const width = useWidth();

  const isMobile = width <= 640;
  return (
    <section className="bg-[#FFFFFF] px-7 sm:px-16 lg:px-[65px] xl:px-[101px] pt-8 sm:pt-12 md:pt-16 pb-[234px] max-sm:pb-[184px] max-w-[1800px] mx-auto">
      <h2
        className="font-gelion font-[700] sm:mb-6 
            text-center text-[32px] sm:text-[54px] lg:text-[64px] leading-[72px] text-[#000000]"
      >
        <AnimateWords text={isMobile ? "Meet the Team" : "Core Team"} />
      </h2>

      <div>
        <p className=" font-gelion md:font-dm-sans mb-9 sm:mb-16 text-[#9F9A9A] font-normal text-[16px]/[20px] sm:text-[32px]/[48px] mx-auto text-center">
          We're a diverse, close-knit team on an adventure to build something
          enduring, while learning something new, everyday.
        </p>
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-center xl:gap-x-[31px] sm:gap-y-[118px] gap-x-12 gap-y-16">
          {teams.map((team) => {
            const { id, name, role, image } = team;
            return (
              <div
                key={id}
                className={`flex flex-col items-center justify-center`}
              >
                <div className="w-[245px] h-[245px] rounded-full overflow-hidden flex justify-center items-start bg-gray-500 object-cover mb-7">
                  <img src={image} alt={name} className="object-cover w-full" />
                </div>

                <h3 className="font-dm-sans font-[700] text-[24px]/[45px] text-[#000000] text-center tracking-normal">
                  <AnimateWords text={name} />
                </h3>
                <p className="font-dm-sans text-[#868687] font-[500] text-[24px]/[45px] text-center tracking-normal">
                  <AnimateWords text={role} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
