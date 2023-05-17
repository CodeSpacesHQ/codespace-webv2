import { communityContents } from '../../data/community';

const CommunityBody = () => {
  return (
    <section className='px-7 sm:px-16 lg:px-[65px] xl:px-[101px] 2xl:px-[121px] font-inter mb-32'>
      <div className='mt-[67px] mx-auto max-w-[1500px] px-0 mb-[100px]'>
        <h2 className='text-primary font-semibold mb-2'>Our Values</h2>
        <h3 className='font-semibold text-[32px] mb-3 max-w-[360px]'>
          Our reach so far
        </h3>
        <p className='text-xl text-[#667085] max-w-3xl leading-[30px]'>
          We’ve done all the heavy lifting so you don’t have to — get all the
          data you need to launch and grow your business faster.
        </p>
      </div>
      <div className='mt-16 flex flex-col lg:flex-row max-w-[1500px] lg:space-x-10 mx-auto items-center justify-between space-y-28 lg:space-y-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 text-center justify-center md:justify-start space-y-6 sm:space-y-0 gap-5'>
          {communityContents.map(({ key, count, title, description }) => (
            <div
              key={key}
              className='max-w-[370px] md:max-w-[350px] min-h-[150px] space-y-2'>
              <p className='text-primary font-semibold text-5xl md:text-6xl md:leading-[72px]'>
                {count}
              </p>
              <p className='font-medium text-lg text-[#101828]'>{title}</p>
              <p className='text-[#667085]'>{description}</p>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <img src='/assets/left-rectangle.svg' className='h-full' alt='' />
          <span className='gap-3 grid'>
            <img src='/assets/image-box2.svg' alt='' />
            <img src='/assets/image-box3.svg' alt='' />
          </span>
        </div>
      </div>
    </section>
  );
};

export default CommunityBody;
