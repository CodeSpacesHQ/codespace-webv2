const Donations = () => {
  return (
    <section className="font-gelion bg-light-purple pt-[82px] pb-[59px] relative overflow-hidden">
      <div className="space-y-6 mx-auto text-center w-[90%] max-w-5xl ">
        <h2 className="text-primary text-sm md:text-2xl leading-[28.79px] tracking-[12%] uppercase">
          We need donations
        </h2>

        <h2 className="font-medium text-[28px] leading-[33.59px] md:leading-[47.99px] md:font-semibold md:text-[40px]">
          $1/day can make all the difference
        </h2>

        <p className="font-poppins text-base md:text-2xl leading-[20.83px] md:leading-9 -tracking-[0.2px] pb-10">
          Our platform enables people to support each other in achieving their
          goals, and every dollar donated makes a significant difference. We're
          also dedicated to breaking down barriers in tech by providing
          resources and support to help individuals pursue their passions.
        </p>
        <button className="bg-primary text-white font-semibold text-base md:text-xl lg:text-[26px] rounded-[25px] px-7 sm:px-8 py-4 md:px-24 md:py-5 hover:scale-105 transition-all leading-[19.2px] lg:leading-[33.59px]">
          <a
            href="https://forms.gle/csVUQEScZpiK9WzE8"
            target="_blank"
            rel="noreferrer"
          >
            Get Involved
          </a>
        </button>
      </div>

      <div className="absolute w-24 h-24 bottom-4 right-5 md:w-40 md:h-40">
        <div className="absolute top-0 left-0 w-24 h-24 border-2 border-dashed rounded-full md:w-40 md:h-40 border-primary animate-spin-slow"></div>
        <div className="w-16 h-16 mx-auto my-4 rounded-full bg-primary md:w-32 md:h-32 ">
          <img
            className="w-16 h-16 md:w-32 md:h-32"
            src="/assets/wink-boy.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Donations;
