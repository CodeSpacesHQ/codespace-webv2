import HamburgerIcon from '../assets/hamburger.svg';

const menuItems = [
  'About Us',
  'Donate',
  'Shop',
  'Job Opportunities',
  'Blog',
  'Contact Us',
];

const Header = () => {
  return (
    <header>
    <nav className='bg-white'>
      <div className='flex justify-between lg:justify-between h-[100px] items-center px-7 2xl:px-[102px] font-poppins max-w-[1500px] mx-auto'>
        <a href='#' className='logo'>
          <img src="/public/assets/black-logo.svg" className='w-40 xl:w-56' alt="" />
        </a>
        {/* Menu */}
        <div className='menu hidden lg:flex items-center justify-between'>
          <div>
            <ul className='flex space-x-10 xl:space-x-[61px]'>
              {menuItems.map((item, index) => {
                return (
                  <li key={index} className='cursor-pointer hover:scale-105 transition-all hover:text-primary'>
                    <a href='#'>{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='donate hidden md:block hover:scale-110 transition-all'>
          <button className='bg-primary w-[150px] rounded-[10px] py-3 text-white'>
            Donate Now
          </button>
        </div>
        {/* Mobile Menu */}

        <div className='md:hidden'>
          <div className='mobile-icon'>
            <img
              src={HamburgerIcon}
              alt='menu icon'
              className='cursor-pointer'
            />
          </div>
        </div>
      </div>

      {/* Tab menu */}
      <ul className='hidden md:flex lg:hidden justify-between px-7 h-[50px] items-center border-t border-light-purple border-opacity-20 font-poppins'>
        {menuItems.map((item, index) => {
          return (
            <li key={index} className='cursor-pointer hover:scale-105'>
              <a href='#'>{item}</a>
            </li>
          );
        })}
      </ul>
     
    </nav>
    </header>
  );
};

export default Header;
