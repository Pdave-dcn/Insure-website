import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideLeftContainerVariants,
  slideLeftChildVariants,
} from "./animationsVariants";

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideLeftContainerVariants}
      className="flex items-center justify-center min-h-screen bg-gray-100 p-4 text-very-dark-violet"
    >
      <motion.div
        variants={slideLeftChildVariants}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <motion.h2
          variants={inputVariants}
          className="text-2xl font-semibold text-center mb-4 font-dmSerif"
        >
          {isLogin ? "Welcome Back!" : "Join Insure & Stay Protected"}
        </motion.h2>
        <motion.p
          variants={inputVariants}
          className="text-gray-600 text-center mb-6"
        >
          {isLogin
            ? "Access your account, view your policies, and stay in control of your coverage."
            : "Create an account to easily manage your policies, file claims, and receive expert insights."}
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? "login" : "signup"}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            {!isLogin && (
              <motion.div variants={inputVariants} className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-grayish-blue"
                />
              </motion.div>
            )}

            <motion.div variants={inputVariants} className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-grayish-blue"
              />
            </motion.div>

            <motion.div variants={inputVariants} className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-grayish-blue"
              />
            </motion.div>

            {!isLogin && (
              <motion.div variants={inputVariants} className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-grayish-blue"
                />
              </motion.div>
            )}

            {isLogin && (
              <motion.div variants={inputVariants} className="text-right mb-4">
                <a href="#" className="text-grayish-blue hover:underline">
                  Forgot password?
                </a>
              </motion.div>
            )}

            <motion.button
              variants={inputVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="py-2 font-semibold bg-white text-very-dark-violet rounded-lg 
                border-3 border-very-dark-violet hover:bg-very-dark-violet hover:text-white 
                transition-colors duration-300 w-full cursor-pointer font-dmSerif"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </motion.button>
          </motion.form>
        </AnimatePresence>

        <motion.p
          variants={inputVariants}
          className="text-gray-600 text-center mt-4"
        >
          {isLogin ? "New to Insure?" : "Already have an account?"}{" "}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsLogin(!isLogin)}
            className="text-grayish-blue font-medium hover:underline cursor-pointer"
          >
            {isLogin ? "Create an account" : "Log in"}
          </motion.button>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AccountPage;
