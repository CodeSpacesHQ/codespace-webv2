// import { motion } from "framer-motion";
// import { slideAnimation } from "../../config/motion";
import AnimateWords from "../../config/textAnimation";

import { communityContents } from "../../data/community";
import CountingAnimation from "./CountingAnimation";

const CommunityBody = () => {
  return (
    <section className="px-7 sm:px-16 lg:px-[65px] xl:px-[101px] 2xl:px-[121px] font-inter mb-32 max-w-[1500px] mx-auto">
      <div className="mt-[67px] mx-auto max-w-[1500px] px-0 mb-[100px]">
        <h2 className="mb-2 font-semibold text-primary">
          <AnimateWords text="Our Values" />
        </h2>
        <h3 className="font-semibold text-[32px] mb-3 max-w-[360px]">
          <AnimateWords text="Our reach so far" />
        </h3>
        <p className="text-xl text-[#667085] max-w-3xl leading-[30px]">
        We are committed to changing the African narrative by empowering African teens. See how we have progressed so far. 
        </p>
      </div>
      <div className="mt-16 flex flex-col lg:flex-row max-w-[1500px] lg:space-x-10 mx-auto items-center justify-between space-y-28 lg:space-y-0">
        <div className="grid justify-center grid-cols-1 gap-5 space-y-6 text-center sm:grid-cols-2 md:justify-start sm:space-y-0">
          {communityContents.map(({ key, count, title, description }) => (
            <div
              key={key}
              className="max-w-[370px] md:max-w-[350px] min-h-[150px] space-y-2"
            >
              <CountingAnimation value={count} />
              <p className="font-medium text-lg text-[#101828]">
                <AnimateWords text={title} />
              </p>
              <p className="text-[#667085]">{description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <img src="/assets/left-rectangle.svg" className="h-full" alt="" />
          <span className="grid gap-3">
            <img src="/assets/image-box2.svg" alt="" />
            <img src="/assets/image-box3.svg" alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default CommunityBody;
