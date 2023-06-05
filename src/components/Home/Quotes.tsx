import AnimateWords from "../../config/textAnimation";

const Quotes = () => {
  return (
    <section className="font-gelion px-7 lg:px-[138px]">
      <div className="relative max-w-2xl py-20 mx-auto xl:max-w-4xl">
        <img
          className="absolute w-16 h-16 lg:w-28 lg:h-28 -top-2 lg:top-5 lg:-left-36"
          src="/assets/left-quote.svg"
          alt="left quote"
        />
        <img
          className="absolute bottom-0 right-0 w-16 h-16 lg:w-28 lg:h-28 lg:bottom-10 lg:-right-32"
          src="/assets/right-quote.svg"
          alt="right quote"
        />
        <p className="text-2xl italic font-semibold leading-8">
          <AnimateWords text="Our goal is to create a unified platform that connects tech-savvy teenagers from all over Africa. We aim to provide a space where they can come together to share opportunities, collaborate on impressive projects, and forge meaningful relationships. By fostering this community, we strive to empower young African tech enthusiasts and nurture their passion for innovation and growth." />
        </p>
      </div>
    </section>
  );
};

export default Quotes;
