import { socialLinks } from "../data/socialLinks";
import { footerLinks } from "../data/footerLinks";

import logo from "../assets/logo.svg";

const Footer = () => {
  const textStyle =
    "font-poppins text-[#8C8C8C] text-[15px]/[23px] font-normal md:text-[16px]/8 tracking-[-0.20000000298023224px]";
  return (
    <footer>
      <div className="pt-[35px] sm:pb-[57px] pb-6 mx-auto">
        <div className="w-full border-t-2 border-dashed border-[#D1D1D2] sm:hidden mb-10" />
        <div className=" pb-[30px] ps-[26px] sm:ps-10 max-lg:pe-28 max-sm:pe-7 lg:ps-[69.83px] lg:pe-[165px] xl:ps-[108px] xl:pe-[332px] md:pb-[89px] flex max-sm:flex-col xmd::gap-[60px] sm:gap-[30px] lg:gap-[73px]">
          <div className="flex-1">
            <div className="mb-[19px]">
              <img src={logo} className=" w-44" alt="logo" />
            </div>
            <div className={textStyle}>
              We are a vibrant community for the tech-savvy Gen Z developers,
              founders, designers, and tech enthusiasts across Africa.
            </div>
          </div>
          <div className="flex flex-col flex-1 max-md:mt-[34px]">
            <span className="mb-4 text-2xl font-semibold leading-6 font-hind-siliguri">
              Reach out to us
            </span>
            <span className={`${textStyle} mb-[25px] max-sm:mb-10`}>
              If you'd like to volunteer or donate to any of our programs, reach
              out to us through any of these channels:
            </span>
            <div className="flex space-x-[16px]">
              {socialLinks.map(({ id, icon, social_link }) => (
                <a
                  href={social_link}
                  key={id}
                  target="_blank"
                  rel="noopener"
                  className="transition-all rounded-full hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={icon}
                    alt="Social Media Icons"
                    className="h-[26px] lg:h-8"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-none font-hind-siliguri max-md:mt-[59px]">
            <span className="mb-[27px] text-2xl font-semibold leading-6 font-hind-siliguri">
              Quick links
            </span>
            <div className="flex flex-col space-y-[11px]">
              {footerLinks.map(({ id, title, social_link }) => (
                <div
                  key={id}
                  className="transition-all hover:scale-105 font-hind-siliguri hover:text-primary"
                >
                  <a
                    href={social_link}
                    target="_blank"
                    rel="noopener"
                    className="text-base md:text-[22px] tracking-normal"
                  >
                    {title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border border-[#C2C2F0] max-sm:border-[#EBEBEB] sm:w-11/12 w-full" />
        </div>

        <div className="pt-[30px] md:pt-[92px] text-center font-gelion text-[15px] md:text-lg">
          <span>Code Space | All Rights Reserved | Copyright 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
