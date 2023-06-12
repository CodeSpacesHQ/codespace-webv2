import medium from "../../assets/images/medium.svg";
import techNext from "../../assets/images/Technext.svg";
import media from "../../assets/images/GeoLamedia.svg";

import { motion } from "framer-motion";
import { zoomAnimation } from "../../config/motion";
import AnimateWords from "../../config/textAnimation";

const Press = () => {
  return (
    <section className="px-7 sm:px-16 lg:px-[65px] xl:ps-[101px] max-w-[1500px] mx-auto overflow-hidden max-md:mt-12 max-md:bg-[linear-gradient(180deg,#F7F7FD_16.46%,rgba(247,247,253,0)100%)]">
      <div className="mt-[71px] mb-24 ">
        <h2 className="font-gelion sm:font-dm-sans font-normal sm:font-medium max-md:tracking-[0.12em] text-sm/[17px] sm:text-[29px]/[45px] text-primary mb-4 uppercase">
          <AnimateWords text="Latest press release" />
        </h2>
        <h2 className="font-gelion sm:font-poppins font-medium sm:font-bold text-[28px]/[34px] max-md:tracking-[-0.02em] sm:text-[32px]/[48px] max-w-2xl mb-[37px] sm:mb-[63px]">
          <AnimateWords text="Get latest updates on the Nigeria Tech Community" />
        </h2>
        <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 max-md:gap-y-7 gap-[14px] font-gelion">
          <motion.a
            {...zoomAnimation()}
            href="https://ifeomadev.medium.com/rising-stars-how-these-few-nigerians-in-tech-are-putting-nigeria-on-the-world-map-2b0b32f5d522"
            target="_blank"
            rel="noopener noreferrer"
            className='lg:row-span-2 lg:col-span-2 bg-[url("/assets/press-1.svg")] h-[400px] sm:h-[500px] rounded-[28px] sm:rounded-[10px] lg:h-[600px] relative font-dm-sans shadow-lg group hover:scale-105 transition-all cursor-pointer bg-no-repeat bg-center bg-cover'
          >
            <div className="absolute bottom-0 left-0 right-0 group-hover:h-80 h-full transition-all bg-gradient-to-t rounded-[28px] sm:rounded-[10px] from-black to-transparent"></div>
            <div className="absolute flex flex-col p-5 space-y-5 bottom-5">
              <div className="news-icon">
                <img src={medium} alt="medium icon" />
              </div>
              <div className="title font-medium text-[22px] leading-7 lg:leading-[47px] lg:font-bold text-white lg:text-[30px] xl:text-[38px] line-clamp-3">
                Rising Stars: How These Few Nigerians in Tech are Putting
                Nigeria on the World Map
              </div>
              <div className="description text-white hidden lg:block line-clamp-3 font-dm-sans text-xl leading-[26.04px]">
                In recent years, Nigeria has been making a name for itself in
                the global tech industry, with an increasing number of Nigerian
                tech professionals and entrepreneurs gaining recognition and
                making.........
              </div>
            </div>
          </motion.a>
          <motion.a
            {...zoomAnimation()}
            href="https://technext24.com/2022/08/16/clinton-imaro-18-year-old-afrowatch-founder/"
            target="_blank"
            rel="noopener noreferrer"
            className='lg:col-span-2 bg-blue-500 bg-[url("/assets/press-2.svg")] bg-no-repeat bg-center bg-cover rounded-[28px] sm:rounded-[10px] relative font-dm-sans shadow-lg group hover:scale-105 transition-all cursor-pointer'
          >
            <div className="absolute bottom-0 left-0 right-0 group-hover:h-40 bg-gradient-to-t from-black to-transparent h-full rounded-[28px] sm:rounded-[10px] transition-all"></div>
            <div className="absolute bottom-5 lg:bottom-2 flex flex-col space-y-[10px] p-5">
              <div className="news-icon">
                <img src={techNext} alt="medium icon" className="h-[36px]" />
              </div>
              <div className="title font-medium text-[22px] leading-7 lg:leading-[47px] lg:font-bold text-white lg:text-[30px] xl:text-[38px] line-clamp-3">
                Meet Clinton Imaro, 18 year old Nigerian building...
              </div>
            </div>
          </motion.a>
          <motion.a
            {...zoomAnimation()}
            href="https://www.gbolamedia.com/startups-in-nigeria-by-gen-z.html"
            target="_blank"
            rel="noopener noreferrer"
            className='relative bg-lime-500 bg-[url("/assets/press-3.svg")] bg-no-repeat bg-center bg-cover rounded-[28px] sm:rounded-[10px] shadow-lg group hover:scale-105 transition-all cursor-pointer'
          >
            <div className="absolute bottom-0 left-0 right-0 group-hover:h-40 bg-gradient-to-t from-black to-transparent h-full rounded-[28px] sm:rounded-[10px] transition-all"></div>
            <div className="absolute bottom-5 lg:bottom-2 flex flex-col space-y-[10px] p-5">
              <div className="news-icon">
                <img src={media} alt="medium icon" className="h-[28px]" />
              </div>
              <div className="title font-medium text-[22px] leading-7 lg:leading-[31.19px] lg:font-bold text-white lg:text-[26px] line-clamp-3">
                Top 10 Startups in Nigeria Founded by Gen-Z
              </div>
            </div>
          </motion.a>
          <motion.a
            {...zoomAnimation()}
            href="https://ifeomadev.medium.com/top-10-gen-z-changing-the-world-of-tech-in-nigeria-4db1b0d07460"
            target="_blank"
            rel="noopener noreferrer"
            className='relative bg-orange-500 bg-[url("/assets/press-4.svg")] bg-no-repeat bg-center bg-cover rounded-[28px] sm:rounded-[10px] shadow-lg group hover:scale-105 transition-all cursor-pointer'
          >
            <div className="absolute bottom-0 left-0 right-0 group-hover:h-40 bg-gradient-to-t from-black to-transparent h-full rounded-[28px] sm:rounded-[10px] transition-all"></div>
            <div className="absolute bottom-5 lg:bottom-2 flex flex-col space-y-[10px] p-5">
              <div className="news-icon">
                <img src={medium} alt="medium icon" className="h-[28px]" />
              </div>
              <div className="title font-medium text-[22px] leading-7 lg:leading-[31.19px] lg:font-bold text-white lg:text-[26px] line-clamp-3">
                Top 10 Gen Z changing the world of tech in Nigeria
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Press;
