import FAQ from "./FAQ";
import { faqData } from "../../data/faqData";

const Body = () => {
  return (
    <div className="sm:pt-[296px] pt-[166px] xl:px-64 lg:px-44 sm:px-24 px-[42px] pb-[109px] sm:pb-[343px] bg-[#F7F7FD]">
      {faqData.map((faq, index) => (
        <FAQ
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default Body;
