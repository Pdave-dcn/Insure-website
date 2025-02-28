import AdvantagesSection from "./AdvantagesSection";
import { motion } from "motion/react";
import {
  slideLeftContainerVariants,
  slideLeftChildVariants,
  slideRightContainerVariants,
  slideRightChildVariants,
} from "../animationsVariants";
import { Link } from "react-router-dom";

const MainPage = () => {
  const basePath = import.meta.env.BASE_URL;
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="images/image-intro-mobile.jpg"
        alt="Family image"
        className="lg:hidden"
      />

      <div className="bg-dark-violet relative lg:w-full">
        <img
          src="images/bg-pattern-intro-left-mobile.svg"
          alt="Image pattern"
          className="lg:hidden"
        />
        <img
          src="images/bg-pattern-intro-left-desktop.svg"
          alt="Image pattern"
          className="hidden lg:block absolute left-0 -bottom-85"
        />

        {/* Left side animation content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideLeftContainerVariants}
          className="text-white text-center p-6.5 -mt-25 lg:text-start lg:w-[600px] lg:mt-12 lg:ml-25 lg:mb-12"
        >
          <motion.div
            variants={slideLeftChildVariants}
            className="hidden lg:block w-35 h-[1px] bg-dark-grayish-violet mb-9"
          ></motion.div>
          <motion.h1
            variants={slideLeftChildVariants}
            className="font-dmSerif text-[2.7rem] leading-none mb-4.5"
          >
            Humanizing <br /> your insurance.
          </motion.h1>
          <motion.p variants={slideLeftChildVariants} className="mb-7">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your love ones are protect.
          </motion.p>
          <Link to={`${basePath}plans`}>
            <motion.button
              variants={slideLeftChildVariants}
              type="button"
              className="border p-1.5 px-6 mb-13 hover:bg-white hover:text-dark-violet font-medium hover:font-bold transition-all duration-300 relative z-10 cursor-pointer"
            >
              VIEW PLANS
            </motion.button>
          </Link>
          <motion.img
            src="images/bg-pattern-intro-right-mobile.svg"
            alt="Image pattern"
            className="absolute right-0 top-77 lg:hidden"
          />
        </motion.div>

        {/* Right side animation content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideRightContainerVariants}
        >
          <motion.img
            variants={slideRightChildVariants}
            src="images/bg-pattern-intro-right-desktop.svg"
            alt="Image pattern"
            className="hidden absolute right-0 top-0 lg:block z-10"
          />
          <motion.img
            variants={slideRightChildVariants}
            src="images/image-intro-desktop.jpg"
            alt="Family image"
            className="hidden lg:block absolute right-30 top-20"
          />
        </motion.div>
      </div>

      <AdvantagesSection />

      <div className="flex justify-center lg:w-full lg:px-30">
        <div className="relative flex flex-col items-center justify-center bg-dark-violet text-white p-4.5 w-[90%] h-85 lg:h-65 mb-35 lg:w-full lg:px-30 lg:flex-row lg:justify-between">
          <img
            src="images/bg-pattern-how-we-work-mobile.svg"
            alt="Image pattern"
            className="absolute right-0 lg:hidden"
          />
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src="images/bg-pattern-how-we-work-desktop.svg"
            alt="Image pattern"
            className="hidden absolute right-0 lg:block"
          />
          <motion.h4
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-dmSerif text-[2.7rem] lg:text-5xl leading-none text-center mb-9 lg:mb-0 lg:text-start lg:w-110"
          >
            Find out more about how we work.
          </motion.h4>

          <Link to={`${basePath}how-we-work`}>
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              type="button"
              className="border-2 py-2 px-5.5 lg:px-7.5 hover:bg-white hover:text-dark-violet font-medium hover:font-bold transition-all duration-300 relative z-10 cursor-pointer"
            >
              HOW WE WORK
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
