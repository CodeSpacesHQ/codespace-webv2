import { AboutBanner, Vision, Team, Partners } from ".";
import Header from "../../components/Header-B";
import Footer from "../../components/Footer-B";

export const About = () => {
  return (
    <section className="relative">
      <Header />
      <div className="py-8 mt-16">
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

      <div>
        <Footer />
      </div>
    </section>
  );
};
