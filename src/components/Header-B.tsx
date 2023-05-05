import HamburgerIcon from "../assets/hamburger.svg";
import logo from "../assets/logo.svg";

const menuItems = [
  "About Us",
  "Donate",
  "Shop",
  "Job Opportunities",
  "Blog",
  "Contact Us",
];

const Header = () => {
  return (
    <header>
      <nav>
        <div className="flex justify-between lg:justify-between py-12 lg:py-8 items-center px-7 sm:px-[62px] xl:px-[102px] font-poppins mx-auto">
          <img src={logo} alt="logo" className=" h-[31px] cursor-pointer" />
          {/* Menu */}
          <div className="menu hidden lg:flex items-center justify-between">
            <div>
              <ul className="flex space-x-10 lg:space-x-6 wideScreen:space-x-[61px] xl:space-x-[30px]">
                {menuItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="cursor-pointer hover:scale-105 transition-all hover:text-primary"
                    >
                      <a href="#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="donate hidden lg:block hover:scale-110 transition-all">
            <button className="bg-primary w-[150px] rounded-[10px] py-3 text-white">
              Donate Now
            </button>
          </div>
          {/* Mobile Menu */}

          <div className="lg:hidden">
            <div className="mobile-icon">
              <img
                src={HamburgerIcon}
                alt="menu icon"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Tab menu */}
        {/* <ul className="hidden lg:flex justify-between px-7 h-[50px] items-center border-t border-light-purple border-opacity-20 font-poppins">
          {menuItems.map((item, index) => {
            return (
              <li key={index} className="cursor-pointer hover:scale-105">
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
