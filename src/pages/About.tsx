import { Partners, AboutBanner, Vision, Team } from "../components/about";
import useReadingProgress from "../hooks/useReadingProgress";

export const About = () => {
  const completion = useReadingProgress();
  return (
    <section className="relative">
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <div>
        <AboutBanner />
      </div>

      <div>
        <Vision />
      </div>

      <div>
        <Team />
      </div>

      <div>
        <Partners />
      </div>
    </section>
  );
};
