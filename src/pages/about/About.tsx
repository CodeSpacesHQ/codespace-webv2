import { AboutBanner, Vision, Team } from ".";
import { Partners } from ".";

export const About = () => {
  return (
    <section className="relative">
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
