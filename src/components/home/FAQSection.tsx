"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { faqs } from "../../data/faq-data";
import FreeAdopters from "./FreeAdopters";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-[60px] px-6 lg:px-0">
      <div className="max-w-[792px] mx-auto">
        <h2 className="text-2xl md:text-[32px] md:leading-10 font-semibold text-[#020617] text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-2 mt-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`max-w-[792px] w-full py-3 md:py-5 ${
                index !== faqs.length - 1 ? "border-b border-[#E8EBED]" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full py-2 md:py-4 text-left text-lg md:text-xl font-medium md:font-semibold"
              >
                {faq.question}
                <span className="ease-in-out duration-500">
                  {openIndex === index ? (
                    <LuMinus className="text-[#020617] lg:text-xl text-lg" />
                  ) : (
                    <LuPlus className="text-[#020617] lg:text-xl text-lg" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 150 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="overflow-hidden max-w-[656px]"
                  >
                    <p className="pb-4 text-[#606673] font-medium text-lg text-[16px] leading-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <FreeAdopters />
      </div>
    </section>
  );
};

export default FAQSection;
