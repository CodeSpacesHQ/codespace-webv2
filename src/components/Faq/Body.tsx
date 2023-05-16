import FAQ from "./FAQ";
import { faqData } from "../../data/faqData";

const Body = () => {
  return (
    <section className="sm:pt-[296px] pt-[166px] xl:px-64 lg:px-44 sm:px-24 px-[42px] pb-[109px] sm:pb-[343px] bg-[#F7F7FD]">
      <div className="mb-16 text-center">
        <h1 className="mb-5 font-inter font-semibold text-[#101828] text-3xl/[38px] sm:text-[42px]/[44px] tracking-normal sm:tracking-[-0.02em]">
          Frequently asked questions
        </h1>
        <p className="font-inter font-normal tracking-normal mx-auto text-[#667085] text-lg sm:text-2xl/[30px]">
          Everything you need to know about the product and billing.
        </p>
      </div>

      {faqData.map((faq, index) => (
        <FAQ
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </section>
  );
};

export default Body;
