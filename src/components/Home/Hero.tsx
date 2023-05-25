import { Bounce } from "react-awesome-reveal";
import TestComponent from "./Test";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8F8FD] to-white min-h-[90vh] md:min-h-[calc(100vh+100px)] ">
      <div className="bg-[url('/assets/Hero-bg.svg')] bg-no-repeat bg-right bg-contain">
        <div className="pt-[188px] sm:pt-[199px] flex items-center overflow-hidden relative max-w-[1500px] mx-auto">
          <div className="px-7 sm:px-16 lg:px-[65px] md:py-0 xl:pl-[101px] relative ">
            <Bounce cascade damping={0.4} duration={2000}>
              <h1 className="max-w-3xl font-gelion font-bold text-4xl leading-[42px] md:text-[64px] md:leading-[70px] mb-9">
                Connecting{" "}
                <span className="text-primary color-slide bounce-delayed">
                  teen techie
                </span>{" "}
                looking to meet other techies in Nigeria
              </h1>

              <p className="max-w-2xl mb-8 text-lg font-dm-sans md:text-2xl text-grey">
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
        </div>
        <TestComponent />
      </div>
      <img
        src="/assets/rotate.svg"
        className="absolute w-32 h-32 bottom-10 lg:bottom-40 right-7 md:right-20 animate-spin-slow md:w-auto md:h-auto"
        alt=""
      />
      <img
        className="absolute left-0 bottom-24 lg:bottom-5 animate-pulse"
        src="/assets/arrow.svg"
        alt=""
      />
    </section>
  );
};

export default Hero;
