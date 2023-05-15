import { offersList } from '../../data/offersList';

const Offers = () => {
  return (
    <section className='mt-[106px] px-7 sm:px-16 lg:px-[65px] xl:pl-[101px] 2xl:px-[121px] mb-16'>
      <h2 className='font-gelion text-3xl md:text-4xl font-medium'>
        All offers
      </h2>
      <div className='mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {offersList.map(({ key, icon, company, about, benefit1, benefit2 }) => (
          <div key={key} className='bg-[#F8F2FF] p-7 rounded-[32px]'>
            <div className='icon'>
              <img
                src={icon}
                className='w-10 h-10 md:w-14 md:h-14'
                alt='couchbase icon'
                width={54}
                height={54}
              />
            </div>
            <div className='company font-poppins text-xl md:text-2xl font-medium mt-8'>
              {company}
            </div>
            <div className='space-y-5 font-gilroy mt-5 text-[15px] md:text-base'>
              <div className='about flex flex-col'>
                <span>About {company}</span>
                <span className='text-[#8C8C8C]'>{about}</span>
              </div>
              <div className='benefit1 flex flex-col'>
                <span>Benefit</span>
                <span className='text-[#8C8C8C]'>{benefit1}</span>
              </div>
              <div className='benefit2 flex flex-col'>
                <span>Benefit</span>
                <span className='text-[#8C8C8C]'>{benefit2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
