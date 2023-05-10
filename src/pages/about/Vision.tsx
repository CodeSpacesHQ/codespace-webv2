import { icon1, icon2 } from "../../assets/icon";

export const Vision = () => {
  return (
    <section className=" bg-[#F6F6FF] px-7 sm:px-[65px] xl:px-[94px] xl:pe-[64px] pb-9 sm:pb-28">
      <div className="flex flex-col items-center justify-center md:flex-row gap-x-12">
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
              OUR VISION
            </h2>
          </div>

          <div>
            <h3 className="font-poppins font-[700] text-[28px] sm:text-[32px] lg:text-[40px] mb-7 tracking-[-1px] text-[#000000] leading-[64px]">
              Explore.Lead.Do
            </h3>
          </div>

          <div>
            <p className=" font-dm-sans font-normal text-[18px]/6 lg:text-[24px]/8 leading-[23px] sm:leading-[31px] text-[#9F9A9A]">
              We are lowering the barrier of entry to accepting global payments
              by bridging the gap between fiat and crypto currencies. Achieving
              swift and seamless payment processing is the goal for us at
              Lazerpay, by building a decentralised and multi-chain payment
              gateway.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className=" mb-6 md:mb-8 w-[50px] h-[65px] md:w-[80px] md:h-[100px] object-cover">
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
              WHY WE DO THIS
            </h2>
          </div>

          <div>
            <h3
              className=" font-poppins font-[700] text-[28px] sm:text-[32px] lg:text-[40px] mb-7
                        tracking-[-1px] text-[#000000] leading-[64px]"
            >
              Explore.Lead.Do
            </h3>
          </div>

          <div>
            <p className=" font-dm-sans font-normal text-[18px]/6 lg:text-[24px]/8 leading-[23px] sm:leading-[31px] text-[#9F9A9A]">
              We are lowering the barrier of entry to accepting global payments
              by bridging the gap between fiat and crypto currencies. Achieving
              swift and seamless payment processing is the goal for us at
              Lazerpay, by building a decentralised and multi-chain payment
              gateway.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
