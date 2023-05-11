import Community from "../Community";

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
        Some of our Partners
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:lg:gap-12  lg:gap-8 xl:gap-16 max-sm:mb-[106px]">
        {partners.map((item, index) => {
          return (
            <div
              key={index}
              className={`object-contain ${
                item.name === "digitalTimes"
                  ? "h-[180px] max-sm:h-[124px]"
                  : "h-[44px] max-sm:h-[34px]"
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
