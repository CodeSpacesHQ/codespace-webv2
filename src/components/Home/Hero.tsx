import { Bounce } from "react-awesome-reveal";
import AnimatedBoxes from "./Animation";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8F8FD] to-white sm:min-h-[calc(100vh+400px)] lg:min-h-[calc(100vh+820px)] xl:min-h-[calc(100vh+100px)] wideScreen:min-h-[calc(100vh+200px)] overflow-hidden">
      <div className="bg-[url('/assets/Elements.png')] bg-no-repeat bg-left bg-cover">
        <div className="pt-[136px] max-w-[1500px] mx-auto">
          <div className="px-7 sm:px-16 lg:px-[65px] md:py-0 xl:pl-[101px] relative ">
            <Bounce cascade damping={0.4} duration={2000}>
              <h1 className="max-w-2xl lg:max-xl:max-w-xl font-gelion font-bold text-4xl/[42px] md:text-[60px]/[70px] lg:max-xl:text-5xl/[60px] mb-9">
                Connecting{" "}
                <span className="text-primary color-slide bounce-delayed">
                  teen techie
                </span>{" "}
                looking to meet other techies in Nigeria
              </h1>

              <p className="max-w-xl lg:max-xl:max-w-md mb-8 text-[15px]/[30px] font-dm-sans md:text-xl/[30px] text-grey">
                We are a Community that connects teen techies accross Africa in
                one place to share opportunites, work on awesome projects and
                foster quality connections.
              </p>

              <button className="bg-primary text-white font-semibold text-base lg:text-xl rounded-[15px] px-[18px] py-[14.5px] sm:px-8 sm:py-4 lg:px-12 hover:scale-105 transition-all">
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
          <AnimatedBoxes />
        </div>
      </div>
      <img
        className="absolute max-md:right-0 max-md:hidden max-md:rotate-180 sm:left-0 max-lg:w-[200px] max-lg:bottom-8 lg:bottom-10 animate-pulse"
        src="/assets/arrow.svg"
        alt="icons"
      />
    </section>
  );
};

export default Hero;
