import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

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

  const basePath = import.meta.env.BASE_URL;

  return (
    <nav className="relative flex justify-between items-center p-5 bg-white border-b border-very-dark-violet lg:px-30">
      <Link to={`${basePath}`}>
        <motion.img
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          src="images/logo.svg"
          alt="Logo icon"
          onClick={handleLinkClick}
          className="object-contain cursor-pointer"
        />
      </Link>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? "images/icon-close.svg" : "images/icon-hamburger.svg"}
            alt={isOpen ? "Close menu" : "Hamburger menu"}
          />
        </button>
      </div>

      {/* Desktop navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <Link
          to={`${basePath}how-we-work`}
          className="text-dark-grayish-violet hover:text-very-dark-violet hover:font-bold transition-all"
        >
          HOW WE WORK
        </Link>
        <Link
          to={`${basePath}blog`}
          className="text-dark-grayish-violet hover:text-very-dark-violet hover:font-bold transition-all"
        >
          BLOG
        </Link>
        <Link
          to={`${basePath}account`}
          className="text-dark-grayish-violet hover:text-very-dark-violet hover:font-bold transition-all"
        >
          ACCOUNT
        </Link>
        <Link
          to={`${basePath}plans`}
          className="border-2 border-very-dark-violet py-2 px-6 text-dark-grayish-violet hover:bg-very-dark-violet hover:text-white hover:font-bold transition-all"
        >
          VIEW PLANS
        </Link>
      </div>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="absolute z-50 inset-0 top-20 w-full h-screen bg-very-dark-violet text-white lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={listVariants}
              className="flex flex-col items-center gap-7 mt-10"
            >
              <motion.li variants={itemVariants}>
                <Link
                  to={`${basePath}how-we-work`}
                  onClick={handleLinkClick}
                  className="text-white hover:text-gray-300 hover:font-bold transition-all"
                >
                  HOW WE WORK
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  to={`${basePath}blog`}
                  onClick={handleLinkClick}
                  className="text-white hover:text-gray-300 hover:font-bold transition-all"
                >
                  BLOG
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  to={`${basePath}account`}
                  onClick={handleLinkClick}
                  className="text-white hover:text-gray-300 hover:font-bold transition-all"
                >
                  ACCOUNT
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  to={`${basePath}plans`}
                  onClick={handleLinkClick}
                  className="border-2 py-2 px-8 text-white hover:bg-white hover:text-very-dark-violet hover:font-bold transition-all"
                >
                  VIEW PLANS
                </Link>
              </motion.li>
            </motion.ul>
            <img
              src="images/bg-pattern-mobile-nav.svg"
              alt="Pattern image"
              className="absolute bottom-0 right-0 w-full lg:hidden"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
