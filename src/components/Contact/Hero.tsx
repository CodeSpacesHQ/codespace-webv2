import { Bounce } from 'react-awesome-reveal';

const ContactHero = () => {
  return (
    <section className='min-h-[70vh] md:min-h-[calc(100vh-120px)] mt-20 flex items-center overflow-hidden relative '>
      <img
        className='absolute bottom-20 -right-6'
        width={123}
        height={143}
        src='/assets/bottom-dots.svg'
        alt='dots icons'
      />
      <div className='max-w-[850px] px-7 md:py-0 lg:pl-[108px] 2xl:pl-[118px] relative'>
        <Bounce cascade damping={0.4} duration={2000}>
          <h1 className='text-primary uppercase mb-[19px]'>Get in touch</h1>
          <h2 className='font-gelion font-semibold text-4xl leading-[42px] md:text-[55px] md:leading-[65.98px] mb-36'>
            Empowering{' '}
            <span className='text-primary color-slide bounce-delayed'>
              Africa
            </span>{' '}
            through the limitless potential of technology
          </h2>
        </Bounce>
      </div>
      <div>
        <img
          className='absolute right-40 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 -bottom-26 sm:-bottom-20 lg:bottom-20'
          src='/assets/plane-arrow.svg'
          alt='paper plane icon'
        />
      </div>
    </section>
  );
};

export default ContactHero;
