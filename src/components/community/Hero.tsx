const CommunityHero = () => {
  return (
    <section
      className='relative w-full h-full overflow-hidden pt-[276px] max-md:pt-[69px] 
        pb-[129px] max-md:pb-[42px] flex justify-center items-center
         max-md:flex-col px-7 min-h-[80vh] lg:min-h-[30vh] bg-[linear-gradient(180deg,#F7F7FD_16.46%,rgba(247,247,253,0)100%)]'>
      <img
        className='absolute bottom-20 -right-6'
        width={123}
        height={143}
        src='/assets/bottom-dots.svg'
        alt='dots icons'
      />
      <div className='max-w-[1500px] mx-auto text-center'>
        <h1 className='font-gelion text-xl mb-[19px] '>
          ABOUT US <span className='text-[32px] px-2'>&gt;</span> COMMUNITY
        </h1>
        <span className='relative'>
          <h2 className='font-gelion font-semibold text-[29px] leading-[42px] md:text-[43px] lg:text-[55px] md:leading-[65.98px] mb-12'>
            Join our global community
          </h2>
          <img
            className='absolute -bottom-3 [@media(min-width:391px)]:-top-1 right-20 [@media(min-width:391px)]:-right-5 sm:-right-8 lg:-top-3'
            src='/assets/scratch.svg'
            alt='scratch icon'
          />
        </span>
      </div>
    </section>
  );
};

export default CommunityHero;
