import { formPurpose } from '../../data/formPurpose';

const ContactBody = () => {
  return (
    <section className='min-h-[60vh] px-7 lg:px-[102px] relative items-center'>
      <div className='max-w-[1500px] mx-auto pb-60'>
        <form action='' className='text-[#344054] font-inter max-w-3xl'>
          <div>
            <div className='mb-6'>
              <label className='block text-sm font-medium mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12'
                id='name'
                type='text'
                placeholder='Your name'
              />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-medium mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12'
                id='email'
                type='email'
                placeholder='you@company.com'
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-sm font-medium mb-2'
                htmlFor='project'>
                How can we help?
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[128px]'
                id='project'
                placeholder='Tell us a little about the project...'
              />
            </div>
            <div className='mb-8'>
              <label
                className='block text-sm font-medium mb-5'
                htmlFor='purpose'>
                Purpose
              </label>
              <div className='grid grid-cols-2 gap-4'>
                {formPurpose.map(({ key, value }) => (
                  <div key={key} className='flex items-center'>
                    <input
                      className='mr-2 leading-tight w-5 h-5'
                      type='checkbox'
                    />
                    <span className='font-medium'>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <input type="submit" value="Submit" className='bg-primary text-white w-full rounded-lg h-12 cursor-pointer hover:transition-all hover:bg-white hover:text-primary hover:border-primary border' />
          </div>
        </form>
        <img
          className='absolute bottom-0 w-32 h-32 md:w-[213px] md:h-[206px] -z-10 right-0'
          src='/assets/asterisk.svg'
          width={213}
          height={206}
          alt='asterisk icon'
        />
      </div>
    </section>
  );
};

export default ContactBody;
