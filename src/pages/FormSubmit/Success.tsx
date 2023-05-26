import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../../utils/Theme";
import { NavLink } from "react-router-dom";

export const Success = () => {
  useEffect(() => {
    const themeColor: ThemeColor = "#ffffff"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#f9f9f9"); // Set the default theme color when leaving this page
    };
  }, []);
  return (
    <section className="grid place-content-center min-h-screen">
      <div className="w-full max-w-[1500px] mx-auto">
        <div className="flex flex-col justify-center w-full align-middle text-center">
          <h2 className="font-gelion text-[#868687] font-semibold max-sm:font-medium max-sm:text-[20px]/6 max-xl:text-[40px] text-[55px]/[66px] tracking-[-0.02em]">
            Form submission successful... 🚀🚀
          </h2>
          <p className="text-grey mb-5 font-gelion font-normal text-[16px]/6 sm:text-2xl">
            We will get in touch with you soon
          </p>
          <p className="font-gelion text-[16px]/6 sm:text-[20px] text-primary font-normal tracking-[0.08em]">
            Return to{" "}
            <NavLink to={"/"} className="underline hover:no-underline">
              homapage
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};
