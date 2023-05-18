import { socialLinks } from '../data/socialLinks';
import { footerLinks } from '../data/footerLinks';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className=''>
      <div className='pt-8 sm:pt-[101px] pb-[57px] mx-auto max-w-[1500px] px-7 lg:px-[65px] xl:px-[102px] sm:px-[64px]'>
        <div className='w-full border-t-2 border-dashed border-[#D1D1D2] sm:hidden mb-10' />
        <div className='space-y-[34px] sm:space-y-0 pb-[30px] md:pb-[89px] grid grid-cols-1 sm:grid-cols-3 sm:gap-10'>
          <div className='flex flex-col relative'>
            <span className='mb-[19px]'>
              <img src={logo} className='w-44' alt='logo' />
            </span>
            <span className='text-sm font-poppins text-[#8C8C8C] leading-6 md:leading-8'>
              We are a vibrant community for the tech-savvy Gen Z developers,
              founders, designers, and tech enthusiasts across Africa.
            </span>
          </div>
          <div className='flex flex-col'>
            <span className='mb-4 font-semibold text-xl font-hind-siliguri'>
              Reach out to us
            </span>
            <span className='text-sm font-poppins text-[#8C8C8C] leading-6 md:leading-8 mb-7'>
              If you'd like to volunteer or donate to any of our programs, reach
              out to us through any of these channels:
            </span>
            <div className='flex space-x-[5px] -ml-[7px]'>
              {socialLinks.map(({ id, icon, social_link }) => (
                <a
                  href={social_link}
                  key={id}
                  target='_blank'
                  rel='noopener'
                  className='hover:scale-105 transition-all hover:shadow-xl p-2 rounded-full'>
                  <img
                    src={icon}
                    alt='Social Media Icons'
                    className='w-5 h-5 md:w-6 md:h-6'
                  />
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col font-hind-siliguri lg:col-span-1'>
            <span className='mb-4 font-semibold text-xl'>Quick links</span>
            <div className='flex flex-col space-y-[5px]'>
              {footerLinks.map(({ id, title, social_link }) => (
                <div
                  key={id}
                  className='font-hind-siliguri text-base '>
                  <NavLink className={'transition-all hover:text-primary'} to={social_link}>{title}</NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className='border border-gray-200' />
        <div className='pt-[30px] md:pt-20 text-center font-gelion text-[15px]'>
          <span>Code Space | All Rights Reserved | Copyright 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
