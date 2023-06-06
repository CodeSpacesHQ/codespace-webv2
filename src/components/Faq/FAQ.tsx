import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  headTextAnimation,
  headContentAnimation,
  headContainerAnimation,
} from "../../config/motion";
import { plus, minus } from "../../assets/icon";
import { fadeAnimation } from "../../config/motion";
import { faqData } from "../../data/faqData";

interface faqItem {
  question: string;
  answer: string;
  index: number;
}

const FAQ: React.FC<faqItem> = ({ index, question, answer }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={`${
        index !== faqData.length - 1 &&
        "pb-6 border-b border-solid border-[#EAECF0]"
      } ${index !== 0 && "pt-6"}`}
    >
      <div
        className="flex items-center justify-between mb-2 text-base font-medium tracking-normal cursor-pointer sm:text-lg font-inter"
        onClick={toggleOpen}
      >
        <motion.div {...headTextAnimation}>{question}</motion.div>

        <AnimatePresence>
          {isOpen ? (
            <motion.img
              {...fadeAnimation}
              src={minus}
              alt="icon"
              className="w-6 ms-6"
            />
          ) : (
            <motion.img
              {...fadeAnimation}
              src={plus}
              alt="icon"
              className="w-6 ms-6"
            />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-sm font-normal tracking-normal sm:text-base font-inter"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FAQ;
