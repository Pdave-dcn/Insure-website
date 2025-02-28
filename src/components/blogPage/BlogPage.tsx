import { motion } from "framer-motion";
import {
  slideLeftContainerVariants,
  slideLeftChildVariants,
  slideRightContainerVariants,
  slideRightChildVariants,
} from "../animationsVariants";
import { blogCategories, popularArticles } from "./data";

const BlogPage = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col items-center gap-30 text-very-dark-violet">
      {/* Hero section with animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideLeftContainerVariants}
        className="relative flex flex-col items-center justify-center w-full h-[300px] lg:h-[500px]"
      >
        <div
          className="absolute -z-10 inset-0 bg-[url('images/bg-blog-intro-mobile.png')] lg:bg-[url('images/bg-blog-intro.jpg')] bg-cover bg-center 
          before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        />
        <h1 className="relative z-10 font-dmSerif text-2xl text-white text-center p-5 lg:text-5xl lg:max-w-4xl">
          Stay informed: Everything you need to know about life insurance.
        </h1>
        <div className="w-10 h-[1px] -mt-3 bg-white lg:w-60 lg:mt-0"></div>
      </motion.div>

      {/* Article Categories section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideRightContainerVariants}
        className="flex flex-col items-center w-full max-w-[1440px] px-6 lg:px-30"
      >
        <motion.div
          variants={fadeInUpVariants}
          className="w-35 h-[1px] mb-6 bg-dark-grayish-violet"
        ></motion.div>
        <motion.h1
          variants={fadeInUpVariants}
          className="text-3xl font-dmSerif mb-15"
        >
          Article Categories
        </motion.h1>

        {/* Categories grid */}
        <div className="grid grid-cols-1 gap-11 w-full lg:grid-cols-3 lg:gap-x-8 lg:gap-y-15">
          {blogCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={slideRightChildVariants}
              className="flex flex-col items-center gap-8 p-8 bg-light-gray rounded-xl 
                hover:shadow-lg transition-all duration-300 cursor-pointer 
                lg:items-start lg:gap-10"
            >
              <div className="relative w-40 h-40 bg-grayish-blue rounded-xl shadow-xl flex-shrink-0">
                <img
                  src="images/bg-pattern-intro-left-mobile.svg"
                  alt="Pattern"
                  className="article__pattern absolute left-0 top-0 w-30 //lg:hidden"
                />
                <img
                  src="images/bg-pattern-intro-left-mobile.svg"
                  alt="Pattern"
                  className="article__pattern absolute right-0 bottom-0 w-30 rotate-180 //lg:hidden"
                />
              </div>
              <div className="flex flex-col items-center gap-3 lg:items-start">
                <h2 className="font-dmSerif text-2xl">{category.name}</h2>
                <p className="text-center text-dark-grayish-violet lg:text-left">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Popular Now section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideLeftContainerVariants}
        className="flex flex-col items-center w-full max-w-[1440px] px-6 lg:px-30"
      >
        <motion.div
          variants={fadeInUpVariants}
          className="w-35 h-[1px] mb-6 bg-dark-grayish-violet"
        ></motion.div>
        <motion.h2
          variants={fadeInUpVariants}
          className="text-3xl font-dmSerif mb-15"
        >
          Popular Now
        </motion.h2>

        <div className="grid grid-cols-1 gap-11 w-full lg:grid-cols-2 lg:gap-15">
          {popularArticles.map((article, index) => (
            <motion.div
              key={index}
              variants={slideLeftChildVariants}
              className="group flex flex-col items-center gap-6.5 p-8 rounded-xl 
                bg-light-gray hover:bg-dark-violet hover:text-white transition-all duration-300 
                cursor-pointer lg:flex-row lg:items-start lg:gap-10 lg:min-h-[200px]"
            >
              {/* Article number */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full 
              bg-dark-violet text-white group-hover:bg-white group-hover:text-dark-violet 
              font-dmSerif text-2xl transition-colors duration-300"
              >
                {index + 1}
              </div>

              <div className="flex flex-col items-center gap-4 lg:items-start">
                {/* Category and date */}
                <div className="flex items-center gap-3 text-sm">
                  <span
                    className="font-bold uppercase tracking-wider 
                  group-hover:text-gray-300 transition-colors duration-300"
                  >
                    {article.category}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-dark-grayish-violet 
                  group-hover:bg-gray-300"
                  ></span>
                  <span
                    className="text-dark-grayish-violet group-hover:text-gray-300 
                  transition-colors duration-300"
                  >
                    {article.date}
                  </span>
                </div>

                {/* Article title */}
                <h3
                  className="font-dmSerif text-2xl text-center lg:text-left 
                group-hover:text-white transition-colors duration-300"
                >
                  {article.article}
                </h3>

                {/* Read more link */}
                <div
                  className="flex items-center gap-2 text-dark-grayish-violet 
                group-hover:text-white transition-colors duration-300"
                >
                  <span className="font-bold">Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="w-full max-w-[1440px] px-6 lg:px-30 mb-30"
      >
        <div className="relative p-10 lg:p-16 bg-dark-violet text-white rounded-lg overflow-hidden">
          {/* Pattern background */}
          <div className="absolute top-0 right-0">
            <img
              src="images/bg-pattern-how-we-work-mobile.svg"
              alt="Pattern"
              className="w-full h-full lg:hidden"
            />
            <img
              src="images/bg-pattern-how-we-work-desktop.svg"
              alt="Pattern"
              className="hidden lg:block"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
            <div className="text-center lg:text-left lg:max-w-xl">
              <h3 className="font-dmSerif text-3xl lg:text-4xl mb-5">
                Subscribe to our newsletter to receive our daily news
              </h3>
              <p className="mb-7 text-gray-300">
                Stay informed with the latest insights on life insurance,
                financial planning, and industry updates. Subscribe now and
                never miss an important update!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:flex-none px-6 py-3 rounded-lg bg-white text-very-dark-violet 
                placeholder:text-dark-grayish-violet focus:outline-none focus:ring-2 
                focus:ring-very-dark-violet w-full lg:w-80"
              />
              <button
                className="px-6 py-3 bg-very-dark-violet text-white rounded-lg 
                border-2 border-white hover:bg-white hover:text-very-dark-violet 
                transition-colors duration-300 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
