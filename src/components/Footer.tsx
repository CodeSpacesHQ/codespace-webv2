import { socialLinks } from '../data/socialLinks';
import { footerLinks } from '../data/footerLinks';

const Footer = () => {
  return (
    <footer className=''>
      <div className='pt-[101px] px-5 lg:px-[69.83px] pb-[57px] mx-auto max-w-[1500px]'>
        <div className='space-y-[34px] sm:space-y-0 pb-[30px] md:pb-[89px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 sm:gap-10'>
          <div className='flex flex-col lg:col-span-2'>
            <span className='mb-[19px] md:text-5xl text-[28px] font-gelion font-black'>
              LOGO
            </span>
            <span className='font-poppins text-[#8C8C8C] leading-6 md:leading-8'>
              We are a vibrant community for the tech-savvy Gen Z developers,
              founders, designers, and tech enthusiasts across Africa.
            </span>
          </div>
          <div className='flex flex-col lg:col-span-2'>
            <span className='mb-4 font-semibold text-2xl font-hind-siliguri'>
              Reach out to us
            </span>
            <span className='font-poppins text-[#8C8C8C] leading-6 md:leading-8 mb-7'>
              If you'd like to volunteer or donate to any of our programs, reach
              out to us through any of these channels:
            </span>
            <div className='flex space-x-[20px]'>
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
                    className='w-[25px] h-[25px] md:w-7 md:h-7'
                  />
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col font-hind-siliguri lg:col-span-1'>
            <span className='mb-4 font-semibold text-2xl'>Quick links</span>
            <div className='flex flex-col space-y-[11px]'>
              {footerLinks.map(({ id, title, social_link }) => (
                <div key={id} className='hover:scale-105 transition-all hover:text-primary'>
                  <a href={social_link} target="_blank" rel='noopener' className='text-base md:text-[22px]'>
                    {title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className='border border-[#C2C2F0]' />
        <div className='pt-[30px] md:pt-[92px] text-center font-gelion text-[15px] md:text-lg'>
          <span>Code Space | All Rights Reserved | Copyright 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
