import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import HamburgerIcon from "./HamburgerIcon";
import logo from "../assets/logo.svg";
import { menuItems } from "../data/menuItems";

import { motion, useAnimation } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const controls = useAnimation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isAnimating) {
      controls.start({
        opacity: 1,
        x: 0,
      });
    } else {
      controls.start({
        opacity: 0,
        x: "-100%",
      });
    }
  }, [controls, isAnimating]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 42) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavClick = () => {
    setNavOpen(!navOpen);
    setIsAnimating(!isAnimating);
    setAnimationKey((prevKey) => prevKey + 1);
  };
  const navClasses = `fixed top-0 h-full w-full bg-white transform transition-all ease-in-out duration-500 ${
    navOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
  }`;

  return (
    <header
      className={`fixed top-0 w-full z-20 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }  transition-all duration-500`}
    >
      <nav>
        <div className="flex justify-between lg:justify-between py-12 max-md:py-8 lg:py-8 items-center px-7 xl:px-[102px] sm:px-[64px] font-poppins mx-auto max-w-[1500px]">
          <NavLink
            to={"/"}
            onClick={() => {
              setNavOpen(false);
              setIsAnimating(false);
              setAnimationKey((prevKey) => prevKey + 1);
              window.location.pathname === "/" && scrollToTop();
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="relative h-[16px] xmd:max-xl:h-[16px] sm:h-5 cursor-pointer z-40"
            />
          </NavLink>
          {/* Menu */}
          <div className="items-center justify-between hidden menu lg:flex">
            <div>
              <ul className="flex space-x-10 lg:space-x-6 wideScreen:space-x-[61px] xl:space-x-[30px]">
                {menuItems.map((item) => {
                  return (
                    <li
                      key={item.key}
                      className="transition-all cursor-pointer text-[#070F18] hover:scale-105 hover:text-primary"
                    >
                      <NavLink
                        to={item.where}
                        className={
                          window.location.pathname === item.where
                            ? "font-semibold"
                            : "font-normal"
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <a
            href="https://paystack.com/pay/77iitrxp80"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition-all donate lg:block hover:scale-110"
          >
            <button className="bg-primary w-[150px] rounded-[10px] py-3 text-white">
              Donate Now
            </button>
          </a>
          {/* Mobile Menu */}

          <div
            className="z-40 cursor-pointer lg:hidden"
            onClick={handleNavClick}
          >
            <div className="mobile-icon">
              <HamburgerIcon isOpen={isAnimating} />
            </div>
          </div>
        </div>

        {/* Tab menu */}
        <div className={`lg:hidden z-30 ${navClasses}`}>
          <div className="py-12 max-md:py-8 lg:py-8 px-7 sm:px-[62px] xl:px-[102px] mx-auto opacity-0">
            <img
              src={logo}
              alt="logo"
              className="h-[16px] xmd:max-xl:h-[16px] sm:h-5"
            />
          </div>

          <ul className="text-left px-7 sm:px-[62px] font-poppins">
            {menuItems.map((item) => {
              return (
                <motion.li
                  key={`${item.key}-${animationKey}`}
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={isAnimating ? controls : undefined}
                  style={{ transitionDelay: `${item.key * 100}ms` }}
                  className={`hover:scale-105 ${
                    !navOpen && "hidden"
                  } border-light-purple text-[#070F18] font-normal border-opacity-20 py-3 border-dashed border-t-2 text-2xl transform transition-all ease-in-out duration-500`}
                >
                  <span>
                    <NavLink
                      to={item.where}
                      onClick={() => {
                        setNavOpen(false);
                        setIsAnimating(false);
                        setAnimationKey((prevKey) => prevKey + 1);
                      }}
                      className={
                        window.location.pathname === item.where
                          ? "text-primary"
                          : "text-[#070F18]"
                      }
                    >
                      {item.name}
                    </NavLink>
                  </span>
                </motion.li>
              );
            })}
          </ul>
          <a
            href="https://paystack.com/pay/77iitrxp80"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute w-full transition-all donate bottom-10 hover:scale-110 px-7"
          >
            <button className="bg-primary w-full rounded-[10px] py-3 text-white">
              Donate Now
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
