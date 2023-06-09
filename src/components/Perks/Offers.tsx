// import { offersList } from "../../data/offersList";
// import { motion } from "framer-motion";
// import { zoomAnimation } from "../../config/motion";

import AnimateWords from "../../config/textAnimation";

const Offers = () => {
  return (
    <section className="mt-[106px] h-screen px-7 sm:px-16 lg:px-[65px] xl:pl-[101px] 2xl:px-[121px] mb-16 max-w-[1500px] mx-auto">
      <h2 className="text-3xl font-medium font-gelion md:text-4xl">
        <AnimateWords text="All offers" />
      </h2>
      <div className="mt-[142px] font-gelion text-4xl lg:w-4/5 sm:text-[55px]/[66px] tracking-[-0.02em] font-semibold">
        <AnimateWords text="Coming soon — We're working on this section of our website 🤞🏾" />
      </div>
      {/* <div className="mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offersList.map(({ key, icon, company, about, benefit1, benefit2 }) => (
          <motion.div
            {...zoomAnimation()}
            key={key}
            className="bg-[#F8F2FF] p-7 rounded-[32px]"
          >
            <div className="icon">
              <img
                src={icon}
                className="w-10 h-10 md:w-14 md:h-14"
                alt="couchbase icon"
                width={54}
                height={54}
              />
            </div>
            <div className="mt-8 text-xl font-medium company font-poppins md:text-2xl">
              {company}
            </div>
            <div className="space-y-5 font-gilroy mt-5 text-[15px] md:text-base">
              <div className="flex flex-col about">
                <span>About {company}</span>
                <span className="text-[#8C8C8C]">{about}</span>
              </div>
              <div className="flex flex-col benefit1">
                <span>Benefit</span>
                <span className="text-[#8C8C8C]">{benefit1}</span>
              </div>
              <div className="flex flex-col benefit2">
                <span>Benefit</span>
                <span className="text-[#8C8C8C]">{benefit2}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}
    </section>
  );
};

export default Offers;
