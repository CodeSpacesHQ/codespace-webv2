import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../../utils/Theme";

const ErrorPage = () => {
  useEffect(() => {
    const themeColor: ThemeColor = "#ffffff"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#f9f9f9"); // Set the default theme color when leaving this page
    };
  }, []);
  return (
    <section className="grid place-content-center min-h-[60vh]">
      <img
        src="/assets/404.svg"
        alt="error-404"
        className="w-[399px] h-[399px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px]"
      />
    </section>
  );
};

export default ErrorPage;
