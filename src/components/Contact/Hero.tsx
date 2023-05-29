import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useSlideIn from "../../hooks/useSlideIn";

const ContactHero = () => {
  const planeRef = useRef<HTMLImageElement>(null);
  const control = useAnimation();
  const { controls, ref } = useSlideIn();
  useEffect(() => {
    const plane = planeRef.current;

    const initialAnimation = async () => {
      if (!plane) return;

      await control.start({
        opacity: 1,
        x: 0,
        y: 0,
        skewX: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    };

    const handleScroll = () => {
      if (!plane) return;

      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;

      const planeOffsetTop = plane.offsetTop;

      const isVisible = scrollPosition + windowHeight > planeOffsetTop;
      const isAboveViewport =
        scrollPosition > planeOffsetTop + plane.offsetHeight;

      if (isVisible && !isAboveViewport) {
        const distanceFromTop = planeOffsetTop - scrollPosition;
        const maxTranslation = 200; // Adjust the maximum flying distance
        const maxRotation = 30; // Adjust the maximum rotation in degrees

        const translateY = Math.max(maxTranslation - distanceFromTop, 0);
        const translateX = (translateY / maxTranslation) * 100;
        const rotateZ = (translateY / maxTranslation) * maxRotation;

        control.set({
          x: translateX,
          y: -translateY,
          skewX: -rotateZ,
        });
      } else {
        control.set({
          x: 0,
          y: 0,
          skewX: 0,
        });
      }
    };

    initialAnimation(); // Run initial animation on page load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className="relative bg-center bg-[url('../assets/pattern.png')] bg-cover w-full h-full overflow-hidden xl:ps-[104px] pt-[182px] max-md:pt-[189px] 
        max-xl:px-[65px] pb-[129px] max-md:pb-[42px] flex justify-between items-center
        wideScreen:pe-[280px] xl:pe-[175px] max-md:px-7 max-md:flex-col"
    >
      <img
        className="absolute bottom-0 -right-6 sm:right-0"
        width={123}
        height={143}
        src="/assets/bottom-dots.svg"
        alt="dots icons"
      />
      <img
        className="absolute rotate-[355deg] max-md:-left-16 sm:rotate-[345deg] sm:right-[12rem] lg:right-[310px] wideScreen:right-[26rem] max-lg:w-[200px] -bottom-14 sm:-bottom-2 animate-pulse"
        src="/assets/arrow.svg"
        alt=""
      />
      <div className="max-md:me-16 max-sm:me-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: "-100%" }}
          animate={controls}
        >
          <h1 className="text-primary uppercase mb-[19px]">Get in touch</h1>
          <h2 className="font-gelion font-semibold text-[29px] leading-[42px] md:text-[43px] lg:text-[55px] md:leading-[65.98px] mb-12 max-w-xl lg:max-w-2xl">
            Empowering <span className="text-primary color-slide">Africa</span>{" "}
            through the limitless potential of technology
          </h2>
        </motion.div>
      </div>
      <motion.img
        ref={planeRef}
        initial={{ opacity: 0, x: "-100%", y: "100%", skewX: "10deg" }}
        animate={control}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-20 h-20 lg:w-[141px] lg:h-[141px] max-md:me-[34px] max-sm:me-[75px]"
        src="/assets/plane-arrow.svg"
        alt="paper plane icon"
        style={{ transition: "transform 0.3s ease-out" }} // Add initial transition
      />
    </section>
  );
};

export default ContactHero;
