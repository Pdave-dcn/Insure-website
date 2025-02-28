import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideLeftContainerVariants,
  slideLeftChildVariants,
  slideRightContainerVariants,
  slideRightChildVariants,
} from "../animationsVariants";

import { plans, faqs } from "./data";

const PlansPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Hero Section with Pattern */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideLeftContainerVariants}
        className="relative flex flex-col items-center justify-center w-full h-[300px] lg:h-[500px]"
      >
        <div className="absolute -z-10 inset-0">
          <img
            src="images/bg-pattern-intro-left-mobile.svg"
            alt="Pattern"
            className="absolute left-0 top-0 lg:hidden"
          />
          <img
            src="images/bg-pattern-intro-right-desktop.svg"
            alt="Pattern"
            className="hidden lg:block absolute right-0 top-0"
          />
        </div>
        <motion.h1
          variants={slideLeftChildVariants}
          className="text-4xl p-4 lg:text-5xl font-dmSerif text-very-dark-violet text-center mb-3"
        >
          Find the Right Plan for You
        </motion.h1>

        <motion.p
          variants={slideLeftChildVariants}
          className="text-very-dark-violet text-center max-w-2xl px-4"
        >
          Compare our insurance options and secure your future today.
        </motion.p>
        <motion.div
          variants={slideLeftChildVariants}
          className="w-35 h-[1px] bg-very-dark-violet mt-6 lg:mt-8 lg:w-80"
        ></motion.div>
      </motion.div>

      {/* Plans Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideRightContainerVariants}
        className="w-full max-w-[1440px] px-6 lg:px-30 py-20"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={slideRightChildVariants}
              className="bg-light-gray hover:bg-dark-violet hover:text-white 
                transition-all duration-300 shadow-lg rounded-xl p-8 text-center group"
            >
              <h2 className="text-2xl font-dmSerif mb-4">{plan.name}</h2>
              <p
                className="text-3xl font-bold text-grayish-blue group-hover:text-white 
                transition-colors duration-300 mb-6"
              >
                {plan.price}
              </p>
              {Object.entries(plan).map(([key, value]) => {
                if (key !== "name" && key !== "price") {
                  const formattedKey = key.replace(/([A-Z])/g, " $1").trim();
                  const capitalizedKey =
                    formattedKey.charAt(0).toUpperCase() +
                    formattedKey.slice(1);

                  return (
                    <p
                      key={key}
                      className="text-dark-grayish-violet group-hover:text-gray-300 
        transition-colors duration-300 mb-2"
                    >
                      {capitalizedKey}: {value}
                    </p>
                  );
                }
                return null;
              })}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full py-3 bg-white text-very-dark-violet border-2 
                  border-very-dark-violet rounded-lg hover:bg-very-dark-violet hover:border-white
                  hover:text-white transition-all duration-300 font-dmSerif"
              >
                Select Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideLeftContainerVariants}
        className="w-full max-w-[1440px] px-6 lg:px-30 py-20"
      >
        <motion.div
          variants={fadeInUpVariants}
          className="w-35 h-[1px] bg-dark-grayish-violet mb-6 mx-auto"
        ></motion.div>
        <motion.h2
          variants={fadeInUpVariants}
          className="text-3xl font-dmSerif text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={slideLeftChildVariants}
              className="bg-light-gray rounded-xl overflow-hidden"
            >
              <button
                className="w-full p-6 text-left font-dmSerif flex justify-between items-center
                  hover:bg-dark-violet hover:text-white transition-colors duration-300"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-dark-grayish-violet">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="w-full max-w-[1440px] px-6 lg:px-30 mb-20"
      >
        <div className="relative p-10 lg:p-16 bg-dark-violet text-white rounded-lg overflow-hidden">
          <img
            src="images/bg-pattern-how-we-work-desktop.svg"
            alt="Pattern"
            className="absolute right-0 top-0"
          />
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-dmSerif mb-4">
              Still unsure? Let's find the best plan for you.
            </h3>
            <p className="text-gray-300 mb-6">
              Get personalized recommendations in just a few minutes.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-very-dark-violet rounded-lg
                border-2 border-white hover:bg-transparent hover:text-white
                transition-all duration-300 font-dmSerif"
            >
              Get a Free Quote
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlansPage;
