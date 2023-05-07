const Press = () => {
  return (
    <section className='px-7 lg:px-[102px]'>
      <div className='mt-[71px] mb-24'>
        <h2 className='font-dm-sans font-medium text-[29px] text-primary mb-4 uppercase'>
          Latest press release
        </h2>
        <h2 className='font-poppins font-bold text-[32px] leading-[48px] max-w-2xl mb-[63px]'>
          Get latest updates on the Nigeria Tech Community
        </h2>
        <div className='grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 gap-5'>
          <div className='lg:row-span-2 lg:col-span-2 bg-red-500 rounded-lg h-[400px] lg:h-[500px] relative font-dm-sans shadow-lg group hover:scale-105 transition-all cursor-pointer'>
            <div className='absolute bottom-0 left-0 right-0 h-40 group-hover:h-full transition-all bg-gradient-to-t from-black to-transparent rounded-lg'></div>
            <div className='absolute bottom-5 flex flex-col space-y-5 p-5'>
              <div className='news-icon'></div>
              <div className='title font-bold text-white text-2xl line-clamp-2'>
                Njoku Emmanuel's Journey To Blockchain Stardom
              </div>
              <div className='description text-white leading-4 line-clamp-4 lg:line-clamp-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                iure provident voluptas distinctio. Praesentium explicabo enim,
                voluptates voluptatum aliquam pariatur. Laudantium a deserunt
                omnis incidunt, necessitatibus tenetur eveniet impedit nisi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda architecto deserunt itaque cupiditate magnam expedita,
                exercitationem modi illum veritatis quod autem dolore maiores
                rem magni repellat. In nisi voluptatem exercitationem.
              </div>
            </div>
          </div>
          <div className='lg:col-span-2 bg-blue-500 rounded-lg relative font-dm-sans shadow-lg group hover:scale-105 transition-all cursor-pointer'>
            <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent rounded-lg group-hover:h-full transition-all'></div>
            <div className='absolute bottom-5 lg:bottom-2 flex flex-col space-y-5 p-5'>
              <div className='news-icon'></div>
              <div className='title font-bold text-white text-2xl line-clamp-2'>
                Njoku Emmanuel's Journey To Blockchain Stardom
              </div>
              <div className='description text-white leading-4 lg:hidden line-clamp-4 lg:line-clamp-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                iure provident voluptas distinctio. Praesentium explicabo enim,
                voluptates voluptatum aliquam pariatur. Laudantium a deserunt
                omnis incidunt, necessitatibus tenetur eveniet impedit nisi!
              </div>
            </div>
          </div>
          <div className='relative bg-lime-500 rounded-lg shadow-lg group hover:scale-105 transition-all cursor-pointer'>
          <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent rounded-lg group-hover:h-full transition-all'></div>
            <div className='absolute bottom-5 lg:bottom-2 flex flex-col space-y-5 p-5'>
              <div className='news-icon'></div>
              <div className='title font-bold text-white text-2xl line-clamp-2'>
                Njoku Emmanuel's Journey To Blockchain Stardom
              </div>
              <div className='description text-white leading-4 lg:hidden line-clamp-4 lg:line-clamp-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                iure provident voluptas distinctio. Praesentium explicabo enim,
                voluptates voluptatum aliquam pariatur. Laudantium a deserunt
                omnis incidunt, necessitatibus tenetur eveniet impedit nisi!
              </div>
            </div>
          </div>
          <div className='relative bg-orange-500 rounded-lg shadow-lg group hover:scale-105 transition-all cursor-pointer'>
          <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent rounded-lg group-hover:h-full transition-all'></div>
            <div className='absolute bottom-5 lg:bottom-2 flex flex-col space-y-5 p-5'>
              <div className='news-icon'></div>
              <div className='title font-bold text-white text-2xl line-clamp-2'>
                Njoku Emmanuel's Journey To Blockchain Stardom
              </div>
              <div className='description text-white leading-4 lg:hidden line-clamp-4 lg:line-clamp-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                iure provident voluptas distinctio. Praesentium explicabo enim,
                voluptates voluptatum aliquam pariatur. Laudantium a deserunt
                omnis incidunt, necessitatibus tenetur eveniet impedit nisi!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
