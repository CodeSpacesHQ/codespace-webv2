const Quotes = () => {
  return (
    <section className="font-gelion px-7 lg:px-[138px]">
      <div className="py-20 max-w-2xl xl:max-w-4xl mx-auto relative">
        <img
          className="w-16 h-16 lg:w-28 lg:h-28 absolute -top-2 lg:top-5 lg:-left-36"
          src="/assets/left-quote.svg"
          alt="left quote"
        />
        <img
          className="w-16 h-16 lg:w-28 lg:h-28 absolute lg:bottom-10 bottom-0 right-0 lg:-right-32"
          src="/assets/right-quote.svg"
          alt="right quote"
        />
        <p className="italic font-semibold text-2xl leading-8">
          Our goal is to create a unified platform that connects tech-savvy
          teenagers from all over Africa. We aim to provide a space where they
          can come together to share opportunities, collaborate on impressive
          projects, and forge meaningful relationships. By fostering this
          community, we strive to empower young African tech enthusiasts and
          nurture their passion for innovation and growth.
        </p>
      </div>
    </section>
  );
};

export default Quotes;
