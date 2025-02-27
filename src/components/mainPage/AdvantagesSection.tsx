import { motion } from "motion/react";
import {
  slideLeftContainerVariants,
  slideLeftChildVariants,
} from "../animationsVariants";

const AdvantagesSection = () => {
  const advantages = [
    {
      image: "images/icon-snappy-process.svg",
      name: "Snappy Process",
      description:
        "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
    },
    {
      image: "images/icon-affordable-prices.svg",
      name: "Affordable Prices",
      description:
        "We don't want you worrying about high monthly costs. Our prices may be low, but we offer the best coverage possible.",
    },
    {
      image: "images/icon-people-first.svg",
      name: "People First",
      description:
        "Our plans aren't full of conditions and clauses to prevent payouts. We make sure your are covered when you need it.",
    },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideLeftContainerVariants}
        className="flex flex-col items-center mt-37 p-6.5 lg:px-30 lg:mt-90 lg:items-start"
      >
        <motion.div
          variants={slideLeftChildVariants}
          className="w-35 h-[1px] bg-dark-grayish-violet mb-6"
        ></motion.div>
        <motion.h2
          variants={slideLeftChildVariants}
          className="text-[2.7rem] text-very-dark-violet font-dmSerif mb-13"
        >
          We're different
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideLeftContainerVariants}
          className="flex flex-col gap-11 mb-20 lg:flex-row lg:gap-20 lg:mb-35"
        >
          {advantages.map((advantage) => (
            <motion.div
              variants={slideLeftChildVariants}
              key={advantage.name}
              className="flex flex-col items-center lg:items-start"
            >
              <img
                src={advantage.image}
                alt={advantage.name}
                className="mb-9"
              />
              <h3 className="font-dmSerif text-3xl text-very-dark-violet mb-4">
                {advantage.name}
              </h3>
              <p className="text-center text-dark-grayish-violet lg:text-start">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default AdvantagesSection;
