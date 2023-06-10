import { icon1, icon2 } from "../../assets/icon";

import AnimateWords from "../../config/textAnimation";

export const Vision = () => {
  return (
    <section className=" bg-[#F6F6FF] px-7 xl:px-[102px] sm:px-[64px] pb-9 sm:pb-28">
      <div className="flex flex-col items-center justify-center md:flex-row gap-x-12 max-w-[1500px] mx-auto px-0 [@media(min-width:1600px)]:px-[54px] [@media(min-width:1670px)]:px-[84px]">
        <div className="w-full mb-6 md:w-1/2 md:mb-0">
          <div className="mb-6 md:mb-10 mt-10 w-[60px] h-[50px] md:w-[80px] md:h-[80px] object-cover">
            <img
              src={icon1}
              alt="Our Vision"
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h2
              className="text-[#000000] font-epilogue
                          text-[16px] sm:text-[20px] mb-[15px] lg:text-[24px] leading-[18px] sm:leading-[32px]  tracking-[3px] font-normal"
            >
              <AnimateWords text="OUR VISION" />
            </h2>
          </div>

          <div>
            <h3 className="font-poppins font-[700] text-[28px] sm:text-[32px] lg:text-[40px] mb-7 tracking-[-1px] text-[#000000] leading-[64px]">
              <AnimateWords text="Explore.Lead.Do" />
            </h3>
          </div>

          <div>
            <p className=" font-dm-sans font-normal text-[18px]/6 lg:text-[24px]/8 leading-[23px] sm:leading-[31px] text-[#9F9A9A]">
              Inspiring the growth of the African continent, one tech talent at
              a time.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className=" mb-6 md:mb-10 mt-10 w-[60px] h-[50px] md:w-[80px] md:h-[80px] object-cover">
            <img
              src={icon2}
              alt="What we do"
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h2
              className="text-[#000000] font-epilogue
                         text-[16px] sm:text-[20px] mb-[15px] lg:text-[24px] leading-[18px] sm:leading-[32px] tracking-[3px] font-normal"
            >
              <AnimateWords text="WHY WE DO THIS" />
            </h2>
          </div>

          <div>
            <h3
              className=" font-poppins font-[700] text-[28px] sm:text-[32px] lg:text-[40px] mb-7
                        tracking-[-1px] text-[#000000] leading-[64px]"
            >
              <AnimateWords text="Our Mission" />
            </h3>
          </div>

          <div>
            <p className=" font-dm-sans font-normal text-[18px]/6 lg:text-[24px]/8 leading-[23px] sm:leading-[31px] text-[#9F9A9A]">
              Our mission at Code Space is to create a thriving community that
              fosters technical growth, facilitates networking opportunities,
              provides mentorship, and enhances visibility for individuals at
              all levels of their careers in the field of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
