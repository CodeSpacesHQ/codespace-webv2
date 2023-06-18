import Community from "../Community";

import AnimateWords from "../../config/textAnimation";

import {
  digitalTimes,
  guardians,
  technext,
  couchBase,
} from "../../assets/icon";

const partners = [
  { where: couchBase, name: "couchbase" },
  { where: technext, name: "technext" },
  { where: digitalTimes, name: "digitalTimes" },
  { where: guardians, name: "guardians" },
];

export const Partners = () => {
  return (
    <section className=" bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
      <h2
        className="text-black text-center mb-4 max-lg:mb-[60px]
        font-gelion font-semibold text-[28px] sm:text-[40px] leading-[48px] tracking-[-0.02em]"
      >
        <AnimateWords text="Some of our Partners" />
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:lg:gap-12  lg:gap-8 xl:gap-16 max-lg:mb-[106px]">
        {partners.map((item, index) => {
          return (
            <div
              key={index}
              className={`object-contain ${
                item.name === "digitalTimes"
                  ? "h-[180px] max-sm:h-[106px]"
                  : "h-[44px] max-sm:h-[28px]"
              }`}
            >
              <img src={item.where} className="w-full h-full" alt={item.name} />
            </div>
          );
        })}
      </div>
      <Community />
    </section>
  );
};
