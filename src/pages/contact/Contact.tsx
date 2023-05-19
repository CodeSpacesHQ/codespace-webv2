import useReadingProgress from "../../hooks/useReadingProgress";

import ContactBody from "../../components/Contact/Body";
import ContactHero from "../../components/Contact/Hero";
import { Partners } from "../../components/about";

const Contact = () => {
  const completion = useReadingProgress();
  return (
    <div className="max-w-[1520px] mx-auto">
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <ContactHero />
      <ContactBody />
      <Partners />
    </div>
  );
};

export default Contact;
