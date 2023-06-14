import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  MotionValue,
  useAnimation,
} from "framer-motion";

import HamburgerIcon from "./HamburgerIcon";
import logo from "../assets/logo.svg";
import { menuItems } from "../data/menuItems";

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuHeight: MotionValue<number> = useMotionValue(0);
  const menuSpring = useSpring(menuHeight, { stiffness: 200, damping: 25 });

  const handleNavClick = () => {
    setNavOpen(!navOpen);
    menuHeight.set(navOpen ? 0 : 540 || 0);
    setIsAnimating(!isAnimating);
    setAnimationKey((prevKey) => prevKey + 1);
  };

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

  return (
    <header
      className={`w-full z-20 ${
        navOpen ? "bg-white" : "bg-transparent"
      } relative`}
    >
      <nav>
        <div className="flex justify-between lg:justify-between py-12 max-md:py-8 lg:py-8 items-center px-7 xl:px-[102px] sm:px-[64px] font-poppins mx-auto max-w-[1500px]">
          <NavLink
            to={"/"}
            onClick={() => {
              setNavOpen(false);
              menuHeight.set(navOpen ? 0 : 0);
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
                {menuItems.map((item) => (
                  <li
                    key={item.key}
                    className="transition-all font-normal cursor-pointer hover:scale-105 hover:text-primary"
                  >
                    {item.name === "Blog" ? (
                      <a
                        href={item.where}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#070F18]"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <NavLink
                        to={item.where}
                        className={
                          window.location.pathname === item.where
                            ? "text-primary"
                            : "text-[#070F18]"
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </li>
                ))}
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
              <HamburgerIcon isOpen={navOpen} />
            </div>
          </div>
        </div>

        {/* Tab menu */}
        <motion.div
          className="bg-white overflow-hidden relative"
          style={{ height: menuSpring }}
          ref={menuRef}
        >
          <ul className="text-left px-7 sm:px-[62px] font-poppins pb-36 pt-4">
            {menuItems.map((item) => (
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
                  {item.name === "Blog" ? (
                    <a
                      href={item.where}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#070F18]"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      to={item.where}
                      onClick={() => {
                        setNavOpen(false);
                        menuHeight.set(navOpen ? 0 : 0);
                        setIsAnimating(false);
                        setAnimationKey((prevKey) => prevKey + 1);
                        window.location.pathname === item.where &&
                          scrollToTop();
                      }}
                      className={
                        window.location.pathname === item.where
                          ? "text-primary"
                          : "text-[#070F18]"
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </span>
              </motion.li>
            ))}
          </ul>
          <a
            href="https://paystack.com/pay/77iitrxp80"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute w-full transition-all donate bottom-10 hover:scale-110 px-7 sm:px-[62px]"
          >
            <button className="bg-primary w-full rounded-[10px] py-3 text-white">
              Donate Now
            </button>
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
