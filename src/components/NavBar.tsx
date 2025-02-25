import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", when: "beforeChildren" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn", delay: 0.3 },
    },
  };

  const listVariants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
    hidden: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <nav className="relative flex justify-between items-center p-5 bg-white">
      <img src="images/logo.svg" alt="Logo icon" className="object-contain" />
      <div>
        <button type="button" onClick={() => setIsOpen(true)}>
          <img
            src="images/icon-hamburger.svg"
            alt="Hamburger menu"
            className={`${isOpen ? "hidden" : "block"}`}
          />
        </button>
        <button type="button" onClick={() => setIsOpen(false)}>
          <img
            src="images/icon-close.svg"
            alt="Close menu"
            className={`${!isOpen ? "hidden" : "block"}`}
          />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="absolute inset-0 top-20 w-full h-[800px] bg-very-dark-violet text-white"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={listVariants}
              className="flex flex-col items-center gap-7.5 mt-10"
            >
              <motion.li variants={itemVariants}>
                <a href="#">HOW WE WORK</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#">BLOG</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#">ACCOUNT</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#" className="border-2 py-2 px-30">
                  VIEW PLANS
                </a>
              </motion.li>
            </motion.ul>
            <img
              src="images/bg-pattern-mobile-nav.svg"
              alt="Pattern image"
              className="absolute top-58 right-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
