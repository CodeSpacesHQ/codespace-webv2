import { Bounce } from "react-awesome-reveal";
import TestComponent from "./Test";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8F8FD] to-white md:min-h-[calc(100vh+100px)] lg:min-h-[calc(100vh+260px)] xl:min-h-[calc(100vh+100px)] overflow-hidden">
      <div className="bg-[url('/assets/Hero-bg.svg')] bg-no-repeat bg-left bg-cover">
        <div className="pt-[188px] sm:pt-[199px] relative max-w-[1500px] mx-auto">
          <div className="px-7 sm:px-16 lg:px-[65px] md:py-0 xl:pl-[101px] relative ">
            <Bounce cascade damping={0.4} duration={2000}>
              <h1 className="max-w-2xl font-gelion font-bold text-4xl/[42px] md:text-[60px]/[70px] mb-9">
                Connecting{" "}
                <span className="text-primary color-slide bounce-delayed">
                  teen techie
                </span>{" "}
                looking to meet other techies in Nigeria
              </h1>

              <p className="max-w-xl mb-8 text-[15px]/[30px] font-dm-sans md:text-xl/[30px] text-grey">
                We are a Community that connects teen techies accross Africa in
                one place to share opportunites, work on awesome projects and
                foster quality connections.
              </p>

              <button className="bg-primary text-white font-semibold text-base lg:text-xl rounded-[25px] px-[18px] py-[14.5px] sm:px-8 sm:py-4 lg:px-12 lg:py-[23px] hover:scale-105 transition-all4">
                <a
                  href="https://forms.gle/csVUQEScZpiK9WzE8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the Community
                </a>
              </button>
            </Bounce>
          </div>
          <div className="h-[600px] sm:hidden"></div>
          <TestComponent />
        </div>
      </div>
      <img
        className="absolute max-md:right-0 max-md:rotate-180 sm:left-0 max-lg:w-[200px] max-lg:bottom-8 lg:bottom-10 animate-pulse"
        src="/assets/arrow.svg"
        alt=""
      />
    </section>
  );
};

export default Hero;
