import { Bounce } from "react-awesome-reveal";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ContactHero = () => {
  const planeRef = useRef<HTMLImageElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const plane = planeRef.current;

    const initialAnimation = async () => {
      if (!plane) return;

      await controls.start({
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

        controls.set({
          x: translateX,
          y: -translateY,
          skewX: -rotateZ,
        });
      } else {
        controls.set({
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
      className="relative w-full h-full overflow-hidden xl:ps-[104px] pt-[232px] max-md:pt-[189px] 
        max-xl:px-[65px] pb-[129px] max-md:pb-[42px] flex justify-between items-center
        wideScreen:pe-[280px] xl:pe-[175px] max-md:px-7 max-md:flex-col"
    >
      <img
        className="absolute bottom-20 -right-6"
        width={123}
        height={143}
        src="/assets/bottom-dots.svg"
        alt="dots icons"
      />
      <div className="max-md:me-16 max-sm:me-0">
        <Bounce cascade damping={0.4} duration={2000}>
          <h1 className="text-primary uppercase mb-[19px]">Get in touch</h1>
          <h2 className="font-gelion font-semibold text-[29px] leading-[42px] md:text-[43px] lg:text-[55px] md:leading-[65.98px] mb-12">
            Empowering{" "}
            <span className="text-primary color-slide bounce-delayed">
              Africa
            </span>{" "}
            through the limitless potential of technology
          </h2>
        </Bounce>
      </div>
      <motion.img
        ref={planeRef}
        initial={{ opacity: 0, x: "-100%", y: "100%", skewX: "10deg" }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relativew w-56 h-56 sm:h-48 sm:w-48 lg:w-80 lg:h-80 max-md:me-[34px] max-sm:me-[75px]"
        src="/assets/plane-arrow.svg"
        alt="paper plane icon"
        style={{ transition: "transform 0.3s ease-out" }} // Add initial transition
      />
    </section>
  );
};

export default ContactHero;
