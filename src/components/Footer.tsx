import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const elements = [
    {
      title: "OUR COMPANY",
      links: ["HOW WE WORK", "WHY INSURE?", "CHECK PRICE", "REVIEWS"],
    },
    {
      title: "HELP ME",
      links: ["FAQ", "", "TERMS OF USE", "PRIVACY POLICY", "COOKIES"],
    },
    {
      title: "CONTACT",
      links: ["SALES", "SUPPORT", "LIVE CHAT"],
    },
    {
      title: "OTHERS",
      links: ["CAREERS", "PRESS", "LICENSES"],
    },
  ];

  const basePath = import.meta.env.BASE_URL;
  return (
    <div className="relative flex flex-col items-center bg-light-gray">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center lg:w-full lg:px-30 lg:mt-10">
        <Link to={`${basePath}`}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            src="images/logo.svg"
            alt="Logo icon"
            className="object-contain cursor-pointer relative z-10"
          />
        </Link>
        <div className="flex items-center gap-4 p-4">
          <img
            src="images/icon-facebook.svg"
            alt="Facebook icon"
            className="socials__icon cursor-pointer"
          />
          <img
            src="images/icon-twitter.svg"
            alt="Twitter icon"
            className="socials__icon cursor-pointer"
          />
          <img
            src="images/icon-pinterest.svg"
            alt="Pinterest icon"
            className="socials__icon cursor-pointer"
          />
          <img
            src="images/icon-instagram.svg"
            alt="Instagram icon"
            className="socials__icon cursor-pointer"
          />
        </div>
      </div>

      <div className="w-80 lg:w-[90%] h-[1px] bg-dark-grayish-violet mb-6 mt-6 opacity-30 lg:mt-3"></div>

      <div className="mb-20 lg:flex lg:justify-between lg:w-full lg:px-30">
        {elements.map((element) => (
          <div
            key={element.title}
            className="flex flex-col items-center gap-2 p-4 lg:items-start"
          >
            <h2 className="text-sm text-dark-grayish-violet font-medium mb-6">
              {element.title}
            </h2>
            {element.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-very-dark-violet font-bold"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
        <img
          src="images/bg-pattern-footer-mobile.svg"
          alt="Pattern image"
          className="absolute top-0 left-0 footer__pattern opacity-30 lg:hidden"
        />
        <img
          src="images/bg-pattern-footer-desktop.svg"
          alt="Pattern image"
          className="hidden absolute top-0 left-0 footer__pattern opacity-30 lg:block"
        />
      </div>
    </div>
  );
};

export default Footer;
